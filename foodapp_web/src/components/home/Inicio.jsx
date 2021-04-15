import React from 'react';
import '../../assets/styles/components/Inicio.scss'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Container } from 'react-bootstrap';

function Inicio (){
    return(
    <Container className="delimiter" fluid="md">
        <h2>
            <p>Conoce +FoodApp</p>
        </h2>
        <div className="videosection" >
            <ResponsiveEmbed aspectRatio="16by9">
                <embed  src="https://www.youtube.com/watch?v=4y5aZkXf9Kc"/>
            </ResponsiveEmbed>
        </div>
    </Container>)
}
export default Inicio;