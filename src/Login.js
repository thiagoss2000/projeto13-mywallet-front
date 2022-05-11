import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { PaginaForm } from './styled';

export default function Login(){
    const URL = "https://projeto14-mywallet-back.herokuapp.com/sign-in";

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState(); 

    function EnviarLogin(){
        if(!email || !senha)return;
        axios.post(URL, {'email': email, 'senha': senha})
        .then((response) => {
            sessionStorage.setItem('token', response.data);
            sessionStorage.setItem('user', email);
            window.location.href ='/'
        })
        .catch((err) => console.log(err))
    }    
    return (
        <PaginaForm pos={'center'}>
            <h1>MyWallet</h1>
            <form onSubmit={(event) => {event.preventDefault()}}>
                <input type='email' required placeholder="email" onChange={(event) => setEmail(event.target.value)}></input>
                <input type='password' required placeholder="senha" onChange={(event) => setSenha(event.target.value)}></input>
                <button type='submit' onClick = {() => EnviarLogin()}>Entrar</button>
            </form>
            <Link to="/cadastro"><p>Primeira vez? Cadastre-se!</p></Link>
        </PaginaForm>
    );
}
