// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para navegación
import './Footer.css';

// Importa los íconos
import facebookIcon from '../assets/icons/facebook-icon.png';
import twitterIcon from '../assets/icons/twitter-icon.png';
import contactIcon from '../assets/icons/contact-icon.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Columna 1 */}
                <div className="footer-column">
                    <h4>STEM4ALL</h4>
                    <p>© 2024 STEM4ALL. Todos los derechos reservados.</p>
                </div>
                
                {/* Columna 2 */}
                <div className="footer-column">
                    <h4>Enlaces</h4>
                    <ul>
                        <li>Datos</li>
                        <li>Publicaciones</li>
                        <li>Transparencia</li>
                        <li>Alertas</li>
                    </ul>
                </div>
                
                {/* Columna 3 */}
                <div className="footer-column">
                    <h4>Términos</h4>
                    <ul>
                        <li>
                            <Link to="/terms">Términos y Condiciones</Link>
                        </li>
                        <li>Política de Seguridad</li>
                        <li>Mapa del Sitio</li>
                    </ul>
                </div>
                
                {/* Columna 4 */}
                <div className="footer-column">
                    <h4>Síguenos</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" />
                        </a>
                        <Link to="/contact">
                            <img src={contactIcon} alt="Contacto" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
