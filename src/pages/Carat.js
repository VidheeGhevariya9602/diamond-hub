import React from 'react';
import './Carat.scss';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import i24 from './imgs/i24.jpg';
import i25 from './imgs/i25.png';

function Carat() {
    return (
        <>
            <div className='carat-p1'>
                <div className="carat-p1-p1">
                    <h2>What Is a Diamond Carat?</h2>
                    <h6>Carat denotes the weight of a diamond, not the size. Tiffany measures diamonds to 1/1000th of a carat; one carat equals .20 grams. Tiffany diamonds are always cut to maximize beauty, not carat weight.</h6>
                </div>
                <div className="carat-p1-p2">
                    <img src={i24} alt="" />
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '4vh' }} />

            <div className='carat-p2'>
                <div className="carat-p2-p1">
                    <img src={i25} alt="" />
                </div>
                <div className="carat-p2-p2">
                    <h2>Diamond Carat Charts</h2>
                    <h6>Carat weight can appear differently across different diamond shapes such as round brilliant, princess, pear, oval, cushion, marquise, emerald, radiant or heart. A diamond may have a higher carat weight without appearing larger and two diamonds of the same carat weight can vary in size if one is cut deeper than the other. In other words, it is important to note that carat weight does not necessarily denote size.</h6>
                    <h6>Sizes are shown for proportionality purposes. Images do not reflect actual carat size.</h6>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '4vh' }} />

            <div className="carat-p3">
                <h2>How Big Is A 1.5 Carat Diamond?</h2>
                <table>
                    <tr style={{ fontFamily: 'Philosopher', fontSize: '4vh' }}>
                        <th>Carat (ct.)</th>
                        <th>Diameter (mm)</th>
                        <th>Surface Area (sq. mm)</th>
                    </tr>
                    <tr>
                        <td>0.3</td>
                        <td>4.30</td>
                        <td>14.52</td>
                    </tr>
                    <tr>
                        <td>0.4</td>
                        <td>4.73</td>
                        <td>17.59</td>
                    </tr>
                    <tr>
                        <td>0.5</td>
                        <td>5.10</td>
                        <td>20.41</td>
                    </tr>
                    <tr>
                        <td>0.6</td>
                        <td>5.42</td>
                        <td>23.04</td>
                    </tr>
                    <tr>
                        <td>0.7</td>
                        <td>5.70</td>
                        <td>25.53</td>
                    </tr>
                    <tr>
                        <td>0.8</td>
                        <td>5.96</td>
                        <td>27.90</td>
                    </tr>
                    <tr>
                        <td>0.9</td>
                        <td>6.20</td>
                        <td>30.17</td>
                    </tr>
                    <tr>
                        <td>1.0</td>
                        <td>6.42</td>
                        <td>32.37</td>
                    </tr>
                    <tr>
                        <td>1.1</td>
                        <td>6.63</td>
                        <td>34.49</td>
                    </tr>
                    <tr>
                        <td>1.2</td>
                        <td>6.82</td>
                        <td>36.54</td>
                    </tr>
                    <tr>
                        <td>1.3</td>
                        <td>7.01</td>
                        <td>38.54</td>
                    </tr>
                    <tr>
                        <td>1.4</td>
                        <td>7.18</td>
                        <td>40.49</td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>7.35</td>
                        <td>42.39</td>
                    </tr>
                    <tr>
                        <td>1.6</td>
                        <td>7.51</td>
                        <td>44.25</td>
                    </tr>
                    <tr>
                        <td>1.7</td>
                        <td>7.66</td>
                        <td>46.07</td>
                    </tr>
                    <tr>
                        <td>1.8</td>
                        <td>7.81</td>
                        <td>47.86</td>
                    </tr>
                    <tr>
                        <td>1.9</td>
                        <td>7.95</td>
                        <td>49.61</td>
                    </tr>
                    <tr>
                        <td>2.0</td>
                        <td>8.08</td>
                        <td>51.34</td>
                    </tr>
                </table>
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Carat
