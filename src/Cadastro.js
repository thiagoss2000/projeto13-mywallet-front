import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { PaginaForm } from './styled';

export default function Cadastro(){
    const URL = "https://projeto14-mywallet-back.herokuapp.com/sign-up";

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState(); 
    const [senha2, setSenha2] = useState();

    function EnviarCadastro(){
        if(!name || !email || !senha)return;
        if(senha === senha2){
            axios.post(URL, {'nome': name, 'email': email, 'senha': senha})
            .then((response) => {
                console.log(response);
                window.location.href='/login';
            })
            .catch((err) => console.log(err));
        }else alert('as senhas não correspodem!');
    }
    return (
        <PaginaForm pos={'center'}>
            <h1>MyWallet</h1>
            <form onSubmit={(event) => {event.preventDefault()}}>
                <input type='text' required placeholder="nome" onChange={(event) => setName(event.target.value)}></input>
                <input type='email'required placeholder="email" onChange={(event) => setEmail(event.target.value)}></input>
                <input type='password' required placeholder="senha" onChange={(event) => setSenha(event.target.value)}></input>
                <input type='password' required placeholder="confirmar senha" onChange={(event) => setSenha2(event.target.value)}></input>
                <button type='submit' onClick = {() =>{EnviarCadastro()}}>Cadastrar</button>
            </form>
            <Link to="/login"><p>Já tem uma conta? Entre agora!</p></Link>
        </PaginaForm>
    );
}
