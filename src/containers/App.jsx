import React, { Component } from 'react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Introducción from '../components/Introducción';
import Explicacion from '../components/Explicacion';
const App = () =>{
    return(
        <Main>
        <NavBar/>
        <Introducción/>
        <Explicacion/>
        <Footer/>
        </Main>
    )
}

export default App