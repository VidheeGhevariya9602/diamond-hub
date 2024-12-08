import React from 'react';
import { Link } from 'react-router-dom';
import data from './Data.json';
import Footer from './Footer';
import lineimg from './imgs/518-5181841_decorative-line-divider-png-transparent-png.png';
import i1 from './imgs/i52.jpg';
import i2 from './imgs/i53.jpg';
import i3 from './imgs/i54.jpg';
import './Rough.scss';

function Rough() {
    const diamonddata = [
        {
            Carats: 207.29,
            Name: "Children of Asia",
            Country: "Russia",
            Mine: "Zarnitsa mine",
            Date: 2016,
            Currentowner: "Alrosa"
        },
        {
            Carats: 235.16,
            Name: "The Town of Vilyuysk",
            Country: "Russia",
            Mine: "Yubileynaya mine",
            Date: 2013,
            Currentowner: "Diamond Fund, Moscow"
        },
        {
            Carats: 770,
            Name: "The Woyie River",
            Country: "Sierra Leone",
            Mine: "Woyie River",
            Date: 1945,
            Currentowner: null
        },
        {
            Carats: 271,
            Country: "Canada",
            Mine: "Victor Mine",
            Date: 2018,
            Currentowner: "De Beers"
        },
        {
            Carats: 600,
            Name: "Goias",
            Country: "Brazil",
            Mine: "Verissimo River",
            Date: 1906,
            Currentowner: null
        },
        {
            Carats: 320.65,
            Name: "Alexander Pushkin",
            Country: "Russia / Soviet Union",
            Mine: "Udachnaya pipe",
            Date: 1989,
            Currentowner: "Diamond Fund, Moscow"
        },
        {
            Carats: 232.4,
            Country: "Russia",
            Mine: "Udachnaya Mine",
            Date: 2019,
            Currentowner: null
        },
        {
            Carats: 241.88,
            Name: "Free Russia",
            Country: "Russia",
            Mine: "Sytykanskaya pipe, Yakutia",
            Date: 1991,
            Currentowner: "Diamond Fund, Moscow"
        },
        {
            Carats: 890,
            Name: "Incomparable Diamond",
            Country: "Democratic Republic of the Congo",
            Mine: "Societé Minière de Bakwanga",
            Date: 1984,
            Currentowner: "Louis Glick"
        },
        {
            Carats: 460,
            Name: "Charneca 1",
            Country: "Brazil",
            Mine: "Santo Ignacio River",
            Date: 1940,
            Currentowner: null
        },
        {
            Carats: 602,
            Name: "Santo Antônio",
            Country: "Brazil",
            Mine: "Santo Antonio do Bonito River",
            Date: 1994,
            Currentowner: null
        },
        {
            Carats: 460,
            Name: "Darcy Vargas",
            Country: "Brazil",
            Mine: "Santo Antonio do Bonito River",
            Date: 1939,
            Currentowner: null
        },
        {
            Carats: 726.6,
            Name: "The Vargas",
            Country: "Brazil",
            Mine: "San Antonio River",
            Date: 1938,
            Currentowner: null
        },
        {
            Carats: 3106.75,
            Name: "Cullinan Diamond",
            Country: "South Africa",
            Mine: "Premier Mine",
            Date: 1905,
            Currentowner: "British Crown (I and II) and Charles III (III–IX)"
        },
        {
            Carats: 755.5,
            Name: "The Golden Jubilee",
            Country: "South Africa",
            Mine: "Premier Mine",
            Date: 1985,
            Currentowner: "Government of Thailand"
        },
        {
            Carats: 599,
            Name: "Centenary",
            Country: "South Africa",
            Mine: "Premier Mine",
            Date: 1986,
            Currentowner: null
        },
        {
            Carats: 353.9,
            Name: "Premier Rose",
            Country: "South Africa",
            Mine: "Premier Mine",
            Date: 1978,
            Currentowner: "Robert Mouawad"
        },
        {
            Carats: 287.42,
            Name: "Tiffany Yellow Diamond",
            Country: "South Africa",
            Mine: "Premier Mine",
            Date: 1877,
            Currentowner: "Tiffany & Co."
        },
        {
            Carats: 240.8,
            Name: "The Taylor Burton",
            Country: "South Africa",
            Mine: "Premier Mine",
            Date: 1966,
            Currentowner: null
        },
        {
            Carats: 267.53,
            Name: "Unnamed",
            Country: "Brazil",
            Mine: "Pontesinha diamond bed",
            Date: "Unknown",
            Currentowner: null
        },
        {
            Carats: 298.48,
            Name: "The Creator",
            Country: "Russia",
            Mine: "Placer mining, Yakutia",
            Date: 2004,
            Currentowner: "Government of the Sakha Republic; kept in the Diamond Fund, Moscow"
        },
        {
            Carats: 410,
            Name: "The Regent",
            Country: "India",
            Mine: "Paritala-Kollur Mine",
            Date: 1698,
            Currentowner: "Louvre Museum, France"
        },
        {
            Carats: 241.21,
            Name: "Alrosa Spectacle",
            Country: "Russia",
            Mine: "Nyurbinsky mine",
            Date: 2016,
            Currentowner: "Cut into a 100.94 carat diamond and auctioned in May 2021 by Sothebys for US$14.1m."
        },
        {
            Carats: 214.65,
            Name: "Boris Eifman",
            Country: "Russia",
            Mine: "Nyurbinskoye mine",
            Date: 2016,
            Currentowner: "Alrosa"
        },
        {
            Carats: 215,
            Name: null,
            Country: "Lesotho",
            Mine: "Mothae Mine",
            Date: 2021,
            Currentowner: null
        }
    ];

    const roughDiamonds = data.filter(diamond => diamond.category === 'rough');

    return (
        <>
            <div className='r-p1'>
                <h2>ROUGH DIAMONDS</h2>
                <h5>Uncut,unique and natural rough diamonds</h5>
                <button><Link to='/product' className='link-btn'>Shop rough diamonds</Link></button>
            </div>

            <div className="r-p2">
                <div className="r-p2-p1">
                    <img src={i1} alt="" />
                    <h3>KIMBERLEY PROCESS</h3>
                    <p>The Kimberley Process was first put in place in South Africa in May of 2000. In fact, it is named for the Kimberley mine located there. It is a way devised by diamond producing states to attempt to halt trafficking in conflict or “blood” diamonds. It currently aims to monitor and control the international trade of rough diamonds globally.</p>
                </div>
                <div className="r-p2-p1">
                    <img src={i2} alt="" />
                    <h3>KIMBERLY COMPLIANT COUNTRIES</h3>
                    <p>At present time there are many Kimberley Compliant countries, but still several that are not. We can not ship to or from those nations nor will we purchase or sell stones mined in any non compliant nation.</p>
                </div>
                <div className="r-p2-p1">
                    <img src={i3} alt="" />
                    <h3>ABOUT RD</h3>
                    <p>Rough Diamond World is a sixth generation diamond importing company, but we are definitely not old fashioned.</p>
                </div>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />

            <div className="r-p3">
                <h1>List of largest rough diamonds</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Carats</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Mine</th>
                            <th>Date</th>
                            <th>Current Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {diamonddata.map((index) => (
                            <tr>
                                <td>{index.Carats}</td>
                                <td>{index.Name}</td>
                                <td>{index.Country}</td>
                                <td>{index.Mine}</td>
                                <td>{index.Date}</td>
                                <td>{index.Currentowner}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <img src={lineimg} alt="" style={{ height: '10vh', marginLeft: '38.5%', marginTop: '0vh' }} />

            <div className="r-p4">
                <div className="row row-cols-1 row-cols-md-5 g-3 r-row">
                    {roughDiamonds.map((diamond) => (
                        <div className="col r-col">
                            <div key={diamond.id} className="card r-card">
                                <img src={diamond.image} alt={diamond.title} className="r-image" />
                                <Link to='/product' className='link-text'><p>{diamond.title}</p></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Rough;
