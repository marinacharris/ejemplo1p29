import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navegacion extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Principal
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/listar">
                        Productos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className= "nav-link" to="/crear">
                        Crear Producto
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/crearUsuario">
                      Crear Usuario
                    </Link>
                  </li>
                  <li className="nav-item">
                   
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navegacion

