import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import icon6 from './imgs/__Ease.png';
import icon7 from './imgs/__Growth.png';
import icon5 from './imgs/__Opportunity.png';
import icon8 from './imgs/__Support.png';
import create from './imgs/create-icon.svg';
import icon1 from './imgs/crore_users_revamp.png';
import diamondvideo from './imgs/ezgif-1-d0de4baee8.mp4';
import list from './imgs/Group_2_1.svg';
import i51 from './imgs/i51.png';
import icon3 from './imgs/low-cost-icon.png';
import order from './imgs/orders-icon.svg';
import payment from './imgs/payment-icon.svg';
import icon4 from './imgs/seller-support-icon.png';
import shipment from './imgs/shipment-icon.svg';
import icon2 from './imgs/wallet-icon.png';
import './Startselling.scss';

function Startselling() {
    const [inputs, setInput] = useState([]);          // input value print
    const savedata = (event) => {                   // btn click
        event.preventDefault();
        setInput('');
    }
    const valuechange = (event) => {                   // onchange
        const name = event.target.name;
        const value = event.target.value;
        setInput((pre) => ({ ...pre, [name]: value }))
    }
    return (
        <>
            <div className='ss-login'>
                <Link to='/sellerlogin'>
                    <button>Log in</button>
                </Link>
            </div>

            <div className='ss-p1'>
                <h1 className="hit-the-floor">SELL ONLINE <br />WITH (company)</h1>
            </div>

            <div className='ss-p2'>
                <div className="container">
                    <div className="row">
                        <div className="col half-border">
                            <img src={icon1} alt="icon" />
                            <h4>45 crore+ Flipkart customers</h4>
                        </div>
                        <div className="col half-border">
                            <img src={icon2} alt="icon" />
                            <h4>7* days secure & regular payments</h4>
                        </div>
                        <div className="col half-border">
                            <img src={icon3} alt="icon" />
                            <h4>Low cost of doing business</h4>
                        </div>
                        <div className="col half-border-ntg">
                            <img src={icon4} alt="icon" />
                            <h4>One click Seller Support</h4>
                        </div>
                    </div>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '1vh' }} />

            <div className="ss-3">
                <h1>Seller Success Stories</h1>
                <div style={{ width: '65%', height: '50vh', marginLeft: '17.7%', marginTop: '7vh' }}>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='carousel-img-1'></div>
                                <div className="carousel-caption">
                                    <h4>Raju Bajaj</h4>
                                    <p>"Lorem ipsum dolor sit adipisicing elit. Ipsum natus <br /> repellat praesentium sequi quas veritatis."</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='carousel-img-2'></div>
                                <div className="carousel-caption">
                                    <h4>Ekta Shah</h4>
                                    <p>"Lorem ipsum dolor sit adipisicing elit. Ipsum natus <br /> repellat praesentium sequi quas veritatis."</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='carousel-img-3'></div>
                                <div className="carousel-caption">
                                    <h4>Sujeet Narayan</h4>
                                    <p>"Lorem ipsum dolor sit adipisicing elit. Ipsum natus <br /> repellat praesentium sequi quas veritatis."</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div >
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '5vh' }} />

            <div className="ss-4">
                <div className="ss-4-1">
                    <h2>Why do sellers love selling on (Company)?</h2>
                    <div className="ss-4-box-1">
                        <img src={icon5} alt="" className='ss-4-i1' />
                        <h5>Opportunity</h5>
                        <p>45 crore+ of customers across 19000+ pincodes, and access to shopping festivals.</p>
                    </div>
                    <div className="ss-4-box-2">
                        <img src={icon6} alt="" className='ss-4-i1' />
                        <h5>Ease of Doing Business</h5>
                        <p>Create your Company seller account in under 10 minutes with just 1 product and a valid GSTIN number.</p>
                    </div>
                    <div className="ss-4-box-3">
                        <img src={icon7} alt="" className='ss-4-i1' />
                        <h5>Growth</h5>
                        <p>Sellers see an average 2.8X spike in growth, 2.3X more visibility, and up to 5X growth in The Big Billion Days Sale.</p>
                    </div>
                    <div className="ss-4-box-4">
                        <img src={icon8} alt="" className='ss-4-i1' />
                        <h5>Additional Support</h5>
                        <p>Account management services, exclusive training programs, business insights, catalogue/photoshoot support, and more.</p>
                    </div>
                </div>
                <div className="ss-4-2">
                    <video autoPlay loop muted className="myVideo">
                        <source src={diamondvideo} type="video/mp4" />
                    </video>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className="ss-5">
                <h2>Your Journey on (Company)</h2>
                <div className='ss-5-1'>
                    <div className='ss-5-box'>
                        <img src={create} alt="" />
                        <h4>Create</h4>
                        <p>Register in just 10 mins with valid GST, address, & bank details</p>
                    </div>
                    <div className='ss-5-box'>
                        <img src={list} alt="" />
                        <h4>List</h4>
                        <p>List your products (min 1 no.) that you want to sell on (Company).</p>
                    </div>
                    <div className='ss-5-box'>
                        <img src={order} alt="" />
                        <h4>Order</h4>
                        <p>Receive orders from over 45 crore+ (Company) customers.</p>
                    </div>
                    <div className='ss-5-box'>
                        <img src={shipment} alt="" />
                        <h4>Shipment</h4>
                        <p>(Company) ensures stress free delivery of your products</p>
                    </div>
                    <div className='ss-5-box'>
                        <img src={payment} alt="" />
                        <h4>Payment</h4>
                        <p>Receive payment 7 days* from the date of dispatch of your order</p>
                    </div>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className="ss-6">
                <div className='ss-6-1'>
                    <img src={i51} alt="" />
                </div>
                <div className="ss-6-2">
                    <h2>We are happy to help you 🙂</h2>
                    <p>Still have questions or queries that are left unanswered? Share your thoughts below which will help us improve your website experience.</p>
                    <form className="form-msg" onSubmit={savedata}>
                        <input type="text" name="fullname" placeholder='Enter your name' value={inputs.fullname || ""} onChange={valuechange} /> <br />
                        <input type="text" maxLength={10} name="number" placeholder='Enter your phone number' value={inputs.number || ""} onChange={valuechange} /> <br />
                        <textarea rows="4" name='msg' placeholder='Type your message...' value={inputs.msg || ""} onChange={valuechange} className='form-ta'></textarea>
                        <button className="btnmsg">Submit</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Startselling
