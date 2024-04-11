import { updateNav } from "./data/util.js";
import { page } from "./lib.js"
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showLogout } from "./views/logout.js";
import { showRegister } from "./views/register.js";

page("/", showHome);
page("/login", showLogin);
page("/logout", showLogout);
page("/register", showRegister);
page("/dashboard", showDashboard);
page("/create", showCreate);
page("/search", () => console.error("search"));
page("/edit/:id", () => console.error("edit"));
page("/delete/:id", () => console.error("delete"));
page("/details/:id", () => console.error("details"));

updateNav();
page.start();