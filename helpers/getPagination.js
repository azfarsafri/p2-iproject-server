"use strict";

const getPagination = (page, size) => {
    const limit = size ? +size : 9
    const offset = page ? page * limit - limit : 0

    return { limit, offset };
}

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: post } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, post, totalPages, currentPage };
}

module.exports = { getPagination, getPagingData };