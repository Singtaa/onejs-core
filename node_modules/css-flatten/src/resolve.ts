
/* MAIN */

const Resolve = {

  ampersand: ( resolved: string[], selector: string, parents: string[] ): void => {

    for ( let pi = 0, pl = parents.length; pi < pl; pi++ ) {

      const temp = selector.replace ( '&', parents[pi] );

      if ( temp.indexOf ( '&' ) >= 0 ) { // Ampersand selector

        Resolve.ampersand ( resolved, temp, parents );

      } else { // Regular selector

        resolved.push ( temp );

      }

    }

  },

  selectors: ( selectors: string[], parents: string[] ): string[] => {

    const resolved: string[] = [];

    for ( let i = 0, l = selectors.length; i < l; i++ ) {

      const selector = selectors[i];

      if ( selector.indexOf ( '&' ) >= 0 ) { // Ampersand selector

        Resolve.ampersand ( resolved, selector, parents );

      } else { // Regular selector

        for ( let pi = 0, pl = parents.length; pi < pl; pi++ ) {

          resolved.push ( `${parents[pi]} ${selector}` );

        }

      }

    }

    return resolved;

  }

};

/* EXPORT */

export default Resolve;
