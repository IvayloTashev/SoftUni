import { updateNav } from "./data/util.js";
import { page } from "./lib.js"
import { showDashboardView } from "./views/dashboard.js";
import { showHomeView } from "./views/home.js";
import { showLoginView } from "./views/login.js";
import { showLogout } from "./views/logout.js";
import { showRegisterView } from "./views/register.js";

page("/", showHomeView);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/logout", showLogout);
page("/dashboard", showDashboardView);
page("/create", () => console.error("create"));
page("/edit/:id", () => console.error("edit"));
page("/delete/:id", () => console.error("delete"));
page("/details/:id", () => console.error("details"));

updateNav();
page.start();