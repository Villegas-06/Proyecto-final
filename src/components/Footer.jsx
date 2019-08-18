import React, { Component } from 'react'
import '../styles/Footer.css'
export class Footer extends Component {
    render() {
        return (
            <footer className="Footer_bg page-footer font-small blue pt-4 fixed-bottom">
                <div className="footer-copyright text-center py-3">@FrontEnd Developers-Biologic PLastic <br/>
                    Todos Los Derechos Reservados-2019   
                </div>
            </footer>
        )
    }
}

export default Footer
