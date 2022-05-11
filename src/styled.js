import styled from "styled-components";

export const PaginaForm = styled.div `
    width: 375px;
    height: 100vh;
    background: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => props.pos};
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }
    h2 {
        width: 87.2%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        padding-left: 15px;
        margin-top: 13px;
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;   
        ::placeholder{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
        }
    }
    button {
        margin-top: 13px;
        margin-bottom: 20px;
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        cursor: pointer;
    }
    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        /* text-decoration-line: underline; */
    }
`
export const DivHome = styled.div `
    width: 375px;
    height: 100vh;
    background: #8C11BE;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    position: relative;
    h2 {
        margin-top: 25px;
        width: 87.2%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    .sair {
        position: absolute;
        top: 28px;
        right: 24px;
        cursor: pointer;
    }
    div {
        margin-top: 22px;
        width: 326px;
        height: 446px;
        background: #FFFFFF;
        border-radius: 5px;
        position: relative;
    }
    .lista {
        margin-top: 0;
        width: 100%;
        height: 400px;
        overflow: auto;
    }
    button {
        margin-top: 13px;
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        position: relative;
        cursor: pointer;
    }
    h6 {
        width: 90%;
        position: absolute;
        bottom: 10px;
        left: 15px;
        display: flex;
        justify-content: space-between;
    }
    span {
        color: ${(props) => props.tipo? '#03AC00' : '#C70000'};
    }
    .but {
        width: 64px;
        height: 40px;
        left: 10px;
        bottom: 9px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        text-align: start;
    }
    .operador {
        position: absolute;
        left: 10px;
        top: 10px;
    }
    .link {
        text-decoration-line: none;
    }
`
export const Movimento = styled.p`
    margin-top: 23px;
    padding-inline: 12px;
    width: 100%;
    position: relative;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    span:first-child {
        margin-right: 5px;
        font-family: 'Raleway';
        font-style: normal;
        color: #C6C6C6;
    }
    span:last-child {
        color: red;
        position: absolute;
        right: 31px;
        font-family: 'Raleway';
        font-style: normal;
        color: ${(props) => props.tipo? '#03AC00' : '#C70000'};
    }
    .delete {
        position: absolute;
        right: 10px;
        color: #C6C6C6;
        cursor: pointer;
    }
`