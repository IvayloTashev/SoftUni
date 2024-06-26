import { logout } from "../data/users.js";
import { updateNav } from "../data/util.js";
import { page } from "../lib.js";

export async function logoutView(ctx) {
    await logout();
    updateNav();
    page.redirect("/")
}