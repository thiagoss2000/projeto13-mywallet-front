import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [update, setUpdate] = useState()
    const [tipo, setTipo] = useState(false);
    return (
        <AuthContext.Provider value={{
            tipo, setTipo,
            update, setUpdate
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}