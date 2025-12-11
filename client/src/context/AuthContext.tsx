import { createContext, useState, type ReactNode  } from 'react'

type AuthContextType = {
    login: () => void;
    logout: () => void;
    isLogin:  boolean;
}

const AuthContext = createContext<AuthContextType | null> (null);

export function AuthProvider({children}: {children: ReactNode}) {
    const [ isLogin, setIsLoggedIn ] = useState(false);

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ login, logout, isLogin }}>
            {children}
        </AuthContext.Provider>
    );
 }
