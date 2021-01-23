
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
function noop() { }
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function children(element) {
    return Array.from(element.childNodes);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
    if (flushing)
        return;
    flushing = true;
    do {
        // first, call beforeUpdate functions
        // and update components
        for (let i = 0; i < dirty_components.length; i += 1) {
            const component = dirty_components[i];
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : global);
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const prop_values = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, prop_values, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.31.2' }, detail)));
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}

var __extends=undefined&&undefined.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n];};return e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t;}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r);}}();var __awaiter=undefined&&undefined.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e);}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e));}catch(e){o(e);}}function i(e){try{l(r["throw"](e));}catch(e){o(e);}}function l(e){e.done?n(e.value):a(e.value).then(s,i);}l((r=r.apply(e,t||[])).next());}))};var __generator=undefined&&undefined.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(o=s[0]&2?a["return"]:s[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;if(a=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return {value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n);}catch(e){s=[6,e];a=0;}finally{r=o=0;}if(s[0]&5)throw s[1];return {value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=undefined&&undefined.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),a=0,t=0;t<n;t++)for(var o=arguments[t],s=0,i=o.length;s<i;s++,a++)r[a]=o[s];return r};var NAMESPACE="revo-grid";var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var isSvgMode=false;var renderingRef=null;var queuePending=false;var win=typeof window!=="undefined"?window:{};var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var addHostEventListeners=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],o=n[2];var s=getHostListenerTarget(e,r);var i=hostListenerProxy(t,o);var l=hostListenerOpts(r);plt.ael(s,a,i,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(s,a,i,l)}));}));}};var hostListenerProxy=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n);}else {(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n]);}}}catch(e){consoleError(e);}}};var getHostListenerTarget=function(e,t){if(t&4)return doc;return e};var hostListenerOpts=function(e){return (e&2)!==0};var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var XLINK_NS="http://www.w3.org/1999/xlink";var createTime=function(e,t){{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,n){var r=styles.get(e);if(supportsConstructibleStylesheets&&n){r=r||new CSSStyleSheet;r.replace(t);}else {r=t;}styles.set(e,r);};var addStyle=function(e,t,n,r){var a=getScopeId(t,n);var o=styles.get(a);e=e.nodeType===11?e:doc;if(o){if(typeof o==="string"){e=e.head||e;var s=rootAppliedStyles.get(e);var i=void 0;if(!s){rootAppliedStyles.set(e,s=new Set);}if(!s.has(a)){{{i=doc.createElement("style");i.innerHTML=o;}e.insertBefore(i,e.querySelector("link"));}if(s){s.add(a);}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[o]);}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=createTime("attachStyles",t.$tagName$);addStyle(n.getRootNode(),t,e.$modeName$);r();};var getScopeId=function(e,t){return "sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$)};var computeMode=function(e){return modeResolutionChain.map((function(t){return t(e)})).find((function(e){return !!e}))};var setMode=function(e){return modeResolutionChain.push(e)};var EMPTY_OBJ={};var SVG_NS="http://www.w3.org/2000/svg";var HTML_NS="http://www.w3.org/1999/xhtml";var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r];}var a=null;var o=null;var s=null;var i=false;var l=false;var c=[];var f=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){f(a);}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!isComplexType(a)){a=String(a);}if(i&&l){c[c.length-1].$text$+=a;}else {c.push(i?newVNode(null,a):a);}l=i;}}};f(n);if(t){if(t.key){o=t.key;}if(t.name){s=t.name;}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ");}}}if(typeof e==="function"){return e(t===null?{}:t,c,vdomFnUtils)}var $=newVNode(e,null);$.$attrs$=t;if(c.length>0){$.$children$=c;}{$.$key$=o;}{$.$name$=s;}return $};var newVNode=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null;}{n.$key$=null;}{n.$name$=null;}return n};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var vdomFnUtils={forEach:function(e,t){return e.map(convertToPublic).forEach(t)},map:function(e,t){return e.map(convertToPublic).map(t).map(convertToPrivate)}};var convertToPublic=function(e){return {vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var convertToPrivate=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey;}if(e.vname){t.name=e.vname;}return h.apply(void 0,__spreadArrays([e.vtag,t],e.vchildren||[]))}var n=newVNode(e.vtag,e.vtext);n.$attrs$=e.vattrs;n.$children$=e.vchildren;n.$key$=e.vkey;n.$name$=e.vname;return n};var setAccessor=function(e,t,n,r,a,o){if(n!==r){var s=isMemberInElement(e,t);var i=t.toLowerCase();if(t==="class"){var l=e.classList;var c=parseClassList(n);var f=parseClassList(r);l.remove.apply(l,c.filter((function(e){return e&&!f.includes(e)})));l.add.apply(l,f.filter((function(e){return e&&!c.includes(e)})));}else if(t==="style"){{for(var u in n){if(!r||r[u]==null){if(u.includes("-")){e.style.removeProperty(u);}else {e.style[u]="";}}}}for(var u in r){if(!n||r[u]!==n[u]){if(u.includes("-")){e.style.setProperty(u,r[u]);}else {e.style[u]=r[u];}}}}else if(t==="key");else if(t==="ref"){if(r){r(e);}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3);}else if(isMemberInElement(win,i)){t=i.slice(2);}else {t=i[2]+t.slice(3);}if(n){plt.rel(e,t,n,false);}if(r){plt.ael(e,t,r,false);}}else {var $=isComplexType(r);if((s||$&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var d=r==null?"":r;if(t==="list"){s=false;}else if(n==null||e[t]!=d){e[t]=d;}}else {e[t]=r;}}catch(e){}}var v=false;{if(i!==(i=i.replace(/^xlink\:?/,""))){t=i;v=true;}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){if(v){e.removeAttributeNS(XLINK_NS,t);}else {e.removeAttribute(t);}}}else if((!s||o&4||a)&&!$){r=r===true?"":r;if(v){e.setAttributeNS(XLINK_NS,t,r);}else {e.setAttribute(t,r);}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return !e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var o=e&&e.$attrs$||EMPTY_OBJ;var s=t.$attrs$||EMPTY_OBJ;{for(r in o){if(!(r in s)){setAccessor(a,r,o[r],undefined,n,t.$flags$);}}}for(r in s){setAccessor(a,r,o[r],s[r],n,t.$flags$);}};var createElm=function(e,t,n,r){var a=t.$children$[n];var o=0;var s;var i;var l;if(!useNativeShadowDom){checkSlotRelocate=true;if(a.$tag$==="slot"){a.$flags$|=a.$children$?2:1;}}if(a.$text$!==null){s=a.$elm$=doc.createTextNode(a.$text$);}else if(a.$flags$&1){s=a.$elm$=doc.createTextNode("");}else {if(!isSvgMode){isSvgMode=a.$tag$==="svg";}s=a.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,a.$flags$&2?"slot-fb":a.$tag$);if(isSvgMode&&a.$tag$==="foreignObject"){isSvgMode=false;}{updateElement(null,a,isSvgMode);}if(a.$children$){for(o=0;o<a.$children$.length;++o){i=createElm(e,a,o);if(i){s.appendChild(i);}}}{if(a.$tag$==="svg"){isSvgMode=false;}else if(s.tagName==="foreignObject"){isSvgMode=true;}}}{s["s-hn"]=hostTagName;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=contentRef;s["s-sn"]=a.$name$||"";l=e&&e.$children$&&e.$children$[n];if(l&&l.$tag$===a.$tag$&&e.$elm$){putBackInOriginalLocation(e.$elm$,false);}}}return s};var putBackInOriginalLocation=function(e,t){plt.$flags$|=1;var n=e.childNodes;for(var r=n.length-1;r>=0;r--){var a=n[r];if(a["s-hn"]!==hostTagName&&a["s-ol"]){parentReferenceNode(a).insertBefore(a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=undefined;checkSlotRelocate=true;}if(t){putBackInOriginalLocation(a,t);}}plt.$flags$&=~1;};var addVnodes=function(e,t,n,r,a,o){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var i;for(;a<=o;++a){if(r[a]){i=createElm(null,n,a);if(i){r[a].$elm$=i;s.insertBefore(i,referenceNode(t));}}}};var removeVnodes=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;callNodeRefs(r);{checkSlotFallbackVisibility=true;if(a["s-ol"]){a["s-ol"].remove();}else {putBackInOriginalLocation(a,true);}}a.remove();}}};var updateChildren=function(e,t,n,r){var a=0;var o=0;var s=0;var i=0;var l=t.length-1;var c=t[0];var f=t[l];var u=r.length-1;var $=r[0];var d=r[u];var v;var p;while(a<=l&&o<=u){if(c==null){c=t[++a];}else if(f==null){f=t[--l];}else if($==null){$=r[++o];}else if(d==null){d=r[--u];}else if(isSameVnode(c,$)){patch(c,$);c=t[++a];$=r[++o];}else if(isSameVnode(f,d)){patch(f,d);f=t[--l];d=r[--u];}else if(isSameVnode(c,d)){if(c.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(c.$elm$.parentNode,false);}patch(c,d);e.insertBefore(c.$elm$,f.$elm$.nextSibling);c=t[++a];d=r[--u];}else if(isSameVnode(f,$)){if(c.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(f.$elm$.parentNode,false);}patch(f,$);e.insertBefore(f.$elm$,c.$elm$);f=t[--l];$=r[++o];}else {s=-1;{for(i=a;i<=l;++i){if(t[i]&&t[i].$key$!==null&&t[i].$key$===$.$key$){s=i;break}}}if(s>=0){p=t[s];if(p.$tag$!==$.$tag$){v=createElm(t&&t[o],n,s);}else {patch(p,$);t[s]=undefined;v=p.$elm$;}$=r[++o];}else {v=createElm(t&&t[o],n,o);$=r[++o];}if(v){{parentReferenceNode(c.$elm$).insertBefore(v,referenceNode(c.$elm$));}}}}if(a>l){addVnodes(e,r[u+1]==null?null:r[u+1].$elm$,n,r,o,u);}else if(o>u){removeVnodes(t,a,l);}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var parentReferenceNode=function(e){return (e["s-ol"]?e["s-ol"]:e).parentNode};var patch=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var o=t.$tag$;var s=t.$text$;var i;if(s===null){{isSvgMode=o==="svg"?true:o==="foreignObject"?false:isSvgMode;}{if(o==="slot");else {updateElement(e,t,isSvgMode);}}if(r!==null&&a!==null){updateChildren(n,r,t,a);}else if(a!==null){if(e.$text$!==null){n.textContent="";}addVnodes(n,null,t,a,0,a.length-1);}else if(r!==null){removeVnodes(r,0,r.length-1);}if(isSvgMode&&o==="svg"){isSvgMode=false;}}else if(i=n["s-cr"]){i.parentNode.textContent=s;}else if(e.$text$!==s){n.data=s;}};var updateFallbackSlotVisibility=function(e){var t=e.childNodes;var n;var r;var a;var o;var s;var i;for(r=0,a=t.length;r<a;r++){n=t[r];if(n.nodeType===1){if(n["s-sr"]){s=n["s-sn"];n.hidden=false;for(o=0;o<a;o++){if(t[o]["s-hn"]!==n["s-hn"]){i=t[o].nodeType;if(s!==""){if(i===1&&s===t[o].getAttribute("slot")){n.hidden=true;break}}else {if(i===1||i===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}}updateFallbackSlotVisibility(n);}}};var relocateNodes=[];var relocateSlotContent=function(e){var t;var n;var r;var a;var o;var s;var i=0;var l=e.childNodes;var c=l.length;for(;i<c;i++){t=l[i];if(t["s-sr"]&&(n=t["s-cr"])){r=n.parentNode.childNodes;a=t["s-sn"];for(s=r.length-1;s>=0;s--){n=r[s];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(isNodeLocatedInSlot(n,a)){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));checkSlotFallbackVisibility=true;n["s-sn"]=n["s-sn"]||a;if(o){o.$slotRefNode$=t;}else {relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:n});}if(n["s-sr"]){relocateNodes.map((function(e){if(isNodeLocatedInSlot(e.$nodeToRelocate$,n["s-sn"])){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$;}}}));}}else if(!relocateNodes.some((function(e){return e.$nodeToRelocate$===n}))){relocateNodes.push({$nodeToRelocate$:n});}}}}if(t.nodeType===1){relocateSlotContent(t);}}};var isNodeLocatedInSlot=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var callNodeRefs=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(callNodeRefs);}};var renderVdom=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var o=isHost(t)?t:h(null,null,t);hostTagName=n.tagName;if(r.$attrsToReflect$){o.$attrs$=o.$attrs$||{};r.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return o.$attrs$[r]=n[t]}));}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=a.$elm$=n;{contentRef=n["s-cr"];useNativeShadowDom=(r.$flags$&1)!==0;checkSlotFallbackVisibility=false;}patch(a,o);{plt.$flags$|=1;if(checkSlotRelocate){relocateSlotContent(o.$elm$);var s=void 0;var i=void 0;var l=void 0;var c=void 0;var f=void 0;var u=void 0;var $=0;for(;$<relocateNodes.length;$++){s=relocateNodes[$];i=s.$nodeToRelocate$;if(!i["s-ol"]){l=doc.createTextNode("");l["s-nr"]=i;i.parentNode.insertBefore(i["s-ol"]=l,i);}}for($=0;$<relocateNodes.length;$++){s=relocateNodes[$];i=s.$nodeToRelocate$;if(s.$slotRefNode$){c=s.$slotRefNode$.parentNode;f=s.$slotRefNode$.nextSibling;l=i["s-ol"];while(l=l.previousSibling){u=l["s-nr"];if(u&&u["s-sn"]===i["s-sn"]&&c===u.parentNode){u=u.nextSibling;if(!u||!u["s-nr"]){f=u;break}}}if(!f&&c!==i.parentNode||i.nextSibling!==f){if(i!==f){if(!i["s-hn"]&&i["s-ol"]){i["s-hn"]=i["s-ol"].parentNode.nodeName;}c.insertBefore(i,f);}}}else {if(i.nodeType===1){i.hidden=true;}}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(o.$elm$);}plt.$flags$&=~1;relocateNodes.length=0;}};var emitEvent=function(e,t,n){var r=plt.ce(t,n);e.dispatchEvent(r);return r};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})));}};var scheduleUpdate=function(e,t){{e.$flags$|=16;}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var n=function(){return dispatchHooks(e,t)};return writeTask(n)};var dispatchHooks=function(e,t){var n=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return safeCall(r,t,n)}));e.$queuedListeners$=null;}}{a=safeCall(r,"componentWillLoad");}}{a=then(a,(function(){return safeCall(r,"componentWillRender")}));}n();return then(a,(function(){return updateComponent(e,r,t)}))};var updateComponent=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,a,o,s,i,l;return __generator(this,(function(c){r=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);o=r["s-rc"];if(n){attachStyles(e);}s=createTime("render",e.$cmpMeta$.$tagName$);{{{renderVdom(e,callRender(e,t));}}}if(o){o.map((function(e){return e()}));r["s-rc"]=undefined;}s();a();{i=r["s-p"];l=function(){return postUpdateComponent(e)};if(i.length===0){l();}else {Promise.all(i).then(l);e.$flags$|=4;i.length=0;}}return [2]}))}))};var callRender=function(e,t){try{renderingRef=t;t=t.render&&t.render();{e.$flags$&=~16;}{e.$flags$|=2;}}catch(t){consoleError(t,e.$hostElement$);}renderingRef=null;return t};var postUpdateComponent=function(e){e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=createTime();var a=e.$lazyInstance$;var o=e.$ancestorComponent$;{safeCall(a,"componentDidRender");}if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(n);}{safeCall(a,"componentDidLoad");}r();{e.$onReadyResolve$(n);if(!o){appDidLoad();}}}else {r();}{e.$onInstanceResolve$(n);}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined;}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}));}e.$flags$&=~(4|512);}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement);}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}));};var safeCall=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(e){consoleError(e);}}return undefined};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,n,r){var a=getHostRef(e);var o=a.$hostElement$;var s=a.$instanceValues$.get(t);var i=a.$flags$;var l=a.$lazyInstance$;n=parsePropertyValue(n,r.$members$[t][0]);if((!(i&8)||s===undefined)&&n!==s){a.$instanceValues$.set(t,n);if(l){if(r.$watchers$&&i&128){var c=r.$watchers$[t];if(c){c.map((function(e){try{l[e](n,s,t);}catch(e){consoleError(e,o);}}));}}if((i&(2|16))===2){scheduleUpdate(a,false);}}}};var proxyComponent=function(e,t,n){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers;}var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],o=e[1][0];if(o&31||n&2&&o&32){Object.defineProperty(a,r,{get:function(){return getValue(this,r)},set:function(e){setValue(this,r,e,t);},configurable:true,enumerable:true});}else if(n&1&&o&64){Object.defineProperty(a,r,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t];}var n=getHostRef(this);return n.$onInstancePromise$.then((function(){var t;return (t=n.$lazyInstance$)[r].apply(t,e)}))}});}}));if(n&1){var o=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;plt.jmp((function(){var t=o.get(e);r[t]=n===null&&typeof r[t]==="boolean"?false:n;}));};e.observedAttributes=r.filter((function(e){e[0];var n=e[1];return n[0]&15})).map((function(e){var n=e[0],r=e[1];var a=r[1]||n;o.set(a,n);if(r[0]&512){t.$attrsToReflect$.push([n,a]);}return a}));}}return e};var initializeComponent=function(e,t,n,r,a){return __awaiter(void 0,void 0,void 0,(function(){var r,o,s,i,l,c,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((t.$flags$&32)===0))return [3,3];t.$flags$|=32;a=loadModule(n);if(!a.then)return [3,2];r=uniqueTime();return [4,a];case 1:a=u.sent();r();u.label=2;case 2:if(!a.isProxied){{n.$watchers$=a.watchers;}proxyComponent(a,n,2);a.isProxied=true;}o=createTime("createInstance",n.$tagName$);{t.$flags$|=8;}try{new a(t);}catch(e){consoleError(e);}{t.$flags$&=~8;}{t.$flags$|=128;}o();fireConnectedCallback(t.$lazyInstance$);if(a.style){s=a.style;if(typeof s!=="string"){s=s[t.$modeName$=computeMode(e)];}i=getScopeId(n,t.$modeName$);if(!styles.has(i)){l=createTime("registerStyles",n.$tagName$);registerStyle(i,s,!!(n.$flags$&1));l();}}u.label=3;case 3:c=t.$ancestorComponent$;f=function(){return scheduleUpdate(t,true)};if(c&&c["s-rc"]){c["s-rc"].push(f);}else {f();}return [2]}}))}))};var fireConnectedCallback=function(e){{safeCall(e,"connectedCallback");}};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$cmpMeta$;var r=createTime("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(n.$flags$&(4|8)){setContentReference(e);}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){attachToAncestor(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a;}}));}{initializeComponent(e,t,n);}}else {addHostEventListeners(e,t,n.$listeners$);fireConnectedCallback(t.$lazyInstance$);}r();}};var setContentReference=function(e){var t=e["s-cr"]=doc.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild);};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined;}}{safeCall(n,"disconnectedCallback");}}};var bootstrapLazy=function(e,t){if(t===void 0){t={};}var n=createTime();var r=[];var a=t.exclude||[];var o=win.customElements;var s=doc.head;var i=s.querySelector("meta[charset]");var l=doc.createElement("style");var c=[];var f;var u=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;e.map((function(e){return e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2];}{n.$listeners$=t[3];}{n.$attrsToReflect$=[];}{n.$watchers$={};}var s=n.$tagName$;var i=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;registerHost(t,n);return r}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null;}if(u){c.push(this);}else {plt.jmp((function(){return connectedCallback(e)}));}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}));};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(s)&&!o.get(s)){r.push(s);o.define(s,proxyComponent(i,n,1));}}))}));{l.innerHTML=r+HYDRATED_CSS;l.setAttribute("data-styles","");s.insertBefore(l,i?i.nextSibling:s.firstChild);}u=false;if(c.length){c.map((function(e){return e.connectedCallback()}));}else {{plt.jmp((function(){return f=setTimeout(appDidLoad,30)}));}}n();};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerHost=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}));}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[];}addHostEventListeners(e,n,t.$listeners$);return hostRefs.set(e,n)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return (0, console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var o=cmpModules.get(a);if(o){return o[r]}return import("./"+a+".entry.js"+"").then((function(e){{cmpModules.set(a,e);}return e[r]}),consoleError)};var styles=new Map;var modeResolutionChain=[];var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(n){e.push(n);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush$1);}else {plt.raf(flush$1);}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now());}catch(e){consoleError(e);}}e.length=0;};var flush$1=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush$1);}}};var nextTick=function(e){return promiseResolve().then(e)};var writeTask=queueTask(queueDomWrites,true);

var ThemeCompact=function(){function e(){this.defaultRowSize=32;}return e}();var ThemeDefault=function(){function e(){this.defaultRowSize=27;}return e}();var ThemeMaterial=function(){function e(){this.defaultRowSize=42;}return e}();var DEFAULT_THEME="default";var allowedThemes=[DEFAULT_THEME,"material","compact","darkMaterial","darkCompact"];var ThemeService=function(){function e(e){this.customRowSize=0;this.customRowSize=e.rowSize;this.register("default");}Object.defineProperty(e.prototype,"theme",{get:function(){return this.currentTheme},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"rowSize",{get:function(){return this.customRowSize||this.currentTheme.defaultRowSize},set:function(e){this.customRowSize=e;},enumerable:false,configurable:true});e.prototype.register=function(t){var r=e.getTheme(t);switch(r){case"material":case"darkMaterial":this.currentTheme=new ThemeMaterial;break;case"compact":case"darkCompact":this.currentTheme=new ThemeCompact;break;default:this.currentTheme=new ThemeDefault;break}};e.getTheme=function(e){if(allowedThemes.indexOf(e)>-1){return e}return DEFAULT_THEME};return e}();

setMode((function(e){var t=e.theme||e.getAttribute("theme");if(typeof t==="string"){t=t.trim();}var r=ThemeService.getTheme(t);if(r!==t){e.setAttribute("theme",r);}return r}));

var patchEsm=function(){return promiseResolve()};var defineCustomElements=function(e,o){if(typeof window==="undefined")return Promise.resolve();return patchEsm().then((function(){return bootstrapLazy([["revogr-filter-panel",[[0,"revogr-filter-panel",{uuid:[1537],filterTypes:[16],filterNames:[16],filterEntities:[16],changes:[32],show:[64],getChanges:[64]},[[5,"mousedown","onMouseDown"]]]]],["revo-grid_12",[[32,"revo-grid",{rowHeaders:[4,"row-headers"],frameSize:[2,"frame-size"],rowSize:[2,"row-size"],colSize:[2,"col-size"],range:[4],readonly:[4],resize:[4],canFocus:[4,"can-focus"],columns:[16],source:[16],pinnedTopSource:[16],pinnedBottomSource:[16],rowDefinitions:[16],editors:[16],plugins:[16],columnTypes:[16],theme:[1537],rowClass:[513,"row-class"],autoSizeColumn:[4,"auto-size-column"],filter:[4],trimmedRows:[16],export:[4],grouping:[16],extraElements:[32],refresh:[64],scrollToRow:[64],scrollToColumnIndex:[64],scrollToColumnProp:[64],updateColumns:[64],addTrimmed:[64],scrollToCoordinate:[64],setCellEdit:[64],registerVNode:[64],getSource:[64],getVisibleSource:[64],getSourceStore:[64],getColumnStore:[64],updateColumnSorting:[64],getColumns:[64],clearFocus:[64],getPlugins:[64]},[[0,"internalCellEdit","onBeforeEdit"],[0,"internalRangeDataApply","onBeforeRangeEdit"],[0,"internalSelectionChanged","onRangeChanged"],[0,"initialRowDragStart","onDragStart"],[0,"initialRowDropped","onRowDropped"],[0,"initialHeaderClick","onHeaderClick"],[0,"internalFocusCell","onCellFocus"]]],[0,"revogr-viewport",{columnStores:[16],rowStores:[16],dimensions:[16],viewports:[16],editors:[16],rowClass:[1,"row-class"],uuid:[1],resize:[4],readonly:[4],range:[4],rowHeaders:[4,"row-headers"],columnFilter:[4,"column-filter"],scrollToCoordinate:[64],clearFocus:[64],setEdit:[64]},[[4,"click","handleOutsideClick"],[0,"internalRowDragStart","onRowDragStarted"],[0,"internalRowDragEnd","onRowDragEnd"],[0,"internalRowDrag","onRowDrag"],[0,"internalRowMouseMove","onRowMouseMove"]]],[4,"revogr-overlay-selection",{readonly:[4],range:[4],canDrag:[4,"can-drag"],selectionStore:[16],dimensionRow:[16],dimensionCol:[16],dataStore:[16],colData:[16],lastCell:[16],editors:[16],autoFill:[32]},[[5,"mousemove","onMouseMove"],[5,"mouseleave","onMouseOut"],[5,"mouseup","onMouseUp"],[0,"dragStartCell","onCellDrag"],[4,"keyup","onKeyUp"],[4,"keydown","onKeyDown"]]],[0,"revogr-data",{readonly:[4],range:[4],canDrag:[4,"can-drag"],rowClass:[1,"row-class"],colData:[16],rowSelectionStore:[16],viewportRow:[16],viewportCol:[16],dimensionRow:[16],dataStore:[16]}],[0,"revogr-focus",{selectionStore:[16],dimensionRow:[16],dimensionCol:[16]}],[0,"revogr-header",{viewportCol:[16],dimensionCol:[16],selectionStore:[16],parent:[1],groups:[16],groupingDepth:[2,"grouping-depth"],canResize:[4,"can-resize"],colData:[16],columnFilter:[4,"column-filter"]}],[0,"revogr-scroll-virtual",{dimension:[1],viewportStore:[16],dimensionStore:[16],setScroll:[64],changeScroll:[64]}],[0,"revogr-temp-range",{selectionStore:[16],dimensionRow:[16],dimensionCol:[16]}],[4,"revogr-viewport-scroll",{contentWidth:[2,"content-width"],contentHeight:[2,"content-height"],setScroll:[64],changeScroll:[64]}],[0,"revogr-clipboard",{doCopy:[64]},[[4,"paste","onPaste"],[4,"copy","copyStarted"]]],[0,"revogr-edit",{editCell:[16],column:[16],editor:[16]}],[0,"revogr-order-editor",{parent:[16],dimensionRow:[16],dimensionCol:[16],dataStore:[16],dragStart:[64],endOrder:[64],clearOrder:[64]},[[5,"mouseleave","onMouseOut"],[5,"mouseup","onMouseUp"]]]]]],o)}))};

(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,a);}})();

/* generated by Svelte v3.31.2 */
function create_fragment(ctx) {
    let revo_grid;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx[45].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[44], null);
    return {
        c() {
            revo_grid = element("revo-grid");
            if (default_slot)
                default_slot.c();
            set_custom_element_data(revo_grid, "row-headers", /*rowHeaders*/ ctx[0]);
            set_custom_element_data(revo_grid, "frame-size", /*frameSize*/ ctx[1]);
            set_custom_element_data(revo_grid, "row-size", /*rowSize*/ ctx[2]);
            set_custom_element_data(revo_grid, "col-size", /*colSize*/ ctx[3]);
            set_custom_element_data(revo_grid, "range", /*range*/ ctx[4]);
            set_custom_element_data(revo_grid, "readonly", /*readonly*/ ctx[5]);
            set_custom_element_data(revo_grid, "resize", /*resize*/ ctx[6]);
            set_custom_element_data(revo_grid, "can-focus", /*canFocus*/ ctx[7]);
            set_custom_element_data(revo_grid, "theme", /*theme*/ ctx[8]);
            set_custom_element_data(revo_grid, "row-class", /*rowClass*/ ctx[9]);
            set_custom_element_data(revo_grid, "auto-size-column", /*autoSizeColumn*/ ctx[10]);
            set_custom_element_data(revo_grid, "filter", /*filter*/ ctx[11]);
            set_custom_element_data(revo_grid, "exporting", /*exporting*/ ctx[12]);
        },
        m(target, anchor) {
            insert(target, revo_grid, anchor);
            if (default_slot) {
                default_slot.m(revo_grid, null);
            }
            /*revo_grid_binding*/ ctx[46](revo_grid);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(revo_grid, "beforeEdit", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeRangeEdit", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "afterEdit", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeAutofill", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeRange", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "rowOrderChanged", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeSourceSortingApply", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeSortingApply", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeSorting", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "rowDragStart", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "headerClick", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeCellFocus", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeSourceSet", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "afterSourceSet", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeColumnsSet", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "afterColumnsSet", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeFilterApply", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "viewportScroll", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeExport", /*onEvent*/ ctx[14]),
                    listen(revo_grid, "beforeEditStart", /*onEvent*/ ctx[14])
                ];
                mounted = true;
            }
        },
        p(ctx, dirty) {
            if (default_slot) {
                if (default_slot.p && dirty[1] & /*$$scope*/ 8192) {
                    update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[44], dirty, null, null);
                }
            }
            if (!current || dirty[0] & /*rowHeaders*/ 1) {
                set_custom_element_data(revo_grid, "row-headers", /*rowHeaders*/ ctx[0]);
            }
            if (!current || dirty[0] & /*frameSize*/ 2) {
                set_custom_element_data(revo_grid, "frame-size", /*frameSize*/ ctx[1]);
            }
            if (!current || dirty[0] & /*rowSize*/ 4) {
                set_custom_element_data(revo_grid, "row-size", /*rowSize*/ ctx[2]);
            }
            if (!current || dirty[0] & /*colSize*/ 8) {
                set_custom_element_data(revo_grid, "col-size", /*colSize*/ ctx[3]);
            }
            if (!current || dirty[0] & /*range*/ 16) {
                set_custom_element_data(revo_grid, "range", /*range*/ ctx[4]);
            }
            if (!current || dirty[0] & /*readonly*/ 32) {
                set_custom_element_data(revo_grid, "readonly", /*readonly*/ ctx[5]);
            }
            if (!current || dirty[0] & /*resize*/ 64) {
                set_custom_element_data(revo_grid, "resize", /*resize*/ ctx[6]);
            }
            if (!current || dirty[0] & /*canFocus*/ 128) {
                set_custom_element_data(revo_grid, "can-focus", /*canFocus*/ ctx[7]);
            }
            if (!current || dirty[0] & /*theme*/ 256) {
                set_custom_element_data(revo_grid, "theme", /*theme*/ ctx[8]);
            }
            if (!current || dirty[0] & /*rowClass*/ 512) {
                set_custom_element_data(revo_grid, "row-class", /*rowClass*/ ctx[9]);
            }
            if (!current || dirty[0] & /*autoSizeColumn*/ 1024) {
                set_custom_element_data(revo_grid, "auto-size-column", /*autoSizeColumn*/ ctx[10]);
            }
            if (!current || dirty[0] & /*filter*/ 2048) {
                set_custom_element_data(revo_grid, "filter", /*filter*/ ctx[11]);
            }
            if (!current || dirty[0] & /*exporting*/ 4096) {
                set_custom_element_data(revo_grid, "exporting", /*exporting*/ ctx[12]);
            }
        },
        i(local) {
            if (current)
                return;
            transition_in(default_slot, local);
            current = true;
        },
        o(local) {
            transition_out(default_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching)
                detach(revo_grid);
            if (default_slot)
                default_slot.d(detaching);
            /*revo_grid_binding*/ ctx[46](null);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let __ref;
    let __mounted = false;
    const dispatch = createEventDispatcher();
    let { rowHeaders = undefined } = $$props;
    let { frameSize = undefined } = $$props;
    let { rowSize = undefined } = $$props;
    let { colSize = undefined } = $$props;
    let { range = undefined } = $$props;
    let { readonly = undefined } = $$props;
    let { resize = undefined } = $$props;
    let { canFocus = undefined } = $$props;
    let { columns = undefined } = $$props;
    let { source = undefined } = $$props;
    let { pinnedTopSource = undefined } = $$props;
    let { pinnedBottomSource = undefined } = $$props;
    let { rowDefinitions = undefined } = $$props;
    let { editors = undefined } = $$props;
    let { plugins = undefined } = $$props;
    let { columnTypes = undefined } = $$props;
    let { theme = undefined } = $$props;
    let { rowClass = undefined } = $$props;
    let { autoSizeColumn = undefined } = $$props;
    let { filter = undefined } = $$props;
    let { trimmedRows = undefined } = $$props;
    let { exporting = undefined } = $$props;
    let { grouping = undefined } = $$props;
    const refresh = (...args) => __ref.refresh(...args);
    const scrollToRow = (...args) => __ref.scrollToRow(...args);
    const scrollToColumnIndex = (...args) => __ref.scrollToColumnIndex(...args);
    const scrollToColumnProp = (...args) => __ref.scrollToColumnProp(...args);
    const updateColumns = (...args) => __ref.updateColumns(...args);
    const addTrimmed = (...args) => __ref.addTrimmed(...args);
    const scrollToCoordinate = (...args) => __ref.scrollToCoordinate(...args);
    const setCellEdit = (...args) => __ref.setCellEdit(...args);
    const registerVNode = (...args) => __ref.registerVNode(...args);
    const getSource = (...args) => __ref.getSource(...args);
    const getVisibleSource = (...args) => __ref.getVisibleSource(...args);
    const getSourceStore = (...args) => __ref.getSourceStore(...args);
    const getColumnStore = (...args) => __ref.getColumnStore(...args);
    const updateColumnSorting = (...args) => __ref.updateColumnSorting(...args);
    const getColumns = (...args) => __ref.getColumns(...args);
    const clearFocus = (...args) => __ref.clearFocus(...args);
    const getPlugins = (...args) => __ref.getPlugins(...args);
    const getWebComponent = () => __ref;
    onMount(() => {
        $$invalidate(43, __mounted = true);
    });
    const setProp = (prop, value) => {
        if (__ref)
            $$invalidate(13, __ref[prop] = value, __ref);
    };
    const onEvent = e => {
        e.stopPropagation();
        dispatch(e.type, e.detail);
    };
    function revo_grid_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"](() => {
            __ref = $$value;
            $$invalidate(13, __ref);
        });
    }
    $$self.$$set = $$props => {
        if ("rowHeaders" in $$props)
            $$invalidate(0, rowHeaders = $$props.rowHeaders);
        if ("frameSize" in $$props)
            $$invalidate(1, frameSize = $$props.frameSize);
        if ("rowSize" in $$props)
            $$invalidate(2, rowSize = $$props.rowSize);
        if ("colSize" in $$props)
            $$invalidate(3, colSize = $$props.colSize);
        if ("range" in $$props)
            $$invalidate(4, range = $$props.range);
        if ("readonly" in $$props)
            $$invalidate(5, readonly = $$props.readonly);
        if ("resize" in $$props)
            $$invalidate(6, resize = $$props.resize);
        if ("canFocus" in $$props)
            $$invalidate(7, canFocus = $$props.canFocus);
        if ("columns" in $$props)
            $$invalidate(15, columns = $$props.columns);
        if ("source" in $$props)
            $$invalidate(16, source = $$props.source);
        if ("pinnedTopSource" in $$props)
            $$invalidate(17, pinnedTopSource = $$props.pinnedTopSource);
        if ("pinnedBottomSource" in $$props)
            $$invalidate(18, pinnedBottomSource = $$props.pinnedBottomSource);
        if ("rowDefinitions" in $$props)
            $$invalidate(19, rowDefinitions = $$props.rowDefinitions);
        if ("editors" in $$props)
            $$invalidate(20, editors = $$props.editors);
        if ("plugins" in $$props)
            $$invalidate(21, plugins = $$props.plugins);
        if ("columnTypes" in $$props)
            $$invalidate(22, columnTypes = $$props.columnTypes);
        if ("theme" in $$props)
            $$invalidate(8, theme = $$props.theme);
        if ("rowClass" in $$props)
            $$invalidate(9, rowClass = $$props.rowClass);
        if ("autoSizeColumn" in $$props)
            $$invalidate(10, autoSizeColumn = $$props.autoSizeColumn);
        if ("filter" in $$props)
            $$invalidate(11, filter = $$props.filter);
        if ("trimmedRows" in $$props)
            $$invalidate(23, trimmedRows = $$props.trimmedRows);
        if ("exporting" in $$props)
            $$invalidate(12, exporting = $$props.exporting);
        if ("grouping" in $$props)
            $$invalidate(24, grouping = $$props.grouping);
        if ("$$scope" in $$props)
            $$invalidate(44, $$scope = $$props.$$scope);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty[0] & /*columns*/ 32768 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("columns", columns);
        }
        if ($$self.$$.dirty[0] & /*source*/ 65536 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("source", source);
        }
        if ($$self.$$.dirty[0] & /*pinnedTopSource*/ 131072 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("pinnedTopSource", pinnedTopSource);
        }
        if ($$self.$$.dirty[0] & /*pinnedBottomSource*/ 262144 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("pinnedBottomSource", pinnedBottomSource);
        }
        if ($$self.$$.dirty[0] & /*rowDefinitions*/ 524288 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("rowDefinitions", rowDefinitions);
        }
        if ($$self.$$.dirty[0] & /*editors*/ 1048576 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("editors", editors);
        }
        if ($$self.$$.dirty[0] & /*plugins*/ 2097152 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("plugins", plugins);
        }
        if ($$self.$$.dirty[0] & /*columnTypes*/ 4194304 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("columnTypes", columnTypes);
        }
        if ($$self.$$.dirty[0] & /*trimmedRows*/ 8388608 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("trimmedRows", trimmedRows);
        }
        if ($$self.$$.dirty[0] & /*grouping*/ 16777216 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
             if (__mounted)
                setProp("grouping", grouping);
        }
    };
    return [
        rowHeaders,
        frameSize,
        rowSize,
        colSize,
        range,
        readonly,
        resize,
        canFocus,
        theme,
        rowClass,
        autoSizeColumn,
        filter,
        exporting,
        __ref,
        onEvent,
        columns,
        source,
        pinnedTopSource,
        pinnedBottomSource,
        rowDefinitions,
        editors,
        plugins,
        columnTypes,
        trimmedRows,
        grouping,
        refresh,
        scrollToRow,
        scrollToColumnIndex,
        scrollToColumnProp,
        updateColumns,
        addTrimmed,
        scrollToCoordinate,
        setCellEdit,
        registerVNode,
        getSource,
        getVisibleSource,
        getSourceStore,
        getColumnStore,
        updateColumnSorting,
        getColumns,
        clearFocus,
        getPlugins,
        getWebComponent,
        __mounted,
        $$scope,
        slots,
        revo_grid_binding
    ];
}
class RevoGrid extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {
            rowHeaders: 0,
            frameSize: 1,
            rowSize: 2,
            colSize: 3,
            range: 4,
            readonly: 5,
            resize: 6,
            canFocus: 7,
            columns: 15,
            source: 16,
            pinnedTopSource: 17,
            pinnedBottomSource: 18,
            rowDefinitions: 19,
            editors: 20,
            plugins: 21,
            columnTypes: 22,
            theme: 8,
            rowClass: 9,
            autoSizeColumn: 10,
            filter: 11,
            trimmedRows: 23,
            exporting: 12,
            grouping: 24,
            refresh: 25,
            scrollToRow: 26,
            scrollToColumnIndex: 27,
            scrollToColumnProp: 28,
            updateColumns: 29,
            addTrimmed: 30,
            scrollToCoordinate: 31,
            setCellEdit: 32,
            registerVNode: 33,
            getSource: 34,
            getVisibleSource: 35,
            getSourceStore: 36,
            getColumnStore: 37,
            updateColumnSorting: 38,
            getColumns: 39,
            clearFocus: 40,
            getPlugins: 41,
            getWebComponent: 42
        }, [-1, -1]);
    }
    $on(type, callback) {
        return super.$on(type, callback);
    }
    $set($$props) {
        super.$set($$props);
    }
    /** Refreshes data viewport.
  Can be specific part as row or pinned row or 'all' by default. */
    get refresh() {
        return this.$$.ctx[25];
    }
    /** Scrolls view port to specified row index */
    get scrollToRow() {
        return this.$$.ctx[26];
    }
    /** Scrolls view port to specified column index */
    get scrollToColumnIndex() {
        return this.$$.ctx[27];
    }
    /** Scrolls view port to specified column prop */
    get scrollToColumnProp() {
        return this.$$.ctx[28];
    }
    /** Update columns */
    get updateColumns() {
        return this.$$.ctx[29];
    }
    /** Add trimmed by type */
    get addTrimmed() {
        return this.$$.ctx[30];
    }
    /** Scrolls view port to coordinate */
    get scrollToCoordinate() {
        return this.$$.ctx[31];
    }
    /** Bring cell to edit mode */
    get setCellEdit() {
        return this.$$.ctx[32];
    }
    /** Register new virtual node inside of grid
  Used for additional items creation such as plugin elements */
    get registerVNode() {
        return this.$$.ctx[33];
    }
    /** Get data from source */
    get getSource() {
        return this.$$.ctx[34];
    }
    /** Get data from visible part of source
  Trimmed/filtered rows will be excluded */
    get getVisibleSource() {
        return this.$$.ctx[35];
    }
    /** Provides access to rows internal store observer
  Can be used for plugin support */
    get getSourceStore() {
        return this.$$.ctx[36];
    }
    /** Provides access to column internal store observer
  Can be used for plugin support */
    get getColumnStore() {
        return this.$$.ctx[37];
    }
    /** Update column sorting */
    get updateColumnSorting() {
        return this.$$.ctx[38];
    }
    /** Receive all columns in data source */
    get getColumns() {
        return this.$$.ctx[39];
    }
    /** Clear current grid focus */
    get clearFocus() {
        return this.$$.ctx[40];
    }
    /** Get all active plugins instances */
    get getPlugins() {
        return this.$$.ctx[41];
    }
    get getWebComponent() {
        return this.$$.ctx[42];
    }
}

/* public/App.svelte generated by Svelte v3.31.2 */

const { Object: Object_1, console: console_1 } = globals;

// (50:0) {#if visible}
function create_if_block(ctx) {
	let revogrid;
	let current;

	revogrid = new RevoGrid({
			props: {
				source: /*source*/ ctx[1],
				resize: "true",
				columns: /*headers*/ ctx[2],
				theme: "material"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(revogrid.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(revogrid, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(revogrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(revogrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(revogrid, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(50:0) {#if visible}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*visible*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*visible*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*visible*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function generateHeader(index) {
	const asciiFirstLetter = 65;
	const lettersCount = 26;
	let div = index + 1;
	let label = "";
	let pos = 0;

	while (div > 0) {
		pos = (div - 1) % lettersCount;
		label = String.fromCharCode(asciiFirstLetter + pos) + label;
		div = parseInt(((div - pos) / lettersCount).toString(), 10);
	}

	return label.toLowerCase();
}

function generateFakeDataObject(rowsNumber, colsNumber) {
	const result = [];
	const columns = {};
	const all = colsNumber * rowsNumber;

	for (let j = 0; j < all; j++) {
		let col = j % colsNumber;
		let row = j / colsNumber | 0;

		if (!result[row]) {
			result[row] = {};
		}

		if (!columns[col]) {
			columns[col] = { name: generateHeader(col), prop: col };
		}

		result[row][col] = row + ":" + col;
	}

	let headers = Object.keys(columns).map(k => columns[parseInt(k, 10)]);
	return { source: result, headers };
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("App", slots, []);
	let visible = false;

	defineCustomElements().then(() => {
		$$invalidate(0, visible = true);
		console.log("loaded");
	});

	const { source, headers } = { ...generateFakeDataObject(100, 5) };
	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<App> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		RevoGrid,
		defineCustomElements,
		visible,
		generateHeader,
		generateFakeDataObject,
		source,
		headers
	});

	$$self.$inject_state = $$props => {
		if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [visible, source, headers];
}

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "App",
			options,
			id: create_fragment$1.name
		});
	}
}

var app = new App({
	target: document.body
});

export default app;
//# sourceMappingURL=main.js.map
