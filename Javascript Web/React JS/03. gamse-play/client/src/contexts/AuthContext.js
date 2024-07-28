import { createContext } from "react";

export const AuthContext = createContext({
    email: '',
    accsessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});

