import React from 'react';
import brand from "../assets/brand.png";

function Product({category, image, title, price}) {
    return (
        <article className="product">
            <span>{category}</span>
            <img src={image} alt={title}/>
            <p className= "product-name">{title}</p>
            <h4 className="product-price">€{price},- </h4>
        </article>

    );
}

export default Product;



