import React, { useState, useEffect, useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { findRenderedComponentWithType } from 'react-dom/test-utils'
import Login from '../Login/Login'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { logincreator } from '../state';
import totalitems from '../products.json'
import Search from './Search'
import itemContext from '../../context/items/ItemContext'
const Navbar = () => {
    const [islistvisible, setislist] = useState(false);
    const [isaccount, setaccount] = useState(false);
    const [searchword, setword] = useState('');
    const [items, setItems] = useState([])
    const [wishitems, setwishitem] = useState([])
    const context = useContext(itemContext);
    const { getitems, getwishitems} = context;
    const loggedin = useSelector(state => state.loggedin);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { removelocalstorage } = bindActionCreators(logincreator, dispatch);
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

    const handleaccount = () => {
        if (isaccount) {
            setaccount(false)
        }
        else {
            setaccount(true)
        }
    }
    const onChange = (e) => {
        setword(e.target.value)
    }
    const handlesearchbar = (e) => {
        // e.preventDefault()
        if (searchword !== '') {
            localStorage.setItem('searchword', searchword)
            navigate(`/search`)
        }
    }
    useEffect(() => {
        const fetchItems = async () => {
            const fetchedItems = await getitems();
            setItems(fetchedItems);
        };

        if (loggedin) fetchItems();
    }, [items]);
    useEffect(() => {
        const wishlistfunc = async () => {
            const wishlist = await getwishitems();
            setwishitem(wishlist);
        };

        if (loggedin) wishlistfunc();
    }, [wishitems]);
    const logout = (e) => {
        e.preventDefault()
        setaccount(!isaccount);
        localStorage.removeItem('token');
        removelocalstorage();
        navigate("/");

    }
    const handlecart = (e) => {
        // e.preventDefault();
        if (loggedin) navigate('/api/cart');
        else {
            alert('You need to login first');
            navigate('/api/auth/login')
        }
    }
    const handlewish = (e) => {
        e.preventDefault()
        if (loggedin) navigate('/api/account/wishlist');
        else {
            alert('You need to login first');
            navigate('/api/auth/login')
        }
    }
    const handlebrand = (e, str) => {

        // e.preventDefault();
        const brand = str;
        localStorage.setItem('brand', brand);
        navigate("/brandsearch")
    }

    return (
        <div className='navbar1' style={{ backgroundColor: '#ffdedb' }}>
            <div className="container" >

                <div className="wrapper flexitem" style={{ color: 'black' }}>
                    <a href="" onClick={(e) => handlebrand(e,)} id="name" style={{ fontFamily: 'Great Vibes', fontWeight: '600', color: '#990a99' }}>Stylista</a>
                    <div className="left d-flex">
                        <ul className="flexitem">
                            <li><a href="https://girlwithcurves.com/" target='_blank'>Blogs</a></li>
                            <li onMouseEnter={hovermouseenter} onMouseLeave={hovermouseleave} onClick={hoverchange}>
                                <a href="">Brands
                                    <div className="icon-small"><i className="fa-solid fa-angle-down" style={{ transform: islistvisible ? 'scaleY(-1)' : '' }}></i></div>
                                </a>

                                {islistvisible && (<div className="flexcol">
                                    <div className="row" style={{padding:'0em'}}>
                                        <h4 style={{padding:'0.5em 1em'}}>Top Brands</h4>
                                        <ul className="women-brands" style={{lineHeight:'2em',padding:'0em'}}>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('TRESemme')}`; }}>TRESemme</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('mamaEarth')}`; }}>mamaEarth</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('Maybelline New York')}`; }}>Maybelline New York</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('Lakmé')}`; }}>Lakmé</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa("L'Oréal Paris")}`; }}>L'Oréal Paris</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('Samsung')}`; }}>Samsung</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('hp')}`; }}>hp</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('Asus')}`; }}>Asus</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('Apple')}`; }}>Apple</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('lenovo')}`; }}>Lenovo</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('Acer')}`; }}>Acer</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('Whirlpool')}`; }}>Whirlpool</a></li>
                                            <li><a href="" style={{padding:'0em 2em'}} onClick={() => { window.location.href = `/${btoa('Adidas')}`; }}>ADIDAS</a></li>
                                            {/* <li><a href="" onClick={(e)=>handlebrand(e,'')}>LG</a></li> */}
                                        </ul>
                                    </div>
                                </div>)}
                            </li>
                            {/* <li><a href="" onClick={() => { navigate("/") }}>Categories</a></li> */}
                            <li><a href="https://www.grazia.co.in/beauty/a-list-of-beauty-tips-for-the-face-8839.html" target='_blank'>BeautyAdvice</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className="flexitem" style={{paddingLeft:'0.75em'}}>
                            <li><form role="search" className="container-fluid" onSubmit={handlesearchbar}>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                                    <input type="text" className="form-control" placeholder="Search for products..." aria-label="Username" onChange={onChange} aria-describedby="basic-addon1" />
                                </div>
                            </form>
                            </li>
                            <li>
                                {/* login */}
                                {!loggedin && (<Link to="api/auth/login">
                                    <i name="login" className="fa-solid fa-arrow-right-to-bracket icon-large"></i>
                                </Link>)}
                                {/* account*/}
                                {loggedin && (<a>
                                    <span name="accountlogo" className="accountfirstletter" onClick={handleaccount} style={{ backgroundColor: 'blue', alignItems: 'center', borderRadius: '50%', color: 'white', padding: '5px', cursor: 'pointer' }}>
                                        <span style={{ position: 'absolute'}}>{localStorage.getItem('name')?.charAt(0)?.toUpperCase()}</span>
                                    </span>
                                </a>)}
                                {isaccount && loggedin && (<div className="flexcol" >
                                    <ul className="account" style={{ backgroundColor: 'pink', zIndex: '2', padding: '0em', top: '3.8em', right: '9em' }}>
                                        <li><Link onClick={() => { setaccount(!isaccount) }} to="/api/account">My profile</Link></li>
                                        <li><Link onClick={() => { setaccount(!isaccount) }} to="/api/account/orders">My Orders</Link></li>
                                        <li><Link onClick={() => { setaccount(!isaccount) }} to="/api/account/wishlist">Wishlist</Link></li>
                                        <li><Link onClick={() => { setaccount(!isaccount) }} to="/api/cart">Cart</ Link></li>
                                        <li><Link onClick={logout}>Log out</Link></li>
                                    </ul>

                                </div>)}

                            </li>
                            <li>
                                <a onClick={handlewish}>
                                    <i className="fa-sharp fa-solid fa-heart icon-large" style={{cursor:'pointer'}}></i>
                                    <span className="wishlistbadge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{  }}>
                                        {loggedin ? wishitems.length : ''}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-solid fa-cart-shopping icon-large" onClick={handlecart}></i>
                                    <span className="cartbadge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{  }}>
                                        {loggedin ? items.length : ''}
                                    </span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
