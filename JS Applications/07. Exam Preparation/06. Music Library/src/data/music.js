import { get, put, post, del } from "./request.js"

const endpoints = {
    allAlbums: "/data/albums?sortBy=_createdOn%20desc",
    albumById: "/data/albums/",
    albums: "/data/albums",
};

async function getAllAlbums() {
    return get(endpoints.allAlbums)
}

async function getAlbumById(id) {
    return get(endpoints.albumById + id);
};

async function updateAlbum(id, singer, album, imageUrl, release, label, sales) {
    return put(endpoints.albumById + id, {
        singer,
        album, 
        imageUrl, 
        release, 
        label, 
        sales
    });
};

async function createAlbum(singer, album, imageUrl, release, label, sales) {
    return post(endpoints.albums, {
        singer,
        album, 
        imageUrl, 
        release, 
        label, 
        sales
    });
};

async function deleteAlbum(id) {
    return del(endpoints.albumById + id);
};

export {
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    createAlbum,
    deleteAlbum
}