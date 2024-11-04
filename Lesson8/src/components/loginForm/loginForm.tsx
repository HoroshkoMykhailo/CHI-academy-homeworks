import React from "react";

const LoginForm: React.FC = () => {
    return (
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
}

export { LoginForm }