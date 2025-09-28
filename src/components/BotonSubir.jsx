import React from 'react';

const BotonSubir = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto hace que el desplazamiento sea suave
    });
  };

  return (
    <button
        className='character-selector boton-subir'
        onClick={handleScrollToTop}>
        <p>Ir Arriba ⬆️</p>
    </button>
  );
};

export default BotonSubir;