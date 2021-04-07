import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/components/ProductDetail.scss';

const IngredientsList = ({Name}) =>{

    return (
        <ul>
            <li>{Name}</li>
        </ul>
    );
}

export default IngredientsList;