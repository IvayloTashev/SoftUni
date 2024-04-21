import { get, post, put, del } from "./request.js";

const endpoints = {
    allSolutions: "/data/solutions?sortBy=_createdOn%20desc",
    solutionById: "/data/solutions/",
    solution: "/data/solutions",
};

export async function getAllSolutions() {
    return get(endpoints.allSolutions);
};

export async function getsolutionById(id) {
    return get(endpoints.solutionById + id);
};

export async function createSolution(type, imageUrl, description, learnMore) {
    return post(endpoints.solution, {
        type,
        imageUrl, 
        description, 
        learnMore      
    });
};

export async function updateSolution(id, type, imageUrl, description, learnMore) {
    return put(endpoints.solutionById + id, {
        type,
        imageUrl, 
        description, 
        learnMore
    });
};

export async function deleteSolution(id) {
    await del(endpoints.solutionById + id);
};

