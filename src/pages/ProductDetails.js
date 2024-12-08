import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from './product.json';
import './Productdetails.scss';

function ProductDetails({ data1 }) {
    const [category, setCategory] = useState(Product);
    const filterResult = (dataResult = null) => {
        const result = dataResult ? Product.filter((cataData) => cataData.category === dataResult) : Product;
        setCategory(result);
    };
    const filterResult1 = (dataResult = null) => {
        const result1 = dataResult ? Product.filter((cataData1) => cataData1.shape === dataResult) : Product;
        setCategory(result1);
    };

    return (
        <>
            <div className="list-p1">
                <h1>All Type Diamond</h1>
            </div>
            <div className="list-p2">
                <h6>Diamond Category</h6>
                <button type="button" onClick={() => filterResult()}>All</button>
                <button type="button" onClick={() => filterResult('rough')}>Rough</button>
                <button type="button" onClick={() => filterResult('CVD')}>CVD</button>
                <div className="only-line"></div>
                <h6>Diamond Shape</h6>
                <button type="button" onClick={() => filterResult1('Brilliant')}>Round Brilliant</button>
                <button type="button" onClick={() => filterResult1('Asscher')}>Asscher</button>
                <button type="button" onClick={() => filterResult1('Princess')}>Princess-cut</button>
                <button type="button" onClick={() => filterResult1('Emerald')}>Emerald-cut</button>
                <button type="button" onClick={() => filterResult1('Cushion')}>Cushion-cut</button>
                <button type="button" onClick={() => filterResult1('oval')}>Oval</button>
                <button type="button" onClick={() => filterResult1('Pear')}>Pear-shaped</button>
                <button type="button" onClick={() => filterResult1('Heart')}>Heart-shaped</button>
            </div>
            <div className="product-list">
                {category.map((values) => (
                    <div key={values.id} className="product-card">
                        <Link to={`/product/${values.id}`}>
                            <img src={values.image} alt={values.title} />
                        </Link>
                        <h6>{values.title}</h6>
                        <p>${values.price}</p>
                    </div>
                ))}
                {data1.map((file, index) => (
                    <div key={index} className="product-card">
                        <Link to={`/product/${index}`}>
                            <img src={URL.createObjectURL(file.img1)} alt="." />
                        </Link>
                        <h6>{file.title}</h6>
                        <p>${file.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default ProductDetails;