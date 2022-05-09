import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {

    const [tipo, setTipo] = useState(false);
    return (
        <AuthContext.Provider value={{
            tipo, setTipo
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}