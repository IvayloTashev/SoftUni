import { get, post } from "./request.js"

const endpoints = {
    like: "/data/likes",
    likesCount: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    liked: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function addLike(albumId) {
    await post(endpoints.like, {albumId})
}

export async function getLikesCount(albumId) {
    return await get(endpoints.likesCount(albumId))
}

export async function alreadyLiked(albumId, userId) {
    return await get(endpoints.liked(albumId, userId))
}