import './App.css';
import React from 'react';
import Producto from './Componentes/Producto';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
      <Producto 
      titulo="Disco Duro Estado Sólido"
      imagen= "\assets\card_img1.jpg"
      precio= "$400.000"
      descripcion= "Disco duro de alto rendimiento"
      />
      <Producto
      titulo="Audifonos"
      imagen= "\assets\card_img2.jpg"
      precio= "$50.000"
      descripcion= "Audífonos con alta calidad de sonido"
      />
      <Producto
      titulo="Audifonos"
      imagen= "\assets\card_img2.jpg"
      precio= "$50.000"
      descripcion= "Audífonos con alta calidad de sonido"
      />
      <Producto
      titulo="Audifonos"
      imagen= "\assets\card_img2.jpg"
      precio= "$50.000"
      descripcion= "Audífonos con alta calidad de sonido"
      />
      </Row>
    </Container>
  );
}

export default App;
