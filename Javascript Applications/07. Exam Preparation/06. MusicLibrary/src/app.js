import { updateNav } from "./data/util.js";
import { page } from "./lib.js"
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
page("/create", () => console.error("create"));
page("/edit/:id", () => console.error("edit"));
page("/details/:id", () => console.error("details"));

updateNav();
page.start();