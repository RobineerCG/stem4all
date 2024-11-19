// src/components/LoginPage.js
import React from 'react';
import './LoginPage.css';

function LoginPage() {
    return (
        <div className="login-page">
            <div className="login-form-container">
                <h2>Iniciar Sesión</h2>
                <p>Comienza a planear tus proyectos <span>iniciando sesión en este formulario</span></p>

                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email de Registro" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password de Registro" />
                    </div>
                    <button type="submit" className="login-button">Iniciar Sesión</button>
                </form>

                <div className="login-links">
                    <p>¿No tienes cuenta? <a href="#">Crear Una</a></p>
                    <p>¿Olvidaste tu contraseña? <a href="#">Reestablecer</a></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
