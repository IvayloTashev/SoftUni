import { del, get, post, put } from "./request.js"

const endpoints = {
    dashboard: "/data/cars?sortBy=_createdOn%20desc",
    cars: "/data/cars",
    carById: "/data/cars/",
}

async function getAllCars() {
    return get(endpoints.dashboard);
}

async function getCarById(id) {
    return get(endpoints.carById + id);
}

async function addCar(model, imageUrl,  price,  weight, speed, about) {
    return post(endpoints.cars, {
        model,
        imageUrl,
        price,
        weight,
        speed,
        about
    })
}

async function updateCar(id, model, imageUrl,  price,  weight, speed, about) {
    return put(endpoints.carById + id, {
        model,
        imageUrl,
        price,
        weight,
        speed,
        about
    })
}

async function deleteCar(id) {
    return del(endpoints.carById + id);
}

export {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar,
}