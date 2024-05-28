
/* IMPORT */

import Parser from 'css-simple-parser';
import type {NODE} from 'css-simple-parser/src/types';
import Resolve from './resolve';

/* MAIN */

const flatten = ( css: string ): string => {

  /* PARSING */

  const AST = Parser.parse ( css );

  /* RESOLVING SELECTORS */

  const selectorsCache = new Map<NODE, string[]> ();

  Parser.traverse ( AST, node => {

    const {selector, parent} = node;

    let selectors = selector.trim ().split ( /\s*,\s*/g ); // Splitting and cleaning up

    if ( 'selector' in parent ) { // Regular node

      selectors = Resolve.selectors ( selectors, selectorsCache.get ( parent ) || [] );

      node.selector = selectors.join ( ',' );

    } else { // Top-level node

      if ( selector.indexOf ( '&' ) >= 0 ) throw new Error ( 'Top-level ampersand placeholders are invalid' );

    }

    selectorsCache.set ( node, selectors );

  });

  /* FLATTENING */

  const nodes: NODE[] = [];

  Parser.traverse ( AST, node => {

    if ( !/\S/.test ( node.body ) ) return; // Ignoring empty blocks, nothing to output

    nodes.push ( node );

  });

  AST.children = nodes;

  /* WIDOWING */

  const empty: never[] = [];

  for ( let i = 0, l = nodes.length; i < l; i++ ) {

    nodes[i].children = empty;

  }

  /* STRINGIFYING */

  return Parser.stringify ( AST );

};

/* EXPORT */

export default flatten;
