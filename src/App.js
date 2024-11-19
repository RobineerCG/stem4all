// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import AboutPage from './components/AboutPage';
import ContactPage from "./components/ContactPage";


import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Barra de navegación fija */}

                {/* Contenedor principal para las páginas */}
                <div className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    <Header />
                                    <HeroSection />
                                    <div className="welcome-section">
                                        <h1>¡Bienvenido a Stem4All!</h1>
                                        <p>Este es el comienzo de tu aplicación en React.</p>
                                    </div>
                                </div>
                            }
                        />
                        <Route path="/login" element={<LoginPage />} /> {/* Página de inicio de sesión */}
                        <Route path="/terms" element={<TermsAndConditionsPage />} /> {/* Términos y condiciones */}
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
