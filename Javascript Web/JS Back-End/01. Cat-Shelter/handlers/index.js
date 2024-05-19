const homeHandler = require(`./home`);
const staticFiles = require(`./static-handler`)
const catHanlder = require(`./cat`)

module.exports = [homeHandler, staticFiles, catHanlder];