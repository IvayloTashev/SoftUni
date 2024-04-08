import { updateNav } from "./data/util.js";
import { page } from "./lib.js";
import { showAddCarVeiw } from "./views/addCar.js";
import { showCatalogView } from "./views/catalog.js";
import { showDeleteCar } from "./views/delete.js";
import { showDetailsView } from "./views/details.js";
import { showEditView } from "./views/edit.js";
import { showHomeView } from "./views/home.js";
import { showLoginView } from "./views/login.js";
import { showLogoutView } from "./views/logout.js";
import { showRegisterView } from "./views/register.js";
import { showSearchView } from "./views/search.js";

updateNav();

page("/", showHomeView);
page("/catalog", showCatalogView);
page("/login", showLoginView);
page("/register", showRegisterView);
page("/logout", showLogoutView);
page("/addCar", showAddCarVeiw);
page("/edit/:id", showEditView);
page("/delete/:id", showDeleteCar);
page("/search", showSearchView);
page("/details/:id", showDetailsView);

page.start()
