import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Novo from "./Novo";
import Editar from "./Editar";
import Home from "./Home";
// import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
            <Route path="/new" element={<Novo/>}></Route>
            <Route path="/replace" element={<Editar/>}></Route>
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
}

// const Pagina = styled.div`
//     width: 375px;
//     height: 667px;
//     background: #8C11BE;
//     display: flex;
//     justify-content: center;
// `
export default App;
