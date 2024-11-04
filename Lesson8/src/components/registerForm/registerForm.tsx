import React from "react";

const RegisterForm: React.FC = () => {
    return (
        <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    );
}

export { RegisterForm }