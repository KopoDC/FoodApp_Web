import React from 'react';
import '../../assets/styles/components/CarouselItem.scss'


const CarouselItem = ({Name, Image}) =>{
    return(
       <div className="carousel-item">
           <img className="carousel-item__img" src='./notfound.jpeg' alt={Name}/>
           <div className="carousel-item__details">
                <div>
                </div>
                <p className="carousel-item__details--title">{Name}</p>
           </div>
       </div> 

    );
}

export default CarouselItem;