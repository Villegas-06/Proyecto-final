import React, { Component } from 'react'
import '../styles/Explicacion.css'
import pet from '../images/PET.png'
import pvc from '../images/pvc.png'
import ps from '../images/PS.png'
export class Explicacion extends Component {
    render() {
        return (
            <div className="container">
                <h1 id="explicacion">Explicación</h1>
                <h4>Bueno, vamos a contextualizarte.
                    Debes ser consiente la variedad de plásticos que diariamente ocupamos,
                    hay tres tipos en específico a los cuáles debemos reducirlesu uso.</h4>
                    <br/><br/><br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4" id="botella1">
                                <div className="card" >
                                <img src={pet} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">El PET se utiliza principalmente
                                    en la producción de botellas para bebidas. A través de su reciclado se obtiene principalmente 
                                    fibras para relleno de bolsas de dormir, alfombras, cuerdas y almohadas.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4" id="botella2">
                                <div className="card">
                                <img src={pvc} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">El PVC es utilizado en botellas de champú,
                                    envases de aceite de cocina, artículos de servicio para 
                                    casas de comida rápida, etc. El PVC puede ser reciclado como tubos de drenaje e irrigación.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4" id="botella3">
                                <div className="card">
                                <img src={ps} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">El PS se encuentra en tazas desechables debebidas calientes y bandejas de carne. 
                                    El PS puede reciclarse en viguetas de plástico, cajas de cintas para casetes y macetas.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default Explicacion
