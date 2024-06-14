import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import '../../assets/css/cookie.css'; // Asegúrate de crear un archivo CSS para los estilos de la ventana modal

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si la cookie de consentimiento ya existe
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Establecer la cookie de consentimiento
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // La cookie expirará en 1 año
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="cookie-modal">
        <div className="cookie-modal-content">
          <p>Usamos cookies para mejorar tu experiencia. Al continuar navegando aceptas nuestra política de cookies.</p>
          <button onClick={handleAccept}>Aceptar</button>
        </div>
      </div>
    )
  );
};

export default CookieModal;
