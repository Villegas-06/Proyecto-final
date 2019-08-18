import React, { Component } from 'react'
import '../styles/Introduccion.css'
import oceano from '../images/oceano.jpg'
import mar from '../images/ola-mar.png'
export class Introducción extends Component {
    render() {
        return (
            <div className="container mt-5" id="introducción">
                <h1>Introducción</h1>
                <br/>
                <div className="row">
                 <div className="col-sm column mcb-column one-second column_column column_margin">
                        <hr/>

                        <h3>Biologic plastic</h3>
                        <p>se encarga de enseñarte a clasificar,
                             reciclar y crear conciencia de lo importante que es
                              reutilizar nuestros residuos plásticos de una manera correcta; 
                              por si no sabías cada año acaban en el océano unos ocho millones de 
                              toneladas de plástico, ¡un materialque puede tardar siglos, o más, en desaparecer!
                        </p>
                        <br/>
                    </div>
                    <div className="col-sm column mcb column one-second column_image Proyects_img__tienda">
                        <img className="Proyects_img__tienda Proyects_div__center" src={oceano} alt="https://tienda-virtual-geek.firebaseapp.com/"/>
                    </div>
                    </div>
                    <br/><br/><br/>
                    <div className="row">
                    <div className="col-sm column mcb-column one-second column_column column_margin">
                        <hr/>

                        <h3>Nuestro objetivo</h3>
                        <p> 
                            es que comiences a cuidar más nuestro querido planeta y sus bonitos océanos, ¡vamos a reciclar! 
                        </p>
                        <br/>
                    </div>
                    <div className="col-sm column mcb column one-second column_image Proyects_img__tienda">
                        <img className="Proyects_img__tienda Proyects_div__center" src={mar} alt="https://tienda-virtual-geek.firebaseapp.com/"/>
                    </div>
                    </div>
                    <br/><br/><br/><br/><br/>

                </div>
        )
    }
}

export default Introducción
