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
    } else if (gen === 'sinnoh'){
        limit = 108
        offset = 386
    } else if (gen === 'unova'){
        limit = 156
        offset = 494
    } else if (gen === 'kalos'){
        limit = 72
        offset = 649
    } else if (gen === 'alola'){
        limit = 88
        offset = 721
    } else if (gen === 'galar'){
        limit = 91
        offset = 809
    } else {
        limit = 151
        offset = 0
    }
    return { limit, offset }
}

module.exports = genLimit