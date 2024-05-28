const fs = require(`fs/promises`);
const path = require(`path`)

const filePath =  path.join(__dirname, "../../data/breeds.json");

async function readFile() {
    const data = await fs.readFile(filePath);
    return JSON.parse(data.toString());
};

async function writeFile(data) {
    await fs.writeFile(filePath, JSON.stringify(data));
};

function toBreedsModel(breeds) {
    breeds.map((breed) => `<option value="${breed}">${breed}</option>`)
}

async function getAllBreeds() {
    return breeds = await readFile();
};

module.exports = {
    readFile,
    writeFile,
    getAllBreeds
}