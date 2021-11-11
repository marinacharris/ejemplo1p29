import React, { Component } from 'react'
import {Col} from 'reactstrap'

export default class CrearProducto extends Component {
    constructor(){
        super()
        this.state = {
            titulo: '',
            imagen: '',
            descripcion: '',
            precio: '',
            stock: ''
        }
    }
    render() {
        return (
            <Col sm="6">
                <h4>Nuevo Producto</h4>
                <form>
                    <div className="mb-3">
                        <input name="titulo" className="form-control" type="text" placeholder="Ingrese título" value ={this.state.titulo} />
                        
                    </div>
                    <div className="mb-3">
                        <input name="imagen" className="form-control" type="text" placeholder="Ingrese link de imagen" value ={this.state.imagen} />
                        
                    </div>
                    <div className="mb-3">
                        <input name="descripcion" className="form-control" type="text" placeholder="Ingrese descripcion" value ={this.state.descripcion} />
                        
                    </div>
                    <div className="mb-3">
                        <input name="precio" className="form-control" type="text" placeholder="Ingrese el precio" value ={this.state.precio} />
                        
                    </div>
                    <div className="mb-3">
                        <input name="stock" className="form-control" type="number" placeholder="Ingrese cantidad" value ={this.state.cantidad} />
               
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </Col>
        
        )
    }
}

