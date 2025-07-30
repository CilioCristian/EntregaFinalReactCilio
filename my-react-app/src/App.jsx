
import React from 'react';
import NavBar from '../src/Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';



const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
};

export default App;
