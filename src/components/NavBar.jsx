import React, { Component } from 'react'
import logo from '../images/logo.png'
import '../styles/NavBar.css'

export class NavBar extends Component {
    render() {
        return (
            <nav className="container-fluid navbar navbar-expand-md navbar-light NavBar__bg">
                
                    <a className="navbar-brand"><img className="NavBar__img" src={logo} /></a>
                
                
                    
                <button type="button" className="navbar-toggler NavBar__bg NavBar__btn" data-toggle="collapse" data-target="#nav">
                    
                    <span className="navbar-toggler-icon"></span>
            
                </button>
             
                <div className="collapse navbar-collapse NavBar__text" id="nav">

                <div className="container NavBar__text">
                    
                <ul className="navbar-nav NavBar__text">
             
             <li className="nav-item px-2" >
  
                  <a className="nav-link text-light font-weight-bold" href="#">Introducción</a>
  
             </li>
  
             <li className="nav-item dropdown px-2" data-toggle="dropdown">
  
                 <a className="nav-link text-light font-weight-bold dropdown-toggle" href="#">Explicación</a>
  
                 <div className="dropdown-menu NavBar__bg">
  
                     <a className="dropdown-item" href="#">Botella 1</a>
  
                     <a className="dropdown-item" href="#">Botella 2</a>
  
                     <a className="dropdown-item" href="#">Botella 3</a>

                     <a className="dropdown-item" href="#">Código QR</a>
  
                 </div>
  
             </li>
  
  
             <li className="nav-item">
  
                 <a className="nav-link text-light font-weight-bold px-3" href="#">Acción</a>
  
             </li>

             <li className="nav-item">
  
                 <a className="nav-link text-light font-weight-bold px-3" href="#">Iniciar Sesión</a>
  
             </li>
             
             <li className="nav-item">
  
                 <a className="nav-link text-light font-weight-bold px-3" href="#">Registro</a>
  
             </li>
  
         </ul>
  
                </div>
            </div>
             
            </nav>
        )
    }
}
             
           
           
             
          

export default NavBar
