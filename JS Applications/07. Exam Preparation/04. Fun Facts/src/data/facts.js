import { get, put, post, del } from "./request.js"

const endpoints = {
    allfacts: "/data/facts?sortBy=_createdOn%20desc",
    factById: "/data/facts/",
    facts: "/data/facts",
    like: "/data/likes",
    count: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    likedAlready: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
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

async function giveLike(factId) {
    await post(endpoints.like, {factId})
};

async function checklikes(factId) {
    return get(endpoints.count(factId))
};

async function userAlreadyLike(factId, userId) {
    return get(endpoints.likedAlready(factId, userId))
};

export {
    getAllFacts,
    getFactById,
    updateFact,
    createFact,
    deleteFact,
    giveLike,
    checklikes,
    userAlreadyLike
}