import React from 'react';
import './AboutPage.css';

import ipnLogo from '../assets/logos/ipn-logo.PNG';
import upiitaLogo from '../assets/logos/upiita-logo.png';
import iemsLogo from '../assets/logos/iems-logo.jpeg';
import stem4AllLogo from '../assets/logos/stem4all-logo.png';
import backgroundImage from '../assets/images/background-aboutpage.jpg';

function AboutPage() {
    return (
        <div className="about-page">
            {/* Sección superior con imagen de fondo */}
            <div
                className="about-hero"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 139, 0.5), rgba(0, 0, 139, 0.5)), url(${backgroundImage})`,
                }}
            >
                <h1>¿Quiénes Somos?</h1>
                <p>Capacitando a los docentes de hoy para educar a los líderes del mañana.</p>
            </div>

            {/* Sección amarilla con descripción */}
            <div className="about-intro">
                <p>
                    STEM4ALL es una iniciativa colaborativa entre UPIITA del IPN y el IEMS Plantel Coyoacán "Ricardo Flores Magón". Nuestro objetivo es proporcionar herramientas educativas modernas y capacitar a los docentes para transformar la enseñanza de asignaturas clave como Física, Matemáticas y Química.
                </p>
            </div>

            {/* Sección de Misión y Visión */}
            <div className="mission-vision-section">
                <h2>Misión</h2>
                <p>
                    Capacitar a los docentes con herramientas educativas modernas en asignaturas clave como Física, Matemáticas y Química,
                    promoviendo la calidad educativa y el aprendizaje continuo.
                </p>
                <h2>Visión</h2>
                <p>
                    Ser una plataforma de referencia en el fortalecimiento de la educación en México, fomentando el desarrollo profesional
                    de los docentes y la innovación en la enseñanza.
                </p>
            </div>

            {/* Logos de las instituciones */}
            <div className="institutions-section">
                <h2>Colaboración</h2>
                <div className="institutions-logos">
                    {/* Logo UPIITA */}
                    <a
                        href="https://www.upiita.ipn.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="logo-item"
                        aria-label="Enlace a la página oficial de UPIITA"
                    >
                        <img src={upiitaLogo} alt="UPIITA - IPN" />
                        <span className="logo-name">UPIITA</span>
                    </a>

                    {/* Logo IPN */}
                    <a
                        href="https://www.ipn.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="logo-item"
                        aria-label="Enlace a la página oficial del IPN"
                    >
                        <img src={ipnLogo} alt="IPN" />
                        <span className="logo-name">IPN</span>
                    </a>

                    {/* Logo IEMS */}
                    <a
                        href="https://iems.cdmx.gob.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="logo-item"
                        aria-label="Enlace a la página oficial del IEMS"
                    >
                        <img src={iemsLogo} alt="IEMS" />
                        <span className="logo-name">IEMS</span>
                    </a>

                    {/* Logo STEM4ALL */}
                    <a
                        href="/"
                        className="logo-item"
                        aria-label="Enlace a la página principal de STEM4ALL"
                    >
                        <img src={stem4AllLogo} alt="STEM4ALL" />
                        <span className="logo-name">STEM4ALL</span>
                    </a>
                </div>
            </div>

            {/* Información de las instituciones */}
            <div className="institutions-info">
                <div className="info-card">
                    <h3>UPIITA</h3>
                    <p>
                        La Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA) es una escuela de nivel superior y posgrado del Instituto Politécnico Nacional (IPN) en la Ciudad de México. Fundada en 1996, ofrece programas de ingeniería en Biónica, Mecatrónica, Telemática y Energía, además de posgrados en Tecnología Avanzada.
                    </p>
                </div>
                <div className="info-card">
                    <h3>Instituto Politécnico Nacional (IPN)</h3>
                    <p>
                        El Instituto Politécnico Nacional es una de las principales instituciones educativas de México, fundada en 1936. Se dedica a la formación de profesionales en diversas áreas del conocimiento, con un enfoque en la investigación científica y el desarrollo tecnológico, contribuyendo al progreso del país.
                    </p>
                </div>
                <div className="info-card">
                    <h3>IEMS Plantel Coyoacán</h3>
                    <p>
                        El Instituto de Educación Media Superior (IEMS) de la Ciudad de México ofrece educación de calidad en nivel medio superior. El plantel "Ricardo Flores Magón", ubicado en Coyoacán, se destaca por su compromiso con la formación integral de los estudiantes, promoviendo valores y competencias para su desarrollo personal y profesional.
                    </p>
                </div>
            </div>

            {/* Sección adicional con texto */}
            <div className="about-extra">
                <h2>Compromiso con la educación</h2>
                <p>
                    En STEM4ALL creemos en el poder de la educación como motor de cambio. Nuestro objetivo es proporcionar recursos modernos y efectivos, ayudando a los docentes a inspirar a las futuras generaciones.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
