import React, { useRef, useState } from 'react';
import './Listing.scss';

function Listing({ onSubmit }) {
    // img
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [img5, setImg5] = useState('');
    const [img6, setImg6] = useState('');

    const imgClick = (index) => {
        if (index === 1) {
            InputRef1.current.click();
        } if (index === 2) {
            InputRef2.current.click();
        } if (index === 3) {
            InputRef3.current.click();
        } if (index === 4) {
            InputRef4.current.click();
        } if (index === 5) {
            InputRef5.current.click();
        } if (index === 6) {
            InputRef6.current.click();
        }
    };
    const imgClickChange = (event, index) => {
        if (index === 1) {
            setImg1(event.target.files[0]);
        } if (index === 2) {
            setImg2(event.target.files[0]);
        } if (index === 3) {
            setImg3(event.target.files[0]);
        } if (index === 4) {
            setImg4(event.target.files[0]);
        } if (index === 5) {
            setImg5(event.target.files[0]);
        } if (index === 6) {
            setImg6(event.target.files[0]);
        }
    };
    const InputRef1 = useRef(null);
    const InputRef2 = useRef(null);
    const InputRef3 = useRef(null);
    const InputRef4 = useRef(null);
    const InputRef5 = useRef(null);
    const InputRef6 = useRef(null);
    // ----------------------------------------------------

    // form
    const [errors, setErrors] = useState({});      // error
    const validateForm = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (title === '') {
            newErrors.title = 'Your Product name is required';
        }
        if (price === '') {
            newErrors.price = 'Price is required';
        }
        if (stock === '') {
            newErrors.stock = 'Stock is required';
        }
        if (weight === '') {
            newErrors.weight = 'Product Weight is required';
        }
        if (measurements === '') {
            newErrors.measurements = 'Measurements is required';
        }
        if (description === '') {
            newErrors.description = 'Product description is required';
        }
        if (category === '') {
            newErrors.category = 'Product Category is required';
        }
        if (shape === '') {
            newErrors.shape = 'Product Shape is required';
        }
        setErrors(newErrors);
        settitle('');
        setPrice('');
        setCategory('');
        setWeight('');
        setShape('');
        setMeasurements('');
        setDescription('');
        setStock('');
        setImg1('');
        setImg2('');
        setImg3('');
        setImg4('');
        setImg5('');
        setImg6('');
        onSubmit({ title, category, shape, price, weight, description, measurements, stock, img1 });
    };
    const [title, settitle] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [weight, setWeight] = useState('');
    const [measurements, setMeasurements] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [shape, setShape] = useState('');

    return (
        <>
            <div className='main-part'>
                <div className="image-uploader-container">
                    <h6 className='note'>Notes:</h6>
                    <ul className='img-u-c-text'>
                        <li>Image frame: Product should cover at least 85% of the frame</li>
                        <li>File format: JPEG, TIFF, GIF, and PNG are accepted</li>
                        <li>Use clear, appropriately sized images taken in proper lighting</li>
                        <li>Upload at least one product image for all categories</li>
                    </ul>
                    <p>6 image required
                        <span style={{
                            position: 'absolute',
                            color: 'red',
                            fontSize: '3vh'
                        }}>*</span>
                    </p>

                    <div className='image-main'>
                        <div className="profileset" onClick={() => imgClick(1)}>
                            {img1 ?
                                <img src={URL.createObjectURL(img1)} alt='img' style={{ position: 'absolute', height: '29vh', width: '27vh' }} /> :
                                <div style={{ position: 'absolute', height: '29vh', width: '27vh', border: '1px dotted grey', padding: '2vh', cursor: 'pointer' }}>
                                    <div style={{ textAlign: 'center', position: 'absolute', background: 'lightgrey', height: '25vh', width: '23vh' }}>
                                        <h1 style={{ marginTop: '7vh' }}>+</h1>
                                    </div>
                                </div>
                            }
                            <input type="file" ref={InputRef1} onChange={(e) => imgClickChange(e, 1)} style={{ position: 'absolute', marginTop: '35vh', display: 'none' }} />
                        </div>

                        <div className="profileset-2" onClick={() => imgClick(2)}>
                            {img2 ?
                                <img src={URL.createObjectURL(img2)} alt='img' style={{ position: 'absolute', height: '29vh', width: '27vh' }} /> :
                                <div style={{ position: 'absolute', height: '29vh', width: '27vh', border: '1px dotted grey', padding: '2vh', cursor: 'pointer' }}>
                                    <div style={{ textAlign: 'center', position: 'absolute', background: 'lightgrey', height: '25vh', width: '23vh' }}>
                                        <h1 style={{ marginTop: '7vh' }}>+</h1>
                                    </div>
                                </div>
                            }
                            <input type="file" ref={InputRef2} onChange={(e) => imgClickChange(e, 2)} style={{ position: 'absolute', marginTop: '35vh', display: 'none' }} />
                        </div>

                        <div className="profileset-3" onClick={() => imgClick(3)}>
                            {img3 ?
                                <img src={URL.createObjectURL(img3)} alt='img' style={{ position: 'absolute', height: '29vh', width: '27vh' }} /> :
                                <div style={{ position: 'absolute', height: '29vh', width: '27vh', border: '1px dotted grey', padding: '2vh', cursor: 'pointer' }}>
                                    <div style={{ textAlign: 'center', position: 'absolute', background: 'lightgrey', height: '25vh', width: '23vh' }}>
                                        <h1 style={{ marginTop: '7vh' }}>+</h1>
                                    </div>
                                </div>
                            }
                            <input type="file" ref={InputRef3} onChange={(e) => imgClickChange(e, 3)} style={{ position: 'absolute', marginTop: '35vh', display: 'none' }} />
                        </div>

                        <div className="profileset-4" onClick={() => imgClick(4)}>
                            {img4 ?
                                <img src={URL.createObjectURL(img4)} alt='img' style={{ position: 'absolute', height: '29vh', width: '27vh' }} /> :
                                <div style={{ position: 'absolute', height: '29vh', width: '27vh', border: '1px dotted grey', padding: '2vh', cursor: 'pointer' }}>
                                    <div style={{ textAlign: 'center', position: 'absolute', background: 'lightgrey', height: '25vh', width: '23vh' }}>
                                        <h1 style={{ marginTop: '7vh' }}>+</h1>
                                    </div>
                                </div>
                            }
                            <input type="file" ref={InputRef4} onChange={(e) => imgClickChange(e, 4)} style={{ position: 'absolute', marginTop: '35vh', display: 'none' }} />
                        </div>

                        <div className="profileset-5" onClick={() => imgClick(5)}>
                            {img5 ?
                                <img src={URL.createObjectURL(img5)} alt='img' style={{ position: 'absolute', height: '29vh', width: '27vh' }} /> :
                                <div style={{ position: 'absolute', height: '29vh', width: '27vh', border: '1px dotted grey', padding: '2vh', cursor: 'pointer' }}>
                                    <div style={{ textAlign: 'center', position: 'absolute', background: 'lightgrey', height: '25vh', width: '23vh' }}>
                                        <h1 style={{ marginTop: '7vh' }}>+</h1>
                                    </div>
                                </div>
                            }
                            <input type="file" ref={InputRef5} onChange={(e) => imgClickChange(e, 5)} style={{ position: 'absolute', marginTop: '35vh', display: 'none' }} />
                        </div>

                        <div className="profileset-6" onClick={() => imgClick(6)}>
                            {img6 ?
                                <img src={URL.createObjectURL(img6)} alt='img' style={{ position: 'absolute', height: '29vh', width: '27vh' }} /> :
                                <div style={{ position: 'absolute', height: '29vh', width: '27vh', border: '1px dotted grey', padding: '2vh', cursor: 'pointer' }}>
                                    <div style={{ textAlign: 'center', position: 'absolute', background: 'lightgrey', height: '25vh', width: '23vh' }}>
                                        <h1 style={{ marginTop: '7vh' }}>+</h1>
                                    </div>
                                </div>
                            }
                            <input type="file" ref={InputRef6} onChange={(e) => imgClickChange(e, 6)} style={{ position: 'absolute', marginTop: '35vh', display: 'none' }} />
                        </div>
                    </div>
                </div>

                <div className="info-part">
                    <div className="info-main">
                        <form onSubmit={validateForm}>
                            <label>Product name
                                <span style={{ color: 'red', fontSize: '3vh' }}>*</span>
                            </label>
                            <input type="text" placeholder="Enter your product name" name="title" value={title} onChange={(e) => settitle(e.target.value)} />
                            {errors.title &&
                                <div className="error-message">
                                    {errors.title}
                                </div>
                            }

                            <label>Category
                                <span style={{ color: 'red', fontSize: '3vh' }}>*</span>
                            </label>
                            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="" disabled style={{ color: 'grey' }}>select category</option>
                                <option value="rough">Rough Diamond</option>
                                <option value="cvd">CVD Diamond</option>
                            </select>
                            {errors.category &&
                                <div className="error-message">
                                    {errors.category}
                                </div>
                            }

                            <label>Shape
                                <span style={{ color: 'red', fontSize: '3vh' }}>*</span>
                            </label>
                            <select name="shape" value={shape} onChange={(e) => setShape(e.target.value)}>
                                <option value="" disabled style={{ color: 'grey' }}>select shape</option>
                                <option value="Brilliant">Round Brilliant</option>
                                <option value="Asscher">Asscher</option>
                                <option value="Princess">Princess-cut</option>
                                <option value="Emerald">Emerald-cut</option>
                                <option value="Cushion">Cushion-cut</option>
                                <option value="oval">Oval</option>
                                <option value="Pear">Pear-shaped</option>
                                <option value="Heart">Heart-shaped</option>
                            </select>
                            {errors.shape &&
                                <div className="error-message">
                                    {errors.shape}
                                </div>
                            }

                            <label>Price
                                <span style={{ color: 'red', fontSize: '3vh' }}>*</span>
                            </label>
                            <input type="text" placeholder="Enter price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            {errors.price &&
                                <div className="error-message">
                                    {errors.price}
                                </div>
                            }

                            <label>Stock
                                <span style={{ color: 'red', fontSize: '3vh' }}>*</span>
                            </label>
                            <input type="number" placeholder="Enter stock" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} min={1} max={10} />
                            {errors.stock &&
                                <div className="error-message">
                                    {errors.stock}
                                </div>
                            }

                            <label>Carat weight
                                <span style={{ color: 'red', fontSize: '3vh' }}>*</span>
                            </label>
                            <input type="text" placeholder="Enter Carat weight in ct" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            {errors.weight &&
                                <div className="error-message">
                                    {errors.weight}
                                </div>
                            }

                            <label>Measurements
                                <span style={{ color: 'red', fontSize: '3vh' }}>*</span>
                            </label>
                            <input type="text" placeholder="Enter Measurements (ex. 13.9 x7.4x8.5mm)" name="measurements" value={measurements} onChange={(e) => setMeasurements(e.target.value)} />
                            {errors.measurements &&
                                <div className="error-message">
                                    {errors.measurements}
                                </div>
                            }

                            <label>Description
                                <span style={{ color: 'red', fontSize: '3vh' }}>*</span>
                            </label>
                            <textarea placeholder="Enter product description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
                            {errors.description &&
                                <div className="error-message">
                                    {errors.description}
                                </div>
                            }

                            <button>Create new list</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Listing;