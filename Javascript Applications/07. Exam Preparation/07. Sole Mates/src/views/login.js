import { html, render, page } from "../lib.js";
import { updateNav } from "../data/util.js";
import { login } from "../data/users.js";

const loginTemp = () => html `
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onLogin}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input type="password" name="password" id="password" placeholder="password" />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
        </div>
    </section>
`;

export function showLogin(ctx) {
    render(loginTemp());
};

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData);

    if (!email) {
        return alert("Missing email");

    } else if (!password) {
        return alert("Missing password");

    };

    await login(email, password);
    updateNav();
    page.redirect("/")
}