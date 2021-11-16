import React, { Component } from 'react'
import {Col, Container} from 'reactstrap'

export default class CrearProducto extends Component {
    constructor(){
        super()
        this.state = {
            titulo: '',
            imagen: '',
            descripcion: '',
            precio: '',
            stock: '',
            productos: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.agregarProducto = this.agregarProducto.bind(this)
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })

    }

    agregarProducto(e){
        e.preventDefault();
        fetch("http://localhost:4000/api/articulos",{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            alert("Producto creado");
        })

    }
    render() {
        return (
        <Container>

        
          <Col sm="6">
            <h4>Nuevo Producto</h4>
            <form onSubmit={this.agregarProducto}>
              <div className="mb-3">
                <input
                  name="titulo"
                  className="form-control"
                  type="text"
                  placeholder="Ingrese título"
                  onChange={this.handleChange}
                  value={this.state.titulo}
                />
              </div>
              <div className="mb-3">
                <input
                  name="imagen"
                  className="form-control"
                  type="text"
                  placeholder="Ingrese link de imagen"
                  onChange={this.handleChange}
                  value={this.state.imagen}
                />
              </div>
              <div className="mb-3">
                <input
                  name="descripcion"
                  className="form-control"
                  type="text"
                  placeholder="Ingrese descripcion"
                  onChange={this.handleChange}
                  value={this.state.descripcion}
                />
              </div>
              <div className="mb-3">
                <input
                  name="precio"
                  className="form-control"
                  type="text"
                  placeholder="Ingrese el precio"
                  onChange={this.handleChange}
                  value={this.state.precio}
                />
              </div>
              <div className="mb-3">
                <input
                  name="stock"
                  className="form-control"
                  type="number"
                  placeholder="Ingrese cantidad"
                  onChange={this.handleChange}
                  value={this.state.cantidad}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </Col>
          <Col sm = "10">
              <h4>Lista de productos</h4>
              <table>
                  <thead>
                      <tr>
                          <th>Titulo</th>
                          <th>Imagen</th>
                          <th>Desripcion</th>
                          <th>Precio</th>
                          <th>Stock</th>
                      </tr>
                  </thead>
                  <tbody>
                        {
                            this.state.productos.map((producto)=>{
                                return (
                                  <tr key={producto._id}>
                                    <td>{producto.titulo}</td>
                                    <td>{producto.imagen}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.stock}</td>
                                    <td>
                                      <button
                                        onClick={() =>
                                          this.editProducto(producto._id)
                                        }
                                        type="button"
                                        className="btn btn-warning"
                                      >
                                        Editar
                                      </button>
                                      <button
                                        onClick={() =>
                                          this.deleteProducto(producto._id)
                                        }
                                        type="button"
                                        className="btn btn-danger"
                                      >
                                        Borrar
                                      </button>
                                    </td>
                                  </tr>
                                );
                            })

                        }
                  </tbody>
              </table>
          </Col>

        </Container>

        );
    }
}

