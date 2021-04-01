import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from '../components/Inicio'
import '../assets/styles/App.scss'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'


const Home = () => {
    const [productsUpdated, setProductsUpdated] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/products/lastProducts/Update')
        .then(response => response.json())
        .then(data => setProductsUpdated(data));
    }, []);

    console.log(productsUpdated);
    // useEffect(() =>{
    //     const fetchProducts = async ()=>{
    //         const resp = await fetch('http://localhost:3000/products/lastProducts/Update');
    //         const newRespnse = await resp.json();
    //         setProductsUpdated(newRespnse);
    //     };
    //     fetchProducts();
    // },[]);  
    
    return(
        <>
            <Inicio/>
            <Categories>
                <Carousel>
                    {productsUpdated.map(item =>
                        <CarouselItem key={item.Name} {...item} />
                    )}
                </Carousel>
            </Categories>
        </>
    );
}

export default Home;