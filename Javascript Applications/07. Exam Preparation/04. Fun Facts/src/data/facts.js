import { get, put, post, del } from "./request.js"

const endpoints = {
    allfacts: "/data/facts?sortBy=_createdOn%20desc",
    factById: "/data/facts/",
    facts: "/data/facts",
};

async function getAllFacts() {
    return get(endpoints.allfacts);
};

async function getFactById(id) {
    return get(endpoints.factById + id);
};

async function updateFact(id, category, imageUrl, description, moreInfo) {
    return put(endpoints.factById + id, {
        category, 
        imageUrl, 
        description, 
        moreInfo
    });
};

async function createFact(category, imageUrl, description, moreInfo) {
    return post(endpoints.facts, {
        category, 
        imageUrl, 
        description, 
        moreInfo
    });
};

async function deleteFact(id) {
    return del(endpoints.factById + id);
};

export {
    getAllFacts,
    getFactById,
    updateFact,
    createFact,
    deleteFact
}