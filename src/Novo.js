import { useContext } from "react";
import { AuthContext } from "./context";
import React, { useState } from 'react';
import axios from 'axios';
import { PaginaForm } from './styled';

export default function Novo(){
    const { tipo } = useContext(AuthContext);
    const URL = "https://projeto14-mywallet-back.herokuapp.com/move";

    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState(); 

    function EnviarMovimentacao(){
        if(!valor)return;
        const header = {'user': sessionStorage.user, 'token': sessionStorage.token};
        axios.post(URL, {'valor': valor, 'descricao': descricao, 'tipo': tipo}, {headers: header})
        .then((response) => {
            window.location.href ='/'
        })
        .catch((err) => console.log(err))
    }

    return (
        <PaginaForm pos={'flex-start'}>
            <h2>Nova entrada</h2>
            <form onSubmit={(event) => {event.preventDefault()}}>
                <input type='text' required placeholder="Valor" onChange={(event) => setValor(parseFloat(event.target.value))}></input>
                <input type='text' required placeholder="Descrição" onChange={(event) => setDescricao(event.target.value)}></input>
                <button type='submit' onClick = {() => EnviarMovimentacao()}>Cadastrar</button>
            </form>
        </PaginaForm>
    );
}
