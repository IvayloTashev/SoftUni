const url = require(`url`);
const fs = require(`fs`);
const path = require(`path`);
const qs = require(`querystring`);
const breeds = require(`../data/breeds.json`);
const cats = require(`../data/cats.json`);

module.exports = (req, res) => {

    const pathname = url.parse(req.url).pathname;

    if (pathname === "/cats/add-cat" && req.method === "GET") {

        let filePath = path.normalize(path.join(__dirname, "../views/addCat.html"));

        const readStream = fs.createReadStream(filePath);

        readStream.on("data", (data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        });

        readStream.on("end", () => {
            res.end();
        });

        readStream.on("error", (err) => {
            console.log(err);
            res.end();
        });

    } else if (pathname === "/cats/add-breed" && req.method === "GET") {

        let filePath = path.normalize(path.join(__dirname, "../views/addBreed.html"));

        const readStream = fs.createReadStream(filePath);

        readStream.on("data", (data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        });

        readStream.on("end", () => {
            res.end();
        });

        readStream.on("error", (err) => {
            console.log(err);
            res.end();
        });

    } else if (pathname === "/cats/add-cat" && req.method === "POST") {
        let formData = "";
        res.on("data", (data) => {
            formData += data;
        });

        let body = qs.parse(formData);

        fs.readFile(`./data/cats.json`, (err, data) => {
            if (err) {
                throw err;
            };

            let cats = JSON.parse(data);
            cats.push(body.cat);

            let json = JSON.stringify(cats);

            fs.writeFile(`../data/cats.json`, json, `utf-8`, () => console.log("The cat was added succsesfully"));
        });

        res.writeHead(302, { Location: '/' });
        req.end();

    } else if (pathname === "/cats/add-breed" && req.method === "POST") {
        let formData = "";
        res.on("data", (data) => {
            formData += data;
        });

        let body = qs.parse(formData);

        fs.readFile(`../data/breeds.json`, (err, data) => {
            if (err) {
                throw err;
            };

            let breeds = JSON.parse(data);
            breeds.push(body.breed);

            let json = JSON.stringify(breeds);

            fs.writeFile('../data/breeds.json', json, `utf-8`, () => console.log("The breed was added succsesfully"));
        });

        res.writeHead(302, { Location: '/' });
        req.end();

    }

    else {
        return true;
    }
}
