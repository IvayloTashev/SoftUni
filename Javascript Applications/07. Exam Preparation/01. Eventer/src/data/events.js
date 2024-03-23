import { del, get, post, put } from "./request.js"

const endpoints = {
    dashboard: "/data/events?sortBy=_createdOn%20desc",
    events: "/data/events",
    eventById: "/data/events/"
}

async function getAllEvents() {
    return get(endpoints.dashboard);
}

async function getEventById(id) {
    return get(endpoints.eventById + id);
}

async function createEvent(name, imageUrl, category, description, date) {
    return post(endpoints.events, {
        name,
        imageUrl,
        category,
        description,
        date
    })
}

async function updateEvent(id, name, imageUrl, category, description, date){
    return put(endpoints.eventById + id, {
        name,
        imageUrl,
        category,
        description,
        date
    })
}

async function deleteEvent(id) {
    return del(endpoints.eventById + id);

}

export {
    getAllEvents,
    getEventById,
    updateEvent,
    createEvent,
    deleteEvent
}