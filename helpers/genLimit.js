"use strict";

const genLimit = (gen) => {
    let limit;
    let offset;

    if (gen === 'kanto'){
        limit = 151
        offset = 0
    } else if (gen === 'johto'){
        limit = 100
        offset = 151
    } else if (gen === 'hoenn'){
        limit = 135
        offset = 251
    } else {
        limit = 151
        offset = 0
    }
    return { limit, offset }
}

module.exports = genLimit