import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import about1 from './imgs/about-img1.jpg';
import about2 from './imgs/about-img2.jpg';
import i2 from './imgs/about3.webp';
import i17 from './imgs/i17.png';
import video1 from './imgs/video1.gif';
import './pages.scss';
function About() {
  return (
    <>
      <div className="about-p1">
        <img src={video1} alt="" />
        <h1>We are a Proud Manufacturer & Wholesaler of All Type Diamonds</h1>
      </div>
      <div className="about-p2">
        <div className="about-p2-p1">
          <h3>Mission of Our Wholesale Lab Grown Diamond Company</h3>
          <h6>Our company has experience with natural diamonds for more than 50 years. After seeing the bright future and ethical benefits of lab grown diamonds, we moved our attention to lab grown manufacturing in 2012.
            <br />
            We are committed to provide the highest quality of lab grown diamonds by keeping ourselves updated with innovations and the latest lab grown manufacturing techniques. We hope to become the leader in the wholesale of lab diamonds by providing superior alternatives to mined diamonds and spreading awareness of the benefits of these genuine diamonds.</h6>
        </div>
        <div className="about-p2-p2">
          <img src={about1} alt="" />
        </div>
      </div>
      <img src={lineimg} alt=".." style={{ height: '10vh', marginLeft: '38.5%', marginTop: '4vh' }} />
      <div className="about-p3">
        <div className="about-p3-p1">
          <img src={about2} alt=".." />
        </div>
        <div className="about-p3-p2">
          <h3>Minimum Orders for Lab Grown Diamonds Wholesale in Los Angeles and New York:</h3>
          <h6>We have a very flexible minimum order quantity for your orders at CVD Diamond Inc. That means, whether you are a small jewelry retailer or a large-scale jewelry distributor, you can order whichever quantity that makes the most practical and financial sense for you.</h6>
        </div>
      </div>
      <img src={lineimg} alt=".." style={{ height: '10vh', marginLeft: '38.5%', marginTop: '4vh' }} />
      <div className="about-p4">
        <div className="about-p4-p1">
          <h3>Waiting Time for Wholesale Lab diamonds Purchased from CVD Diamond Inc:</h3>
          <h6>We value our relationships with our clients, and we know that it is vital for your business to get the diamonds you order quickly. That is why we offer a two-day turnaround to any business in the United States. From the time you place your order, it will only take two short days for your lab grown diamonds to reach you.</h6>
        </div>
        <div className="about-p4-p2">
          <img src={i17} alt="" />
        </div>
      </div>
      <img src={lineimg} alt=".." style={{ height: '10vh', marginLeft: '38.5%', marginTop: '4vh' }} />
      <div className="dsg">
        <div className="dsg-1">
          <img src={i2} alt="" />
        </div>
        <div className="dsg-2">
          <h1>OUR DIAMOND</h1>
          <Link to='/aboutdg' className='link-text'>
            <h4>See the diamond on</h4>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About