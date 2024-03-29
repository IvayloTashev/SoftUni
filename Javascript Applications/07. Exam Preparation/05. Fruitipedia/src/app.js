import { deleteFruit } from "./data/fruits.js";
import { updateNav } from "./data/util.js";
import { page } from "./lib.js"
import { createVeiw } from "./views/create.js";
import { dashboardVeiw } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { registerView } from "./views/register.js";

page("/", homeView);
page("/login", loginView);
page("/logout", logoutView);
page("/register", registerView);
page("/dashboard", dashboardVeiw);
page("/create", createVeiw);
page("/edit/:id", editView);
page("/search", () => console.error("search"));
page("/details/:id", detailsView);

updateNav();
page.start();