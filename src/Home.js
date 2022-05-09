import { useContext } from "react";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";
import axios from 'axios';
import { DivHome, Movimento } from './styled';
import { Link, Navigate } from "react-router-dom";
import sairImg from "./assets/Vector.png"
import addImg from "./assets/ant-design_plus-circle-outlined.png"
import subImg from "./assets/ant-design_minus-circle-outlined.png"

export default function Home(){
    const { setTipo, tipo } = useContext(AuthContext);

    const [movimentacao, setMovimentacao] = useState([]);
    const token = sessionStorage.token;
    const URL = "http://localhost:5000/move";
    const header = {'user': sessionStorage.user, 'token': sessionStorage.token};
    
    useEffect(() => {
        if(!token) return window.location.href= '/login';
        axios.get(URL, {headers: header})
        .then((response) => {
            setMovimentacao(response.data);
        })
        .catch((err) => console.log(err))
        //sessionStorage.removeItem('token');
    }, []);

    let saldo = 0;
    movimentacao.forEach((el) => {
        let valor = parseInt(el.valor);
        el.tipo? saldo += valor : saldo -= valor; 
    })
    return (
        <DivHome pos={'flex-start'} tipo={saldo > 0}>
            <h2>Olá {'fulano'}</h2>
            <img className='sair' src={sairImg} alt="sair" onClick={() => {sessionStorage.removeItem('token'); window.location.reload()}}></img>
            <div>
                <div className="lista">
                    {movimentacao.map((el) => {
                        return <Movimento tipo={el.tipo}><span>{el.date}</span>{el.descricao}<span>{el.valor}</span></Movimento>
                    })}
                </div>
                <h8>SALDO<span>{saldo}</span></h8>
            </div>
            <Link to='/new'><button onClick= {() => setTipo(true)}><h8 className='but'>Nova Entrada</h8><img className="operador" src={addImg} alt=''></img></button></Link>
            <Link to='/new'><button onClick= {() => setTipo(false)}><h8 className='but'>Nova Saída</h8><img className="operador" src={subImg} alt=''></img></button></Link>
        </DivHome>
    );
}
