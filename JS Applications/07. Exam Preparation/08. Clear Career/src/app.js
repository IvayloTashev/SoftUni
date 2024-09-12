import { updateNav } from "./data/util.js";
import { page } from "./lib.js"
import { showCreateView } from "./views/create.js";
import { showDashboardView } from "./views/dashboard.js";
import { showDeleteView } from "./views/delete.js";
import { showDetailsView } from "./views/details.js";
import { showEditView } from "./views/edit.js";
import { showHomeView } from "./views/home.js";
import { showLoginView } from "./views/login.js";
import { showLogout } from "./views/logout.js";
import { showRegisterView } from "./views/register.js";

page("/", showHomeView);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/logout", showLogout);
page("/dashboard", showDashboardView);
page("/create", showCreateView);
page("/edit/:id", showEditView);
page("/delete/:id", showDeleteView);
page("/details/:id", showDetailsView);

updateNav();
page.start();