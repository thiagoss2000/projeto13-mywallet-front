import { useContext } from "react";
import { AuthContext } from "./context";
import React, { useState } from 'react';
import axios from 'axios';
import { PaginaForm } from './styled';

export default function Novo(){
    const { update } = useContext(AuthContext);
    const URL = "http://localhost:5000/move";

    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState(); 

    function EnviarMovimentacao(){
        if(!valor)return;
        const header = {'user': sessionStorage.user, 'token': sessionStorage.token};
        axios.put(URL, {'valor': valor, 'descricao': descricao}, {headers: header, params: {ID: update}})
        .then((response) => {
            window.location.href ='/'
        })
        .catch((err) => console.log(err))
    }

    return (
        <PaginaForm pos={'flex-start'}>
            <h2>Editar entrada</h2>
            <form onSubmit={(event) => {event.preventDefault()}}>
                <input type='text' required placeholder="Valor" onChange={(event) => setValor(parseFloat(event.target.value))}></input>
                <input type='text' required placeholder="Descrição" onChange={(event) => setDescricao(event.target.value)}></input>
                <button type='submit' onClick = {() => EnviarMovimentacao()}>Atualizar entrada</button>
            </form>
        </PaginaForm>
    );
}
