import{createContext, useState, useEffect, type ReactNode, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

interface DecodeToken {
    userId: string;
    role: string;
    iat: number;
    exp: number;
}

interface AuthContextType {
    user: DecodeToken | null;
    login: (toke: string) => void;
    logout: () => void;
}

const AuthContext = createContext< AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<DecodeToken | null>(null);

    useEffect(() => {
    const token = localStorage.getitem('token');
    if(token) {
      const decoded = jwtDecode<DecodeToken>(token);
      setUser(decoded);
      console.log('[AuthProvider] token encontardo, decoded =', decoded);  
    } else {
        console.log('[AuthProvider] sem token');
    }       
    }, []);

    const login = (token: string) => {
    localStorage. setItem('token', token);
    const decoded = jwtDecode<DecodeToken>(token);
    setUser(decoded)  
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={ { user, login, logout}}>
        {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be inside a provider')
    return ctx;
}
