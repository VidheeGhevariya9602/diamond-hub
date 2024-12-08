import React from 'react';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import i19 from './imgs/i19.jpg';
import i21 from './imgs/i21.png';
import './Clarity.scss';

function Clarity() {
    return (
        <>
            <div className='clarity-p1'>
                <div className="clarity-p1-p1">
                    <h2>What Is Diamond Clarity?</h2>
                    <h6>Diamond clarity is a measure of the purity and rarity of the stone, graded by the visibility of these characteristics under 10-power magnification. A stone is graded as flawless if, under 10-power magnification, no inclusions (internal flaws) and no blemishes (external imperfections) are visible. At Tiffany, we only accept 0.04% of the world's gem-grade diamonds.</h6>
                </div>
                <div className="clarity-p1-p2">
                    <img src={i19} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '1vh' }} />

            <div className="clarity-p2">
                <h2>Diamond Clarity Chart</h2>
                <h6>A diamond with a poor clarity grade has multiple inclusions, which directly affects sparkle. <br /> Because inclusions hinder the refraction and return of light, the lower the clarity grade, <br /> the cloudier the diamond will appear.</h6>
                <img src={i21} alt="" />
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '4vh' }} />

            <div className='clarityimg'>
                <h1>“If anything takes away from <br /> the beauty of the stone, <br /> we won't accept it.”</h1>
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Clarity
