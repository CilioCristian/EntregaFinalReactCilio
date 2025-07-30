
import React from 'react';
import NavBar from '../src/Componentes/NavBar/NavBar';
import Items from '../src/Componentes/Items/Items';



const App = () => {
  return (
    <>
      <NavBar />
      <Items greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
};

export default App;
