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
    div {
        margin-top: 22px;
        width: 326px;
        height: 446px;
        background: #FFFFFF;
        border-radius: 5px;
    }
    button {
        margin-top: 13px;
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
    }
`