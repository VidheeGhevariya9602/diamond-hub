import React from 'react';
import './Color.scss';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import i23 from './imgs/i23.jpg';
function Color() {
    return (
        <>
            <div className='color-p1'>
                <div className="color-p1-p1">
                    <h2>What Is Diamond Color?</h2>
                    <h6>Color refers to the natural tint inherent in white diamonds. In nature, most white diamonds have a slight tint of yellow. The closer to being “colorless” a diamond is, the rarer it is. The industry standard for grading color is to evaluate each stone against a master set and assign a letter grade from “D” (colorless) to “Z” (light yellow).</h6>
                </div>
                <div className="color-p1-p2">
                    <img src={i23} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className="color-p2">
                <div className="color-p2-p1">
                    <h2>Diamond Color Chart</h2>
                    <h6>Colorless diamonds. The majority of mined diamonds fall between white and pale yellow or brown; what is known as the normal color range. Diamonds of more intense color (usually yellow, but in some cases red, green or yellow) are termed fancy color diamonds. Black diamonds are also fancy color diamonds.</h6>
                </div>
                <div className="color-p2-p2">
                    <div className="container">
                        <div className="row">
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'yellow' }}>D</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'yellow' }}>E</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'yellow' }}>F</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'yellow' }}>G</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'yellow' }}>H</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'yellow' }}>I</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'white' }}>J</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'white' }}>K</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'white' }}>L</div>
                            <div className="col-1" style={{ fontWeight: '600', fontSize: '4vh', color: 'white' }}>M</div>
                        </div>
                        <div className="row">
                            <div className="col-3" style={{ borderRight: '1.5px solid rgb(171, 171, 171)' }}>Colorless</div>
                            <div className="col-4" style={{ borderRight: '1.5px solid rgb(171, 171, 171)', borderLeft: '1.5px solid rgb(171, 171, 171)' }}>Near Colorless</div>
                            <div className="col-3" style={{ borderLeft: '1.5px solid rgb(171, 171, 171)' }}>Faint Yellow</div>
                        </div>
                    </div>
                    <ul>
                        <li>Company Quality</li>
                    </ul>
                    <div className='container two'>
                        <div className="row">
                            <div className="col-5" style={{ borderRight: '1.5px solid rgb(171, 171, 171)' }}>Very Light Yellow</div>
                            <div className="col-7" style={{ borderLeft: '1.5px solid rgb(171, 171, 171)' }}>Light Yellow</div>
                        </div>
                        <div className="row">
                            <div className="col col2">N</div>
                            <div className="col col2">O</div>
                            <div className="col col2">P</div>
                            <div className="col col2">Q</div>
                            <div className="col col2">R</div>
                            <div className="col col2">T</div>
                            <div className="col col2">U</div>
                            <div className="col col2">V</div>
                            <div className="col col2">W</div>
                            <div className="col col2">X</div>
                            <div className="col col2">Y</div>
                            <div className="col col2">Z</div>
                        </div>
                    </div>
                </div>
                <h6 className='color-h6'>The gemological standards in this section refer only to <br /> individually registered engagement diamonds set in <br /> certain ring styles.</h6>
            </div>
            <Footer />
        </>
    )
}

export default Color
