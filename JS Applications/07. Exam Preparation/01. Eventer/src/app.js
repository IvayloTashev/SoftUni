import { updateNav } from "./data/util.js";
import { page } from "./lib.js";
import { showAddEventview } from "./views/addEventView.js";
import { deleteView } from "./views/deleteView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showEventsView } from "./views/eventsView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { showRegisterView } from "./views/registerView.js";

page("/", showHomeView);
page("/home", showHomeView);
page("/login", showLoginView);
page("/logout", logoutView);
page("/register", showRegisterView);
page("/events/:id", showDetailsView);
page("/events", showEventsView);
page("/addEvent", showAddEventview);
page("/edit/:id", showEditView);
page("/delete/:id", deleteView);

updateNav();
page.start();