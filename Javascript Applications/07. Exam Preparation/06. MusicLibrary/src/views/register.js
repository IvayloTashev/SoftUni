import { register } from "../data/users.js";
import { updateNav } from "../data/util.js";
import { html, render, page } from "../lib.js";

const registerTemp = () => html`
    <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="login-form" @submit=${onRegister}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
    </section>
`;

export function showRegister(ctx) {
    render(registerTemp())
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email, password, "re-password": rePassword} = Object.fromEntries(formData);

    if (!email || !password || password != rePassword) {
        return alert("Register Error")
    }

    await register(email, password);
    updateNav();
    page.redirect("/");
}