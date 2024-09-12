import { get, post, put, del } from "./request.js";

const endpoints = {
    allOffers: "/data/offers?sortBy=_createdOn%20desc",
    offerById: "/data/offers/",
    offer: "/data/offers",
};

export async function getAllOffers() {
    return get(endpoints.allOffers);
};

export async function getOfferById(id) {
    return get(endpoints.offerById + id);
};

export async function createOffer(title, imageUrl, category, description, requirements, salary) {
    return post(endpoints.offer, {
        title,
        imageUrl, 
        category, 
        description, 
        requirements, 
        salary
    });
};

export async function updateOffer(id, title, imageUrl, category, description, requirements, salary) {
    return put(endpoints.offerById + id, {
        title,
        imageUrl, 
        category, 
        description, 
        requirements, 
        salary
    });
};

export async function deleteOffer(id) {
    await del(endpoints.offerById + id);
};

