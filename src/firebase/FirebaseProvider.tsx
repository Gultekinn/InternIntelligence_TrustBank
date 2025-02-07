"use client"
import React, { createContext, useContext, ReactNode } from 'react';
import { auth } from './firebaseConfig'; // Firebase auth config
import { AuthContextType } from './types';

const AuthContext = createContext<AuthContextType| undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={{ auth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context kullanımı için custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
