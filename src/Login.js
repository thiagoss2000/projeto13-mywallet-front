import React, { useState } from 'react';
import { Link, Navigate, NavLink } from "react-router-dom";
import axios from 'axios';
import { PaginaForm } from './styled';


export default function Login(){
    const URL = "http://localhost:5000/sign-in";

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState(); 

    function EnviarLogin(){
        if(!email || !senha)return;
        axios.post(URL, {'email': email, 'senha': senha})
        .then((response) => {
            sessionStorage.setItem('token', response.data);
            window.location.href ='/'
        })
        .catch((err) => console.log(err))
    }    
    return (
        <PaginaForm pos={'center'} onSubmit={(event) => {event.preventDefault()}}>
            <h1>MyWallet</h1>
            <form>
                <input type='email' required placeholder="email" onChange={(event) => setEmail(event.target.value)}></input>
                <input type='password' required placeholder="senha" onChange={(event) => setSenha(event.target.value)}></input>
                <button type='submit' onClick = {() => EnviarLogin()}>Entrar</button>
            </form>
            <Link to="/cadastro"><p>Primeira vez? Cadastre-se!</p></Link>
        </PaginaForm>
    );
}