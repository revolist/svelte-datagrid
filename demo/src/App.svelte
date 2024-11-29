<script lang="ts">
  import { RevoGrid, type ColumnRegular } from '@revolist/svelte-datagrid';

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
    const columns: Record<number, ColumnRegular> = {};
    const totalCells = rowsNumber * colsNumber;

    for (let i = 0; i < totalCells; i++) {
      const col = i % colsNumber;
      const row = Math.floor(i / colsNumber);

      if (!result[row]) {
        result[row] = {};
      }

      if (!columns[col]) {
        columns[col] = {
          name: generateHeader(col),
          prop: col,
        };
      }

      result[row][col] = `${row}:${col}`;
    }

    const headers = Object.keys(columns).map(key => columns[parseInt(key, 10)]);
    return { source: result, headers };
  }

  // Generate initial data
  const data = generateFakeDataObject(100, 5);
  const source = data.source;
  const columns = data.headers;
</script>

<!-- Render the RevoGrid component -->
<RevoGrid {source} {columns} />