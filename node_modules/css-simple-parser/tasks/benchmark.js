
/* IMPORT */

import benchmark from 'benchloop';
import Parser from '../dist/index.js';
import tokenizer from '../dist/tokenizer.js';
import {INPUT} from '../test/fixtures.js';

/* HELPERS */

const AST = Parser.parse ( INPUT );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 10000,
  log: 'compact'
});

benchmark ({
  name: 'tokenizer',
  fn: () => {
    tokenizer ( INPUT );
  }
});

benchmark ({
  name: 'parse',
  fn: () => {
    Parser.parse ( INPUT );
  }
});

benchmark ({
  name: 'stringify',
  fn: () => {
    Parser.stringify ( AST );
  }
});

benchmark ({
  name: 'traverse',
  fn: () => {
    Parser.traverse ( AST, () => {} );
  }
});

benchmark.summary ();
