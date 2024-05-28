
/* IMPORT */

import benchmark from 'benchloop';
import flatten from '../dist/index.js';
import {INPUT} from '../test/fixtures.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1000,
  log: 'compact'
});

benchmark ({
  name: 'css-flatten',
  fn: () => {
    flatten ( INPUT );
  }
});
