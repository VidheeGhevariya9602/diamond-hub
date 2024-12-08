import React, { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import data from './Data.json';
import Footer from './Footer';
import './Home.scss';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import icon4 from './imgs/customer-care.png';
import icon2 from './imgs/delivery-truck.png';
import icon3 from './imgs/diamond.png';
import i2 from './imgs/HPHT-vs-CVD-Diamonds-Whats-the-Difference.webp';
import ic6 from './imgs/i18.jpg';
import ic2 from './imgs/i19.jpg';
import i26 from './imgs/i26.jpg';
import ic3 from './imgs/i36.webp';
import ic4 from './imgs/i43.webp';
import i58 from './imgs/i58.webp';
import i59 from './imgs/i59.webp';
import i60 from './imgs/i60.webp';
import ir2 from './imgs/i61.png';
import ir3 from './imgs/i62.png';
import ir4 from './imgs/i63.png';
import ir1 from './imgs/i64.png';
import ir5 from './imgs/i65.png';
import ir6 from './imgs/i66.png';
import ic1 from './imgs/i67.png';
import ic5 from './imgs/i68.png';
import i1 from './imgs/istockphoto-157328681-612x612.jpg';
import icon1 from './imgs/medal.png';
import './pages.scss';

function Home() {

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
  const settings1 = {
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
    rtl: true
  };
  return (
    <>
      <div className='mainbg'></div>
      <svg id="one" width="100" height="100" viewBox="0 0 100 100" className='svg-cl'>
        <g id="copy-1" className="group">
          <g className="large">
            <path id="large" d="M41.25,40 L42.5,10 L43.75,40 L45,41.25 L75,42.5 L45,43.75 L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z" fill="white" className='path-cl' />
          </g>
          <g className="large-2" transform="rotate(45)">
            <use xlinkHref='#large' />
          </g>
          <g className="small">
            <path id="small" d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75 L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z" fill="white" className='path-cl' />
          </g>
        </g>
      </svg>

      <div className='home-p2'>
        <div className='p2-p1'>
          <h3>ROUGH DIAMONDS</h3>
          <h6>The term rough diamonds refer to diamonds that are straight from the earth and completely untouched by a polishing wheel or tumbler. All of our rough diamonds are earth mined. <br />
            Don't see what you're looking for?
            Please <Link to='/contect'>contact us</Link> and we will be happy to check our inventory for anything you may need!</h6>
          <button><Link to='/rough' className='link-btn'>Read more</Link></button>
        </div>
        <div className="p2-p2">
          <img src={i1} alt="" />
        </div>
      </div>

      <div style={{ marginTop: '7vh' }}>
        <Slider ref={slickRef} {...settings} className="slick">
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ir1}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ir2}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ir3}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ir4}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ir5}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ir6}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '2vh' }} />

      <div className="home-p3">
        <div className="p3-p1">
          <img src={i2} alt="" />
        </div>
        <div className='p3-p2'>
          <h3>CVD DIAMONDS</h3>
          <h6>CVD stands for Chemical Vapour Deposition, and is the commonly used name for diamonds grown in a laboratory via a process of chemical vapour deposition. This differs from another process commonly-used to create lab grown diamonds, HPHT (High Pressure High Temperature).</h6>
          <button><Link to='/cvd' className='link-btn'>Read more</Link></button>
        </div>

      </div>

      <div style={{ marginTop: '1vh' }}>
        <Slider ref={slickRef} {...settings1} className="slick">
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ic1}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ic2}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ic3}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ic4}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ic5}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
          <div className="slick-slide">
            <div className="parent">
              <div className="child">
                <img
                  src={ic6}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '4vh' }} />

      <div className='home-p4'>
        <div className='p4-p1'>
          <h2>THE 4Cs</h2>
          <h6>Every diamond, like a human fingerprint, has certain distinguishing characteristics. The 4Cs—color, clarity, cut and carat weight—are the globally accepted standards for assessing the quality of a diamond. At Tiffany, we only accept 0.04% of the world's gem-grade diamonds.</h6>
          <button><Link to='/howbuy' className='link-btn'>Read more</Link></button>
        </div>
        <div className="p4-p2">
          <img src={i26} alt="" />
        </div>
      </div>
      <iframe width="632" height="312" src="https://www.youtube.com/embed/D09QZsCfIlI" title="Diamond Grading - 5Cs | Cape Town Diamond Museum" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video-4cs'></iframe>

      <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

      <div className="home-p5">
        <div className="home-p5-p1">
          <img src={i58} alt="." className='home-p5-img' />
          <h3>Shine Brighter</h3>
          <p>Lab-grown diamonds are physically and optically identical to mined diamonds</p>
        </div>
        <div className="home-p5-p1">
          <img src={i59} alt="." className='home-p5-img' />
          <h3>Affordable</h3>
          <p>Lab-grown diamonds are up to 90% less in price than mined diamonds</p>
        </div>
        <div className="home-p5-p1">
          <img src={i60} alt="." className='home-p5-img' />
          <h3>Conflict Free</h3>
          <p>A lot of mined diamonds are sold in order to fund armed conflict</p>
        </div>
      </div>

      <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '-2vh' }} />

      <div className='home-p6'>
        <h3>The Best sellers</h3>
        <Slider ref={slickRef} {...settings1} className="slick">
          {data.map((item) => (
            <div className="slick-slide">
              <Card style={{ width: '45vh', display: 'inline-block', background: 'transparent', margin: '2vh', border: 'none' }}>
                <Card.Img variant="top" src={item.image} style={{ height: '40vh', width: '45vh' }} />
                <Card.Body>
                  <Link to='/product' className='link-text'>
                    <h6 style={{ color: 'white', fontSize: '2.8vh', textAlign: 'center', fontWeight: '400' }}>{item.title}</h6>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>

      <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '-4vh' }} />

      <div className="home-p7">
        <div className="row homerow">
          <div className="col">
            <img src={icon1} alt="" />
            <h4>Certification</h4>
            <p>IGI Certified Lab Grown Diamond</p>
          </div>
          <div className="col">
            <img src={icon2} alt="" />
            <h4>Shipping</h4>
            <p>Ship With In 7 Business Working Days</p>
          </div>
          <div className="col">
            <img src={icon3} alt="" />
            <h4>Return</h4>
            <p>30 Days No Questions Ask Return Policy</p>
          </div>
          <div className="col">
            <img src={icon4} alt="" />
            <h4>Customer Support</h4>
            <p>We're Available 24/7 For You</p>
          </div>
        </div>
      </div>

      <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />

      <div className="home-p8">
        <h1>FAQs</h1>
        <div className="p8-box-1">
          <h6>How Return & Refund Policy Is Works?</h6>
          <p>Enjoy a flexible 30-day no question ask return policy for your purchase. Return within this period, with the Lab Grown Diamond Certified if applicable, for a complete refund or exchange, ensuring your utmost satisfaction with our products.</p>
        </div>
        <div className="p8-box-1">
          <h6>Can I purchase Other Shape Than Round?</h6>
          <p>We specialize in crafting over 300+ shapes, including old cuts, fancy cuts, and antique shapes, tailored to your specific requirements. Our extensive range ensures that every client finds the perfect match for their unique taste, providing personalized options that cater to diverse preferences and needs.</p>
        </div>
        <div className="p8-box-1">
          <h6>Is Customization Available In Setting Style?</h6>
          <p>We offer customized settings tailored to your preferred style, including bezel set, 6-prong set, tulip setting, among others. Our flexibility ensures that your unique taste is perfectly captured, providing a personalized touch to each piece. Choose your ideal setting, and we'll craft it to match your exact specifications.</p>
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}

export default Home;