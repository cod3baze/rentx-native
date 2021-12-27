import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  driver_license: string;
  avatar: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

type AuthContextData = {
  user: User;
  signIn: (data: SignInCredentials) => Promise<void>;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const authContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const { data } = await api.post<AuthState>("/sessions", {
        email,
        password,
      });

      api.defaults.headers.common["authorization"] = `Bearer ${data.token}`;

      setData(data);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  return (
    <authContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </authContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(authContext);
}
