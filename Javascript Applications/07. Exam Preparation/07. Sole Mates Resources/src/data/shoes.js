import { get, post, put, del } from "./request.js";

const endpoints = {
    allShoes: "/data/shoes?sortBy=_createdOn%20desc",
    shoeById: "/data/shoes/",
    shoes: "/data/shoes",
};

export async function getAllShoes() {
    return get(endpoints.allShoes);
};

export async function getShoeById(id) {
    return get(endpoints.shoeById + id);
};

export async function createShoe(brand, model, imageUrl, release, designer, value) {
    return post(endpoints.shoes, {
        brand,
        model,
        imageUrl,
        release,
        designer,
        value
    });
};

export async function updateShoe(id, brand, model, imageUrl, release, designer, value) {
    return put(endpoints.shoeById + id, {
        brand,
        model,
        imageUrl,
        release,
        designer,
        value
    });
};

export async function deleteShoe(id) {
    await del(endpoints.shoeById + id);
};
