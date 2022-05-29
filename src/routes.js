import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Inicial from "./pages/Inicial";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/" exact element={<Inicial/>}/>
            </Routes>        
        </BrowserRouter>
    )
}