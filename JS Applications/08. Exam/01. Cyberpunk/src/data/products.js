import { get, put, post, del } from "./request.js"

const endpoints = {
    allProducts: "/data/cyberpunk?sortBy=_createdOn%20desc",
    productById: "/data/cyberpunk/",
    product: "/data/cyberpunk",
};

async function getAllProducts() {
    return get(endpoints.allProducts);
};

async function getProductById(id) {
    return get(endpoints.productById + id);
};

async function updateProduct(id, item, imageUrl, price, availability, type, description) {
    return put(endpoints.productById + id, {
        item,
        imageUrl,
        price,
        availability,
        type,
        description
    });
};

async function createProduct(item, imageUrl, price, availability, type, description) {
    return post(endpoints.product, {
        item,
        imageUrl,
        price,
        availability,
        type,
        description
    });
};

async function deleteProduct(id) {
    return del(endpoints.productById + id);
};


export {
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
}