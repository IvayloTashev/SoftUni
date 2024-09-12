import { get, post } from "./request.js"

const endpoints = {
    like: "/data/useful",
    count: (characterId) => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
    isUserLiked: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}


export async function likeCharacter(characterId) {
    await post(endpoints.like, {characterId});
}

export async function likeCounts(characterId) {
    return get(endpoints.count(characterId));
}

export async function alreadyLiked(characterId, userId){
    return get(endpoints.isUserLiked(characterId, userId))
}