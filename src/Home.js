import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { DivHome } from './styled';


export default function Home(){
    const token = sessionStorage.token;
    if(!token) return window.location.href= '/login';

    return (
        <DivHome pos={'flex-start'}>
            <h2>Olá {'fulano'}</h2>
            <div></div>
            <button></button>
            <button></button>
        </DivHome>
    );
}
