import React from 'react';
import '../assets/styles/components/Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () =>(
    <footer className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="segment-one">
                        <h3>+FoodApp</h3>
                        <ul className="list-unstyled">
                        <li><i className="fa fa-angle-right" /> <a href="/">Inicio </a></li>
                        <li><i className="fa fa-angle-right" /> <a href="/"> Descargar App</a></li>
                        <li><i className="fa fa-angle-right" /> <a href="/">Additivos</a></li>
                        </ul>
                    </div>    
                </div>
                <div className="col">
                    <div className="segment-two">
                        <h5 id="h5-about-us"> Acerca de nosotros:</h5>
                        <a href="tel:+522283672184">
                             <h2> <i className="fa fa-phone"></i> (228) 3672184 </h2>
                        </a>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-map-marker"></i>
                                <strong> Dirección:</strong> Xalapeños Ilustres No 137, Colonia Centro C.P. 91000 Xalapa, Veracruz, México
                            </li>
                            <li><i className="fa fa-envelope"></i> 
                                <strong> Email:</strong>
                                <a href="mailto:contacto@kopodc.com"> contacto@kopodc.com</a>
                            </li>
                        </ul> 
                    </div>
                </div>
                <div className="col">
                    <div className="segment-three">
                        <h5 id="h5-followme"> Siguenos en: </h5>
                        <ul>
                            <a href="https://www.facebook.com/Kopo-Dev-Center-435546483296131/?fref=ts" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-fw" style={{fontSize: 30}} /></a>
                            <a href="https://www.instagram.com/kopodc" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-fw" style={{fontSize: 30}} /></a>
                            <a target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp fa-fw"  style={{fontSize: 30}} /></a>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <p id="p-copyright" className="col-sm">
                    &copy;{new Date().getFullYear()} Kopo Dev Center - Todos los derechos reservados.
                </p>
            </div>
        </div>          
    </footer>
);

export default Footer;