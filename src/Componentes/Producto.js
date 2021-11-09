import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';
import './Producto.css';
function Producto(props){
    return(
        <Col className='card-group' sm='3'>
            <Card className="Card" body outline color = "primary">
                <CardImg src={props.imagen} />
                <CardBody>
                    <CardTitle>{props.titulo}</CardTitle>
                    <CardSubtitle><b>Precio: </b>{props.precio}</CardSubtitle>
                    <CardText>{props.descripcion}</CardText>
                    <CardText><b>Cantidad: </b>{props.stock}</CardText>
                    <button className='Boton'>Comprar</button>
                </CardBody>
            </Card>
        </Col>
        
    )
}
export default Producto;
