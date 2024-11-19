import React, { useEffect } from 'react';
import './TermsAndConditionsPage.css';

import LockIcon from '../assets/icons/lock-icon.png';
import TermsIcon from '../assets/icons/terms-icon.png';
import PrivacyIcon from '../assets/icons/privacy-icon.png';

function TermsAndConditionsPage() {
    // Este efecto asegura que la página se desplace al inicio al renderizar
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <h1>Revisa con cautela los términos y condiciones de esta página</h1>
            <div className="icons-container">
                <div className="icon-item">
                    <img src={LockIcon} alt="Candado" className="icon-image" />
                    <p>Seguridad</p>
                </div>
                <div className="icon-item">
                    <img src={TermsIcon} alt="Términos y Condiciones" className="icon-image" />
                    <p>Términos</p>
                </div>
                <div className="icon-item">
                    <img src={PrivacyIcon} alt="Privacidad" className="icon-image" />
                    <p>Privacidad</p>
                </div>
            </div>
            <div className="terms-content">
                <h2>Términos y Condiciones</h2>
                <p>
                    Toda esta sección contendrá las referencias o un párrafo principal de los términos y 
                    condiciones
                </p>
                <p>
                    ESTE TEXTO RANDOM SOLAMENTE ES PARA VISUALIZAR ESTE DIV DE TEXTO Y ES MODIFICABLE.
                    Aenean dictum arcu sit amet orci bibendum, id malesuada sapien tristique. Proin eget nunc non augue 
                    malesuada tincidunt. Vivamus scelerisque ante non elit tincidunt, quis sagittis metus malesuada. 
                    Fusce vitae arcu euismod, ultricies arcu et, convallis lorem. Etiam fringilla velit eget erat auctor porttitor.
                </p>
            </div>
        </div>
    );
}

export default TermsAndConditionsPage;
