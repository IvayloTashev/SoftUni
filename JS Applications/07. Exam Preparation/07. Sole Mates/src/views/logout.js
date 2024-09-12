import { html, render, page } from "../lib.js";
import { updateNav } from "../data/util.js";
import { logout } from "../data/users.js";

export async function showLogout(ctx) {
    await logout();
    updateNav();
    page.redirect("/")
}