import { html, render, page } from "../lib.js";
import { updateNav } from "../data/util.js";
import { register } from "../data/users.js";

const registerTemp = () => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="login-form" @submit=${onRegister}>
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">login</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;

export function showRegister(ctx) {
    render(registerTemp())
};

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email, password, "re-password": rePassword } = Object.fromEntries(formData);

    if (!email) {
        return alert("Missing email");

    } else if (!password) {
        return alert("Missing password");

    } else if (password != rePassword) {
        return alert("Password and repeat password do not match");
    };

    await register(email, password);
    updateNav();
    page.redirect("/")
}