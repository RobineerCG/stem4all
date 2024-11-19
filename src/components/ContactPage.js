// src/components/ContactPage.js
import React from "react";
import "./ContactPage.css";
import mailImage from "../assets/images/mail-image.jpeg"; // Asegúrate de poner la imagen en esta ruta

function ContactPage() {
    return (
        <div className="contact-page">
            {/* Sección de contacto */}
            <div className="contact-container">
                {/* Imagen a la izquierda */}
                <div className="contact-image">
                    <img src={mailImage} alt="Contact Illustration" />
                </div>

                {/* Formulario a la derecha */}
                <div className="contact-form">
                    <h2>Hablanos</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Nombre" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Mensaje"></textarea>
                        </div>
                        <button type="submit" className="send-button">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
