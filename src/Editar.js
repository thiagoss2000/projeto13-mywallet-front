import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { PaginaForm } from './styled';

export default function Editar(){
    return (
        <PaginaForm pos={'flex-start'}>
            <h2>Editar saída</h2>
            <form>
                <input></input>
                <input></input>
                <button>Atualizar saída</button>
            </form>
        </PaginaForm>
    );
}
