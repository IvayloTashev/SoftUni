import { register } from "../data/users.js";
import { updateNav } from "../data/util.js";
import { html, render, page} from "../lib.js";

const registerTemplate = () => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onRegister}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>
`;

export function showRegisterView(ctx) {
    render(registerTemplate());
}

async function onRegister(event) {
    event.preventDefault()

    const formData = new FormData(event.target);
    const {email, password, "re-password": rePassword} = Object.fromEntries(formData);

    if (!email || !password || password != rePassword) {
        return alert("Missing email, password or re-password do not match")
    }

    await register(email, password);
    updateNav();
    page.redirect("/");
}