import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/App.scss'
import ProductDetail from '../components/ProductDetails/ProductDetail'
import AddittivesList from '../components/ProductDetails/AdditivesList'
import IngredientsList from '../components/ProductDetails/IngredientsList'
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';



const ProductDetails = () => {
    const [productGet, setProduct] = useState({
        'products':[], 'additives':[], 'ingredients': []
    });
    
    const {barcode} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/products/${barcode}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    },[])
    const detalleProducto = productGet.products;

    if(detalleProducto !== undefined){
        return(
            <>
                <ProductDetail {...detalleProducto}>
                    {productGet.ingredients.length > 0 
                        ? productGet.ingredients.map(item => <IngredientsList key={item.Name} {...item}/>)
                        : <p>Este producto todavía no tiene información sobre sus ingredientes</p>
                    }
                    {productGet.additives.length > 0
                        ? productGet.additives.map(item => <AddittivesList key={item.idAdditive} {...item}/>)
                        : <p>Este producto todavía no tiene información sobre sus Aditivos</p>
                    }
                </ProductDetail> 
            </>
        );
    }else{
        return(
            <NotFound></NotFound>
        );
    }

}

export default ProductDetails;