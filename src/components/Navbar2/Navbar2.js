import React, { useState } from 'react'
import './Navbar2.css'
import { Link, useNavigate } from "react-router-dom"
const Navbar2 = () => {
    const [islistvisible, setislist] = useState(false);
    const navigate = useNavigate()
    const hovermouseenter = () => {
        setislist(true);
    }
    const hovermouseleave = () => {
        setislist(false);
    }
    const hoverchange = (e) => {
        e.preventDefault();
        if (islistvisible == true) setislist(false);
        else setislist(true);
    }
    return (
        <div className='navbar2' style={{ maxHeight: '70px', backgroundColor: 'black' }}>
            <div className="container" >
                <div className="wrapper flexitem">
                    {/* <a href="" style={{fontFamily:'Great Vibes', fontWeight:'600',fontSize:'30px',color:'#990a99'}}>Stylista</a> */}
                    <div className="left d-flex">
                        <ul className="flexitem" >
                            <li><Link to="/">Home</Link></li>
                            <li onMouseEnter={hovermouseenter} onMouseLeave={hovermouseleave} onClick={hoverchange}>
                                <a href="" id="1">Women
                                    <div className="icon-small">&nbsp;<i className="fa-solid fa-angle-down" style={{ transform: islistvisible ? 'scaleY(-1)' : '' }}></i></div>
                                </a>
                                {islistvisible && (<div className="list" id="1">
                                    <div className="container">
                                        <div className="wrapper">
                                            {/* <div className="flexcol">
                                                <div className="row">
                                                    <h4>Clothing</h4>
                                                    <ul>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Dresses</a></li>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Tops</a></li>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Jackets</a></li>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Pants & Capri</a></li>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Sweatshirts</a></li>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Shorts</a></li>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Swimmers</a></li>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Pajamas</a></li>
                                                        <li><a href={`/${btoa('Hair Care')}`}>Sweaters</a></li>
                                                    </ul>
                                                </div>
                                            </div> */}
                                            <div className="flexcol">
                                                <div className="row">
                                                    <h4>Jewellery</h4>
                                                    <ul>
                                                        <li><a href={`/${btoa('Bags & Purses')}`} onClick={() => window.location.href = `/${btoa('Bags & Purses')}`}>Bags & Purses</a></li>
                                                        <li><a href={`/${btoa('Necklace')}`} onClick={() => window.location.href = `/${btoa('Necklace')}`}>Necklaces</a></li>
                                                        <li><a href={`/${btoa('Ring')}`} onClick={() => window.location.href = `/${btoa('Ring')}`}>Ring</a></li>
                                                        <li><a href={`/${btoa('Earrings')}`} onClick={() => window.location.href = `/${btoa('Earrings')}`}>Earrings</a></li>
                                                        <li><a href={`/${btoa('Bracelet')}`} onClick={() => window.location.href = `/${btoa('Bracelet')}`}>Bracelets</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flexcol">
                                                <div className="row">
                                                    <h4>Beauty</h4>
                                                    <ul>
                                                        <li><a href={`/${btoa('Hair Care')}`} onClick={() => { window.location.href = `/${btoa('Hair Care')}`; }}>Hair Care</a></li>
                                                        <li><a href={`/${btoa('Skin Care')}`} onClick={() => { window.location.href = `/${btoa('Skin Care')}`; }}>Skin Care</a></li>
                                                        <li><a href={`/${btoa('Makeup')}`} onClick={() => { window.location.href = `/${btoa('Makeup')}`; }}>Makeup</a></li>
                                                        <li><a href={`/${btoa('Perfume')}`} onClick={() => { window.location.href = `/${btoa('Perfume')}`; }}>Perfumes & deos</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <div className="flexcol products">
                                                <div className="row">
                
                                                    <div className="text-content">
                                                        <h4>Most Wanted!</h4>
                                                        <a href="" className="primary-button">Order Now</a>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>)}
                            </li>
                            <li><a href="/menclothing">Men
                                <div className="icon-small"></div>
                            </a></li>
                            <li><a href={`/${btoa('Kidsclothing')}`}>Kids
                                <div className="icon-small"></div>
                            </a></li>
                            <li>
                                <a href={`/${btoa('Furniture')}`}>Furniture</a>
                            </li>
                            <li><a href={`/${btoa('Electronics')}`}>Electronics</a></li>
                            <li><a href="/topdeals">Top Deal</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2
