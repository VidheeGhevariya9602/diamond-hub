import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import dc from './imgs/diamond-cuts.jpg';
import i26 from './imgs/i26.jpg';
import i28 from './imgs/i28.jpg';
import i29 from './imgs/i29.jpeg';
import i30 from './imgs/i30.jpg';
import i31 from './imgs/i31.jpeg';
import i32 from './imgs/i32.webp';
import i33 from './imgs/i33.jpeg';
import i34 from './imgs/i34.webp';
import i36 from './imgs/i36.webp';
import i37 from './imgs/i37.webp';
import i38 from './imgs/i38.webp';
import i39 from './imgs/i39.webp';
import i40 from './imgs/i40.webp';
import i41 from './imgs/i41.webp';
import i42 from './imgs/i42-removebg-preview.png';
import i43 from './imgs/i43.webp';
import './Shape.scss';

function Shape() {
    const slickRef = useRef(null);

    useEffect(() => {
        if (slickRef && slickRef.current) {
            slickRef.current.slickGoTo(1);
        }
    }, []);

    const settings = {
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    };

    return (
        <>
            <div className='shape-p1'>
                <div className="shape-p1-p1">
                    <img src={dc} alt="" />
                </div>
                <div className="shape-p1-p2">
                    <h2>What Is a Diamond Shape?</h2>
                    <h6>Diamond shape refers to the geometric appearance of a diamond. Diamond shapes are categorized into two groups: round diamonds and fancy shape diamonds. Round brilliant diamonds are the most traditional diamond shape. Tiffany fancy shape diamonds include princess, cushion, emerald, oval, pear, marquise, heart and our exclusive Tiffany True® diamond.</h6>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />
            {/* Slider */}
            <div style={{ marginTop: '7vh' }}>
                <Slider ref={slickRef} {...settings} className="slick marquee">
                    <div className="slick-slide">
                        <div className="parent">
                            <div className="child">
                                <img
                                    src={i26}
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="parent">
                            <div className="child">
                                <img
                                    src={i28}
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="parent">
                            <div className="child">
                                <img
                                    src={i29}
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="parent">
                            <div className="child">
                                <img
                                    src={i30}
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="parent">
                            <div className="child">
                                <img
                                    src={i31}
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="parent">
                            <div className="child">
                                <img
                                    src={i32}
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="parent">
                            <div className="child">
                                <img
                                    src={i33}
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="parent">
                            <div className="child">
                                <img
                                    src={i34}
                                    alt="Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            {/* ---- */}
            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className="shape-p2">
                <div className="shape-p2-p1">
                    <h2>Round Brilliant Diamonds</h2>
                    <h6>A brilliant-cut is defined as one resembling two pyramids placed base to base, intended to enhance the gem's sparkle with the least possible sacrifice in carat weight. The Round Brilliant diamond shape has 57 facets comprising 33 facets on the crown and 25 on the pavilion.</h6>
                </div>
                <div className="shape-p2-p2">
                    <img src={i36} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className='shape-p3'>
                <div className="shape-p3-p1">
                    <img src={i37} alt="" />
                </div>
                <div className="shape-p3-p2">
                    <h2>Asscher Diamond</h2>
                    <h6>Asscher cut diamonds are very rare to find, both in general and in a high quality. - Due to their rarity and wasteful cutting process, Asscher cuts are typically about 10% more expensive than other diamond shapes of the same carat weight, except the round brilliant.</h6>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '-1vh' }} />

            <div className="shape-p4">
                <div className="shape-p4-p1">
                    <h2>Princess-cut Diamond</h2>
                    <h6>Beloved for its contemporary style and sparkle, the princess cut is the most popular fancy shape diamond. Princess-cut diamonds are square modified brilliant cuts with pointed corners. Boasting over 50 chevron-shaped facets, this cut is defined by exceptional fire and scintillation. Princess-cut diamonds can be either square or rectangular.</h6>
                </div>
                <div className="shape-p4-p2">
                    <img src={i38} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className='shape-p5'>
                <div className="shape-p5-p1">
                    <img src={i39} alt="" />
                </div>
                <div className="shape-p5-p2">
                    <h2>Emerald-cut Diamond</h2>
                    <h6>In general emerald cut diamond rings and other jewellery can be more expensive than other shapes because of their high clarity and excellent light refraction, as well as the amount of time it takes a master gem cutter to produce them</h6>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />

            <div className="shape-p6">
                <div className="shape-p6-p1">
                    <h2>Cushion-cut Diamond</h2>
                    <h6>The cushion-cut diamond is also traditionally referred to as the “pillow-cut diamond.” Rounded edges soften the corners of this square or rectangular diamond. A unique spin on the classic round brilliant, the cushion-cut diamond is an excellent choice for any engagement ring setting.</h6>
                </div>
                <div className="shape-p6-p2">
                    <img src={i40} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />

            <div className='shape-p7'>
                <div className="shape-p7-p1">
                    <img src={i41} alt="" />
                </div>
                <div className="shape-p7-p2">
                    <h2>Oval Diamonds</h2>
                    <h6>The oval shape is an elegant combination of the round brilliant cut and the marquise diamond. This brilliant cut features shimmering facets that make the light dance and create the illusion of longer fingers. Bold and sophisticated, the oval diamond is a unique shape for the wearer who wants to express their individuality.</h6>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '2vh' }} />

            <div className="shape-p8">
                <div className="shape-p8-p1">
                    <h2>Pear-shaped Diamonds</h2>
                    <h6>The pear shape combines round brilliant and marquise styles to form a tapered teardrop with an extraordinary display of light. Like oval and marquise diamonds, the flattering pear shape elongates the finger—especially when worn with the point facing the nail.</h6>
                </div>
                <div className="shape-p8-p2">
                    <img src={i42} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className='shape-p9'>
                <div className="shape-p9-p1">
                    <img src={i43} alt="" />
                </div>
                <div className="shape-p9-p2">
                    <h2>Heart-shaped Diamonds</h2>
                    <h6>Heart-shaped gems are classic symbols of love, cut with a precise length-to-width ratio to ensure expertly symmetrical curves. Sentimental and as rare as true connection, the heart-shaped diamond is an excellent choice for the classic romantic.</h6>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Shape
