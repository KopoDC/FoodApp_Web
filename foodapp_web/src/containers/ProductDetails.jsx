import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/App.scss'
import ProductDetail from '../components/ProductDetails/ProductDetail'
import AddittivesList from '../components/ProductDetails/AdditivesList'
import IngredientsList from '../components/ProductDetails/IngredientsList'
import { useParams } from 'react-router-dom';



const ProductDetails = () => {
    const [productGet, setProduct] = useState({
        'products':[], 'additives':[], 'ingredients': []
    });
    
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    },[])
    
    const detalleProducto = productGet.products;
    
    return(
        <>
            <ProductDetail {...detalleProducto}>
                {
                    productGet.ingredients.map(item =>
                        <IngredientsList key={item.Name} {...item}/>
                    )
                }
                {productGet.additives.map(item =>
                    <AddittivesList key={item.idAdditive} {...item}/>
                    )
                }
            </ProductDetail>       
        </>
    );
}

export default ProductDetails;