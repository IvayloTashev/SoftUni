const fs = require(`fs/promises`);
const path = require(`path`);
const { Cat } = require("../models/cat");

const filePathBreeds = path.join(__dirname, "../../data/breeds.json");
const filePathCats = path.join(__dirname, "../../data/cats.json");

async function readFileBreed() {
    const data = await fs.readFile(filePathBreeds);
    return JSON.parse(data.toString());
};

async function writeFileBreed(data) {
    await fs.writeFile(filePathBreeds, JSON.stringify(data));
};

async function readFileCat() {
    const data = await fs.readFile(filePathCats);
    return JSON.parse(data.toString());
};

async function writeFileCat(data) {
    await fs.writeFile(filePathCats, JSON.stringify(data));
};

function toCatModel(data) {
    const cat = new Cat()

    cat.id = data.id;
    cat.name = data.name;
    cat.description = data.description;
    cat.breed = data.breed;
    cat.image = data.image;

    return cat;
};

async function createCat(data) {
    const id = uuid();

    const cat = {
        id,
        name: data.name,
        description: data.description,
        breed: data.breed,
        image: data.image
    };

    const cats = await readFileCat();
    cats.push(cat);
    await writeFileCat();

    return toCatModel(cat);
};

function uuid() {
    return `xxxx-xxxx`.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
}

async function getAllBreeds() {
    return breeds = await readFileBreed();
};

module.exports = {
    readFileBreed,
    writeFileBreed,
    readFileCat,
    writeFileCat,
    getAllBreeds,
    createCat
}