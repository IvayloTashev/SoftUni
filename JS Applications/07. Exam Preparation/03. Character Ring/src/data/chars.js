import { del, get, post, put } from "./request.js"

const endpoints = {
    dashboard: "/data/characters?sortBy=_createdOn%20desc",
    charecters: "/data/characters",
    charById: "/data/characters/",
}

async function getAllCharecters() {
    return get(endpoints.dashboard);
}

async function getCharById(id) {
    return get(endpoints.charById + id);
}

async function addChar(category, imageUrl, description, moreInfo) {
    return post(endpoints.charecters, {
        category,
        imageUrl,
        description,
        moreInfo
    })
}

async function updateChar(id, category, imageUrl, description, moreInfo) {
    return put(endpoints.charById + id, {
        category,
        imageUrl,
        description,
        moreInfo
    })
}

async function deleteChar(id) {
    return del(endpoints.charById + id);
}

export {
    getAllCharecters,
    getCharById,
    addChar,
    updateChar,
    deleteChar,
}