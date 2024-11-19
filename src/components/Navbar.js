import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Importamos Link para navegación
import logoUPIITA from '../assets/logos/upiita-logo.png'; // Ruta correcta del logo de UPIITA
import logoIPN from '../assets/logos/ipn-logo.PNG'; // Ruta correcta del logo del IPN
import logoSTEM4ALL from '../assets/logos/stem4all-logo.png'; // Ruta correcta del logo de STEM4ALL

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => setShowDropdown(true);
    const handleMouseLeave = () => setShowDropdown(false);

    return (
        <nav className="navbar">
            {/* Logos con enlaces */}
            <div className="navbar-logos">
                <a href="https://upiita.ipn.mx" target="_blank" rel="noopener noreferrer">
                    <img src={logoUPIITA} alt="Logo UPIITA" className="navbar-logo" />
                </a>
                <a href="https://www.ipn.mx" target="_blank" rel="noopener noreferrer">
                    <img src={logoIPN} alt="Logo IPN" className="navbar-logo" />
                </a>
                <a href="https://stem4all.org" target="_blank" rel="noopener noreferrer">
                    <img src={logoSTEM4ALL} alt="Logo STEM4ALL" className="navbar-logo" />
                </a>
            </div>

            <ul className="navbar-links">
                <li 
                    className="navbar-item dropdown" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="dropdown-title">Cursos</span>
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-section physics">
                                <h4>Física</h4>
                                <ul>
                                    <li>Mecánica</li>
                                    <li>Termodinámica</li>
                                    <li>Electromagnetismo</li>
                                    <li>ver más</li>
                                </ul>
                            </div>
                            <div className="dropdown-section chemistry">
                                <h4>Química</h4>
                                <ul>
                                    <li>Burbujas Explosivas</li>
                                    <li>Hidrógeno</li>
                                    <li>Química Orgánica</li>
                                    <li>ver más</li>
                                </ul>
                            </div>
                            <div className="dropdown-section electricity">
                                <h4>Electricidad</h4>
                                <ul>
                                    <li>Voltaje</li>
                                    <li>Corriente</li>
                                    <li>Potencia</li>
                                    <li>ver más</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </li>
                <li className="navbar-item">
                    <Link to="/about#collaboration">Instituciones</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about#mission-vision">Misión y Visión</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about">¿Quiénes Somos?</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
            <Link to="/login">
                <button className="navbar-button">Identifícate</button>
            </Link>
        </nav>
    );
}

export default Navbar;
