import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cvd.scss';
import data from './Data.json';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import video from './imgs/com-video-speed-unscreen.gif';
import i56 from './imgs/i56.png';
import i57 from './imgs/i57.png';

function Cvd() {
    const ShowAlert = () => {
        alert("Submit");
    }

    const [showAll, setShowAll] = useState(false);
    const initialCardsToShow = 5; // Number of cards to show initially
    const cvdDiamonds = data.filter(diamond => diamond.category === 'CVD');
    const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);
    const handleViewMore = () => {
        setCardsToShow(cvdDiamonds.length);
        setShowAll(true);
    };
    const handleViewLess = () => {
        setCardsToShow(initialCardsToShow);
        setShowAll(false);
    };

    return (
        <>
            <div className='c-p1'>
                <div className="c-p1-p1">
                    <h1>Melee of Supreiour quality Lab-Grown Calibrated </h1>
                    <p>Order And Choose Filter By Millimeter</p>
                    <button><Link to='/product' className='link-btn'>Shop round melee</Link></button>
                </div>
                <div className="c-p1-p2">
                    <img src={i56} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className='c-p2'>
                <div className="tabs">
                    <div className="tab-2">
                        <label for="tab2-1">Polycrystalline CVD diamond</label>
                        <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
                        <div className='tabs-color'>
                            <p className='tabs-color-p'>Our Polycrystalline CVD diamond is manufactured by DC Arc Plasma Chemical Vapor Deposition (CVD) method. They can be made into dressing tool blanks, wire drawing die blanks, laser windows, domes and thermal mounts etc in mechanical, thermal management, optical windows industries.  E-Grind CVD provides long using life and high working efficiency.</p>
                            <div className='tab-ul-1'>
                                <ul>
                                    <li>Application of Polycrystalline CVD Diamond</li>
                                    <p>Laser diodes, high-power integrated circuits, a heat spreader for satellite and GaN on Diamond.</p>
                                    <li>Specifications of Polycrystalline CVD Diamond</li>
                                    <p>Density: 3.5g/cm3 <br />
                                        Young's modulus: 1000-1100Gpa <br />
                                        Growth side surface finish:100 nm Ra <br />
                                        Nucleation side surface finish:30 nm Ra <br />
                                    </p>
                                    <li>Polycrystalline CVD For Dressing tool</li>
                                    <p>CVD diamond can be used for Dressing application in grinding process. It is suitable for the single point, multipoint, blade, rotary, roller etc It has superior thermal characteristics and very wearing resistant.</p>
                                </ul>
                            </div>
                            <div className="tab-ul-2">
                                <img src={i57} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tab-2">
                        <label for="tab2-2">Monocrystal CVD Diamond</label>
                        <input id="tab2-2" name="tabs-two" type="radio" />
                        <div className='tabs-color'>
                            <div className="tab-ul-3">
                                <img src={video} alt="" />
                            </div>
                            <div className='tab-ul-4'>
                                <ul>
                                    <li>Application of Monocrystal CVD diamond</li>
                                    <p>The workpieces for cutting are as below:</p>
                                    <p>1. Sapphire, SiC, Aluminum Alloy, Red Copper, Resin Synthesis Material, Gold, Jewelry, Laminate Floor……</p>
                                    <p>2. Watches Components, Aluminum Piston, Jewelry Ornaments, Non-ferrous Metal;</p>
                                    <p>3. Surgical Tool for Ophthalmology, Brain and Super Thin Biology Slice;</p>
                                    <p>4. Mirror, Guided Missile, Pilot Gyroscope, Computer Hard Disk Substrate, Electronic Gun;</p>
                                    <li>Types of Monocrystal CVD diamond</li>
                                    <p><b>Optical Grade Diamond:</b> the CVD Mono Diamond is suitable for being used as Optical Window, Laser Crystal of High Power Laser Device, Camera Lens of Large Power UV/IR Optical Instrument and sensor, Detector needs to be worked in extreme environment.</p>
                                    <p><b>Heat Sink Grade Diamond:</b> CVD Mono crystal diamond can be applied to High-power laser, microelectronics Heat Sink component, etc.</p>
                                    <p><b>Lab-grown Diamond:</b> CVD Mono crystal diamond can be made into a variety of high-end luxury jewelry diamond.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className='c-p3'>
                <h2>Receive Our Latest Prices & Offers</h2>
                <p>Promotions, new products and sales. Directly to your inbox.</p>
                <div className="input-group inputemail">
                    <div className="input-group-text input-i-1"><i className="fa-regular fa-envelope"></i></div>
                    <input type="email" className="form-control inputi3" id="autoSizingInputGroup" placeholder="Your email" />
                    <div className="input-group-text input-i-2"><button onClick={ShowAlert}>Submit</button></div>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0.5vh' }} />

            <div className="c-p4">
                <div>
                    <div className="row row-cols-1 row-cols-md-5 g-3 r-row">
                        {cvdDiamonds.slice(0, cardsToShow).map((diamond) => (
                            <div key={diamond.id} className="col r-col">
                                <div className="card r-card-2">
                                    <img src={diamond.image} alt={diamond.title} className="r-image" />
                                    <Link to='/product' className='link-text'><p>{diamond.title}</p></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {cvdDiamonds.length > initialCardsToShow && (
                        <div className="view-buttons">
                            {!showAll ? (
                                <button onClick={handleViewMore}>View More</button>
                            ) : (
                                <button onClick={handleViewLess}>View Less</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}
export default Cvd;