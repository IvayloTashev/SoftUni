const handlebars = require('express-handlebars');


function confingHbs(app) {
    const hbs = handlebars.create({
        extname: 'hbs',
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
}

module.exports = { confingHbs }
