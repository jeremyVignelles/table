import type {
  TableUserConfig,
} from '../../../src';
import {
  table,
} from '../../../src';
import expectTable from './expectTable';

describe('README.md usage/', () => {
  it('cell_content_alignment', () => {
    const data = [
      ['0A', '0B', '0C'],
      ['1A', '1B', '1C'],
      ['2A', '2B', '2C'],
    ];

    const config: TableUserConfig = {
      columns: {
        0: {
          alignment: 'left',
          width: 10,
        },
        1: {
          alignment: 'center',
          width: 10,
        },
        2: {
          alignment: 'right',
          width: 10,
        },
      },
    };

    const output = table(data, config);

    expectTable(output, `
╔════════════╤════════════╤════════════╗
║ 0A         │     0B     │         0C ║
╟────────────┼────────────┼────────────╢
║ 1A         │     1B     │         1C ║
╟────────────┼────────────┼────────────╢
║ 2A         │     2B     │         2C ║
╚════════════╧════════════╧════════════╝
        `);
  });
});
