import { User } from "../model/User";

export const validateUser = (userData: User) => {
    if(!userData.user && !userData.email) {
        throw new Error("User name or email are required");
    }
    if (userData.user && (typeof userData.user !== 'string' || userData.user.length < 2)) {
        throw new Error("User name must be at least 2 characters long");
    }
    if (userData.email && (typeof userData.email !== 'string' || !userData.email.includes('@'))) {
        throw new Error("Invalid email");
    }
}