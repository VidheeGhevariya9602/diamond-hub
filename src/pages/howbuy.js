import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './Howbuy.scss'
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png'
import dic from './imgs/diamond-cuts.jpg'
import i9 from './imgs/i10.webp'
import i11 from './imgs/i11.jpg'
import i12 from './imgs/i12.webp'
import i13 from './imgs/i13.jpg'
import i14 from './imgs/i14.png'

function Howbuy() {
    return (
        <>
            <div className='howbuy-p1'>
                <div className="howbuy-p1-p1">
                    <h2>THE 4Cs</h2>
                    <h6>Every diamond, like a human fingerprint, has certain distinguishing characteristics. The 4Cs—color, clarity, cut and carat weight—are the globally accepted standards for assessing the quality of a diamond. At Tiffany, we only accept 0.04% of the world's gem-grade diamonds.</h6>
                </div>
                <div className="howbuy-p1-p2">
                    <img src={i9} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '2vh' }} />

            <div className='howbuy-p2'>
                <div className="row row-cols-1 row-cols-md-4 g-0">
                    <div className="col p-4">
                        <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>
                            <img src={i11} alt="..." style={{ height: '40vh' }} />
                            <div className="card-body p-3" style={{ textAlign: 'center' }}>
                                <h4 className="card-title">Cut</h4>
                                <p className="card-text" style={{ color: '#949494' }}>Cut is determined by how a diamond's facets interact with light.</p>
                                <Link to='/cut' style={{ color: 'white', fontWeight: '600' }}>learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col p-4">
                        <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>
                            <img src={i12} alt="..." style={{ height: '40vh' }} />
                            <div className="card-body p-3" style={{ textAlign: 'center' }}>
                                <h4 className="card-title">Clarity</h4>
                                <p className="card-text" style={{ color: '#949494' }}>Clarity is a measure of the purity and rarity of the stone.</p>
                                <Link to='/clarity' style={{ color: 'white', fontWeight: '600' }}>learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col p-4">
                        <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>
                            <img src={i14} alt="..." style={{ height: '40vh' }} />
                            <div className="card-body p-3" style={{ textAlign: 'center' }}>
                                <h4 className="card-title">Color</h4>
                                <p className="card-text" style={{ color: '#949494' }}>Color refers to the natural tint inherent in white diamonds.</p>
                                <Link to='/color' style={{ color: 'white', fontWeight: '600' }}>learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col p-4">
                        <div className="card h-100" style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>
                            <img src={i13} alt="..." style={{ height: '40vh' }} />
                            <div className="card-body p-3" style={{ textAlign: 'center' }}>
                                <h4 className="card-title">Carat</h4>
                                <p className="card-text" style={{ color: '#949494' }}>Carat denotes the weight of a diamond.</p>
                                <Link to='/carat' style={{ color: 'white', fontWeight: '600' }}>learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />

            <div className="howbuy-p3">
                <div className="howbuy-p3-p1">
                    <img src={dic} alt="" />
                </div>
                <div className="howbuy-p3-p2">
                    <h2>DIAMOND SHAPES</h2>
                    <h6>Every diamond shape has its own unique appeal. Discover the diamond shape that reflects your personal style and relationship.</h6>
                    <button><Link to='/shape' className='link-btn'>Read more</Link></button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Howbuy
