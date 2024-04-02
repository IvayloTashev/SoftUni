import { page } from "./lib.js";
import { updateNav } from "./data/util.js";

import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showLogout } from "./views/logout.js";
import { showMarket } from "./views/market.js";
import { showRegister } from "./views/register.js";
import { showDelete } from "./views/delete.js";
import { showEdit } from "./views/edit.js";

page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", showLogout);
page("/market", showMarket);
page("/sell", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/delete/:id", showDelete);

updateNav()
page.start()