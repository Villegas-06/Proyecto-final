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

                <div className="container">
                    
                <ul className="navbar-nav NavBar__text">
             
             <li className="nav-item px-2" >
  
                  <a className="nav-link text-light font-weight-bold" href="#introducción">Introducción</a>
  
             </li>
  
             <li className="nav-item px-2" >
  
                    <a className="nav-link text-light font-weight-bold" href="#explicacion">Expliación</a>

            </li>
  
             <li className="nav-item">
  
                 <a className="nav-link text-light font-weight-bold px-3" href="#">Acción</a>
  
             </li>

         </ul>
  
                </div>
            </div>
             
            </nav>
        )
    }
}
             
           
           
             
          

export default NavBar
