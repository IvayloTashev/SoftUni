import { updateNav } from "./data/util.js";
import { page } from "./lib.js"
import { showAddCharView } from "./views/addChar.js";
import { showCharectersView } from "./views/charecters.js";
import { showDeleteVeiw } from "./views/delete.js";
import { showDetailsVeiw } from "./views/details.js";
import { showEditView } from "./views/edit.js";
import { showHomeView } from "./views/home.js";
import { showLoginView } from "./views/login.js";
import { showLogoutView } from "./views/logout.js";
import { showRegisterView } from "./views/register.js";

page("/", showHomeView);
page("/login", showLoginView);;
page("/logout", showLogoutView);
page("/register", showRegisterView);
page("/addcharacter", showAddCharView);
page("/details/:id", showDetailsVeiw);
page("/delete/:id", showDeleteVeiw);
page("/edit/:id", showEditView);
page("/characters", showCharectersView);

updateNav();
page.start()