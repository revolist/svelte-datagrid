<script lang="ts">
  import {
    Editor,
    RevoGrid,
    Template,
    type ColumnRegular,
    type Editors,
  } from '@revolist/svelte-datagrid';
  import OperationCell from './OperationCell.svelte';
  import OperationEditor from './OperationEditor.svelte';

  const OPERATION_EDITOR = 'operation';

  // Function to generate column headers
  function generateHeader(index: number): string {
    const asciiFirstLetter = 65;
    const lettersCount = 26;
    let div = index + 1;
    let label = '';
    let pos = 0;
    while (div > 0) {
      pos = (div - 1) % lettersCount;
      label = String.fromCharCode(asciiFirstLetter + pos) + label;
      div = Math.floor((div - pos) / lettersCount);
    }
    return label.toLowerCase();
  }

  // Function to generate fake data
  function generateFakeDataObject(rowsNumber: number, colsNumber: number) {
    const result: any[] = [];
    const columns: Record<number | string, ColumnRegular> = {};
    const dataColsNumber = colsNumber - 1;
    const totalCells = rowsNumber * dataColsNumber;

    for (let i = 0; i < totalCells; i++) {
      const col = i % dataColsNumber;
      const row = Math.floor(i / dataColsNumber);

      if (!result[row]) {
        result[row] = {
          operation: `Edit ${row}`,
        };
      }

      if (!columns[col]) {
        columns[col] = {
          name: generateHeader(col),
          prop: col,
        };
      }

      result[row][col] = `${row}:${col}`;
    }

    columns.operation = {
      name: 'Operation',
      prop: 'operation',
      cellTemplate: Template(OperationCell),
      editor: OPERATION_EDITOR,
      autoSize: true,
      size: 180,
    };

    const headers = Array.from({ length: dataColsNumber }, (_, index) => columns[index]);
    headers.push(columns.operation);
    return { source: result, headers };
  }

  // Generate initial data
  const data = generateFakeDataObject(100, 5);
  const source = data.source;
  const columns = data.headers;
  const editors: Editors = {
    [OPERATION_EDITOR]: Editor(OperationEditor),
  };
</script>

<!-- Render the RevoGrid component -->
<RevoGrid {source} {columns} {editors} />
