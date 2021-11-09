import './App.css';
import React from 'react';
import Producto from './Componentes/Producto';
import { Container, Row } from 'reactstrap';
import CrearProducto from './Componentes/CrearProducto';
//import {listaProductos} from './listaProductos'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      titulo: '',
      imagen: '',
      precio: '',
      descripcion: '',
      stock: '',
      listaProductos: []
    };
  }
  componentDidMount(){
    this.fetchProductos();
  }
  fetchProductos(){
    fetch('http://localhost:4000/api/articulos')
    .then(res =>  res.json())
    .then(data =>{
      this.setState({listaProductos:data})
      console.log(this.state.listaProductos)
    })
  }
  render(){
    var arrayComponente= this.state.listaProductos.map(
      (listaProductos, i) =>{
        return(
          <Producto
            Key={i}
            titulo={listaProductos.titulo}
            imagen ={listaProductos.imagen}
            descripcion ={listaProductos.descripcion}
            precio = {listaProductos.precio}
            stock ={listaProductos.stock}
          />
        )
      }
    )
  return (
    <Container>
      <Row>
        
        {arrayComponente}
      </Row>
    </Container>
  );
  }
}

export default App;
