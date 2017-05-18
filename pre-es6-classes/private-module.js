'use strict';

const PrivateModule = (() => {
    return {
        print1: () => console.log('log-1-1'),
        print2: () => console.log('log-1-2')
    }
})();

module.exports = PrivateModule;