'use strict';

import breakpoints from '../../styles/00-variables/_general.scss';

const matchMedia = (breakpoint) => {
    let width = breakpoints[breakpoint];

    if (width) {
        return window.matchMedia(`(max-width: ${width})`);
    } else {
        throw new Error(`No breakpoint: ${breakpoint} found`);
    }
};

export { matchMedia };
