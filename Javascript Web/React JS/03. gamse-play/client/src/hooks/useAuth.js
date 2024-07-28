import { useContext } from "react";
import { login } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext);


    const loginhandler = async (email, password) => {
        const result = await login(email, password);
        changeAuthState(result);

    }

    return loginhandler;

}