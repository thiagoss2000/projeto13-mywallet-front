import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { PaginaForm } from './styled';

export default function Novo(){
    
    return (
        <PaginaForm pos={'flex-start'}>
            <h2>Nova entrada</h2>
            <form>
                <input></input>
                <input></input>
                <button>Cadastrar</button>
            </form>
        </PaginaForm>
    );
}
