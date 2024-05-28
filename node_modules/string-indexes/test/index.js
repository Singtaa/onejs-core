
/* IMPORT */

import {describe} from 'fava';
import indexes from '../dist/index.js';

/* MAIN */

describe ( 'String Indexes', it => {

  it ( 'works', t => {

    t.deepEqual ( indexes ( 'xxxx__xxxx__xxxxx', 'xx' ), [0, 2, 6, 8, 12, 14] );

  });

});
