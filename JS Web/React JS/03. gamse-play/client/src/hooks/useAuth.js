import { login, register, logout } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";


export const useLogin = () => {
    const { changeAuthState } = useAuthContext();


    const loginhandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);
        changeAuthState(authData);

        return authData;
    }

    return loginhandler;

}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);
        changeAuthState(authData);

        return authData;
    }

    return registerHandler;

}

export const useLogout = () => {
    const { localLogout } = useAuthContext();

    const logoutHandler = async () => {
        await logout();
        localLogout();
    }

    return logoutHandler;

}