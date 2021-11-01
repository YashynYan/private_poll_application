import { User } from "@firebase/auth";
import React, { createContext, ReactNode } from "react";
import { useAuth } from "../hooks";

export interface AuthContextProps {
  currentUser?: User | null | undefined;
  loading?: boolean;
  logOut?: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({});

export const ApplicationContext = ({ children }: { children: ReactNode }) => {
  const { currentUser, loading, logOut } = useAuth();
  const authContextProps = { currentUser, loading, logOut };

  return (
    <AuthContext.Provider value={authContextProps}>
      {children}
    </AuthContext.Provider>
  );
};
