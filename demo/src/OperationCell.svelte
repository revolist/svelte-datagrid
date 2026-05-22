<script lang="ts">
  import type { SvelteCellProps } from '@revolist/svelte-datagrid';

  let { value, rowIndex }: SvelteCellProps = $props();
</script>

<button class="operation-cell" type="button">
  Row {rowIndex}: {value}
</button>

<style>
  .operation-cell {
    border: 1px solid #3b82f6;
    border-radius: 4px;
    background: #eff6ff;
    color: #1d4ed8;
    font: inherit;
    padding: 2px 8px;
  }
</style>
