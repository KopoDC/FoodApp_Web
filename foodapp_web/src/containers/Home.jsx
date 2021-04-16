import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from '../components/home/Inicio'
import '../assets/styles/App.scss'
import Categories from '../components/home/Categories.jsx'
import Carousel from '../components/home/Carousel.jsx'
import CarouselItem from '../components/home/CarouselItem.jsx'
import NotProducts from '../components/home/NotProducts.jsx'


const Home = () => {
    const [productsUpdated, setProductsUpdated] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/products/lastProducts/Update')
        .then(response => response.json())
        .then(data => setProductsUpdated(data));
    }, []);

    return(
        <>
            <Inicio/>
            <Categories>
                {productsUpdated.length > 0
                    ? <Carousel>
                        {
                            productsUpdated.map(item =><CarouselItem key={item.Name} {...item} />)
                        }
                      </Carousel>
                    : <NotProducts></NotProducts>
                }
            </Categories>
        </>
    );
}

export default Home;