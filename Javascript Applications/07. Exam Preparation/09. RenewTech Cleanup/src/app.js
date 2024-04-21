import { updateNav } from "./data/util.js";
import { page } from "./lib.js"
import { showDashboard } from "./views/dashboard.js";
import { showHome } from "./views/home.js";


page("/", showHome);
page("/register", () => console.error("register"));
page("/login", () => console.error("login"));
page("/logout", () => console.error("logout"));
page("/dashboard", showDashboard);
page("/create", () => console.error("create"));
page("/edit/:id", () => console.error("edit"));
page("/delete/:id", () => console.error("delete"));
page("/details/:id", () => console.error("details"));

page.start();