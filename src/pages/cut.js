import React from 'react';
import './Cut.scss';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import i1 from './imgs/AdobeStock_272687719-scaled.webp';
import i16 from './imgs/i16.webp';
import i17 from './imgs/i17.png';
import i18 from './imgs/i18.jpg';
import i20 from './imgs/i20.webp';
import cutcart from './imgs/img-1688238559.png';

function Cut() {

    return (
        <>
            <div className='cut-p1'>
                <div className="cut-p1-p1">
                    <h2>What Is Diamond Cut?</h2>
                    <h6>The most important of the 4Cs, cut refers to how a diamond’s facets interact with light. It is determined by symmetry, proportion and polish. More than any other factor, cut determines the beauty of the stone. Tiffany diamonds, from the smallest to the largest stone, are always cut to prioritize brilliance over carat weight.</h6>
                </div>
                <div className="cut-p1-p2">
                    <img src={i1} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />

            <div className="cut-p2">
                <div className="cut-p2-p1">
                    <img src={cutcart} alt="" />
                </div>
                <div className="cut-p2-p2">
                    <h2>What Impacts Diamond Cut Quality?</h2>
                    <h6>Cut is the only one of the 4Cs that is affected by human hands. Two diamonds may have the same clarity, color and carat weight, but cut is what determines whether or not one is superior to the other. Three factors alone determine a diamond's cut:</h6>
                    <h4>Precision of cut</h4>
                    <p>How the size and angles relate to the different parts of the stone.</p>
                    <h4>Symmetry</h4>
                    <p>How precisely the various facets of a diamond align and intersect.</p>
                    <h4>Polish</h4>
                    <p>The details and placement of the facet shapes as well as the outside finish of the diamond.</p>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '3vh' }} />

            <div className="cut-p3">
                <div className="cut-p3-p1">
                    <h2>Types of Diamond Cuts</h2>
                    <h6>All Tiffany diamonds are masterfully cut to maximize brilliance. There are three diamond cuts used to craft every diamond shape: brilliant cut, step cut and mixed cut.</h6>
                </div>
                <div className="cut-p3-p2">
                    <img src={i16} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />

            <div className="cut-p4">
                <div className="cut-p4-p1">
                    <img src={i17} alt="" />
                </div>
                <div className="cut-p4-p2">
                    <h2>Brilliant Cut</h2>
                    <h6>The brilliant cut is the most popular facet arrangement. It is made of triangular and kite-shaped facets, all arranged to optimize brilliance, or light return. The round brilliant diamond, which has 57 to 58 facets, is the most brilliant of the diamond cuts. Cushion, oval, marquise, pear and heart-shaped diamonds are also cut using the brilliant faceting style and are similar to the round brilliant in degree of sparkle.</h6>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '2vh' }} />

            <div className="cut-p5">
                <div className="cut-p5-p1">
                    <h2>Step Cut</h2>
                    <h6>Step-cut diamonds have trapezoidal facets that run parallel to the diamond's girdle, resembling a set of stairs. This faceting style emphasizes a diamond's color and clarity. The most well-known step cut is the emerald cut.</h6>
                </div>
                <div className="cut-p5-p2">
                    <img src={i18} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '2vh' }} />

            <div className="cut-p6">
                <div className="cut-p6-p1">
                    <img src={i20} alt="" />
                </div>
                <div className="cut-p6-p2">
                    <h2>Mixed Cut</h2>
                    <h6>Mixed cuts have a combination of brilliant and step-cut facets. The Tiffany True® diamond is a mixed cut with a crown made entirely of step cuts and a brilliant-cut pavilion.</h6>
                </div>
            </div>
            <br /><br />
            <Footer />
        </>
    )
}

export default Cut
