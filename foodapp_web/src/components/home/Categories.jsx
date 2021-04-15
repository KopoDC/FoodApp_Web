import React from 'react';
import '../../assets/styles/components/Categories.scss'

const Categories = ({children}) =>{
    return(
        <>
            <h3 className="categories__title">Productos actualizados</h3>
            {children}
        </>
    );
}           

export default Categories;