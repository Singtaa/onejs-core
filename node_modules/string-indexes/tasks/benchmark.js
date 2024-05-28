
/* IMPORT */

import benchmark from 'benchloop';
import {indexes} from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1000000,
  log: 'compact'
});

benchmark ({
  name: 'string-indexes',
  fn: () => {
    indexes ( 'xxxx__xxxx__xxxxx', 'xx' );
  }
});
