import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import './Productlist.scss';
import products from './product.json';

const ProductList = () => {
    
    const [slideIndex, setSlideIndex] = useState(1);
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }
    const product = products.find(product => product.id === parseInt(id));
    if (!product) {
        return <h1 style={{ color: 'white' }}>Product not found;</h1>;
    }

    const images = [
        { src: product.image },
        { src: product.image2 },
        { src: product.image3 },
        { src: product.image4 },
        { src: product.image5 },
        { src: product.image6 },
    ];

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    return (
        <>
            <div className="Product-part">
                {images.map((image, index) => (
                    <div
                        className="mySlides"
                        key={index}
                        style={{ display: slideIndex === index + 1 ? "block" : "none" }}
                    >
                        <img src={image.src} alt="..." className="product-img" />
                    </div>
                ))}
                <div className="caption-container">
                </div>
                <div className="row">
                    {images.map((image, index) => (
                        <div className="column" key={index}>
                            <img
                                className={`demo cursor ${slideIndex === index + 1 ? "active" : ""}`}
                                src={image.src.replace("_wide", "")}
                                onClick={() => currentSlide(index + 1)}
                                alt={image.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='product-details-p2'>
                    <h2>{product.title}</h2>
                    <hr className='hr1' />
                    <h4 className='price'>${product.price}</h4>
                    <p className='stock'>1 in stock</p>
                    <input type="number" name="stock" id="stock" value={1} className='stock-input' />
                    <br />
                    <button onClick={handleAddToCart} className='cartbutton'>Add to Cart</button>
                    <p className='c-w-d'><b>Carat Weight :</b> {product.carat}</p>
                    <p className='c-w-d'><b>Description :</b> {product.discription}</p>
                    <hr className='hr1' />
                    <h5>100% Guarantee</h5>
                    <hr className='hr1' />
                    <h5>Customer Service</h5>
                    <p className='qus'>Questions? Call us +86-371-68616866</p>
                </div>
        </>
    );
};

export default ProductList;