import React from 'react';
import '../../assets/styles/components/CarouselItem.scss'
import { Link } from 'react-router-dom';


const CarouselItem = ({Name, Image, idProduct}) =>{
    return(
       <div className="carousel-item">
           <img className="carousel-item__img" src='./notfound.jpeg' alt={Name}/>
           <div className="carousel-item__details">
                <p className="carousel-item__details--title">{Name}</p>
                <Link to={"/products/"+ idProduct} className="detail-route">Detalle producto</Link> 
           </div>
       </div> 

    );
}

export default CarouselItem;