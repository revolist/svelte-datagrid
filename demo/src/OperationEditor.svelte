<script lang="ts">
  import type { EditorType } from '@revolist/svelte-datagrid';

  let { val, value, save, close }: EditorType = $props();
  let currentValue = $state('');

  $effect(() => {
    currentValue = String(val ?? value ?? '');
  });

  export function getValue() {
    return currentValue;
  }
</script>

<div class="operation-editor">
  <input bind:value={currentValue} aria-label="Operation value" />
  <button type="button" onclick={() => save(currentValue)}>Save</button>
  <button type="button" onclick={() => close()}>Close</button>
</div>

<style>
  .operation-editor {
    align-items: center;
    display: flex;
    gap: 4px;
    height: 100%;
  }

  input {
    border: 1px solid #9ca3af;
    border-radius: 3px;
    font: inherit;
    min-width: 80px;
    padding: 2px 4px;
  }

  button {
    border: 1px solid #6b7280;
    border-radius: 3px;
    background: #f9fafb;
    font: inherit;
    padding: 2px 6px;
  }
</style>
