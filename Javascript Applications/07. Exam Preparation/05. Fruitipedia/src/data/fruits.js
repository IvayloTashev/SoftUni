import { get, put, post, del } from "./request.js"

const endpoints = {
    allFruits: "/data/fruits?sortBy=_createdOn%20desc",
    fruitById: "/data/fruits/",
    fruit: "/data/fruits",
};

async function getAllFruits() {
    return get(endpoints.allFruits);
};

async function getFruitById(id) {
    return get(endpoints.fruitById + id);
};

async function updateFruit(id, name, imageUrl, description, nutrition) {
    return put(endpoints.fruitById + id, {
        name, 
        imageUrl, 
        description, 
        nutrition
    });
};

async function createFruit(name, imageUrl, description, nutrition) {
    return post(endpoints.fruit, {
        name, 
        imageUrl, 
        description, 
        nutrition
    });
};

async function deleteFruit(id) {
    return del(endpoints.fruitById + id);
};

export {
    getAllFruits,
    getFruitById,
    updateFruit,
    createFruit,
    deleteFruit
}