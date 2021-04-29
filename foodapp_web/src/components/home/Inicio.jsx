import React from 'react';
import '../../assets/styles/components/Inicio.scss'
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function Inicio (){
    return(
    <Container fluid="md">
        <h2>
            <p>Conoce +FoodApp</p>
        </h2>
        <Container className="videosection" >
          <Image src='./notfound.jpeg' fluid />
        </Container>
    </Container>)
}
export default Inicio;