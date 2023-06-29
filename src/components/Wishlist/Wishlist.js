import React from 'react'
import  { useState, useContext, useEffect } from 'react';
import itemContext from '../../context/items/ItemContext';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const context = useContext(itemContext);
    const { addwishitem,getwishitems,deletewishitem,searchwishitem  } = context;
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    useEffect(() => {

        const fetchItems = async () => {
            const fetchedItems = await getwishitems();
            setItems(fetchedItems);
        };

        fetchItems();
    }, []);

    const removeItem = (e, item) => {
        e.preventDefault();
        const updatedItems = items.filter((i) => i.item.name !== item.item.name);
        setItems(updatedItems);
        deletewishitem(item.item);
    };

    return (
        <div style={{ backgroundColor: 'rgb(235,235,235)', minHeight: '86vh',alignItems:'center',justifyContent:'center',display:'flex'}}>
            {items.length === 0 && (
                <div className='card' style={{ backgroundColor: '#f7f7f7',display:'inline-flex',padding:'3em'}}>
                    <img src="https://printmont.com/img/no_wish_list.png" alt="" />
                    <button className='btn btn-primary'  style={{ width: '12em',marginLeft:'8em' }} onClick={() => { navigate('/') }}>Continue Shopping</button>
                </div>
            )}
            {items.length > 0 && (
                <div className="main d-flex" style={{ gap: '1em' ,justifyContent: 'center',paddingTop: '0em'}}>
                    <div className="card cart-items px-4 py-4 " style={{marginTop:'2em',marginBottom:'2em'}}>
                        {items.map((item) => (
                            <Link to={`/item/${btoa(item.item.name)}`} key={btoa(item.item.name)} >
                            <div className="card mb-3" style={{ width:'50em',padding: '1em', borderRadius: '0%' }}>
                                <div className="row g-0">
                                    <div className="col-md-2">
                                        <div className="card" style={{ width: '12em', borderColor: 'white' }}>
                                            <img src={item.item.imageurl} style={{ height: '10em', objectFit: 'contain' }} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-md-8" style={{paddingLeft:'4em'}}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.item.name.length >= 50 ? item.item.name.slice(0, 50) + '...' : item.item.name}</h5>
                                            <h6 style={{fontWeight:300}}>{item.item.description.length >= 50 ? item.item.description.slice(0, 50) + '...' : item.item.description}</h6>
                                            <div className="price" style={{ fontSize: '1.25em' }}>
                                            <h5><span className="badge bg-success my-2 mx-2">{item.item.rating}&nbsp;<i className="fa-sharp fa-solid fa-star" style={{ fontSize: '0.75rem' }}></i></span></h5>
                                                <span style={{ fontWeight: '600' }}>Rs&nbsp;{item.item.newprice}</span>&nbsp;
                                                <span className="old-price" style={{ textDecoration: 'line-through' }}>{item.item.oldprice}</span>&nbsp;
                                                <span style={{ color: 'green', fontWeight: '600' }}>{((item.item.oldprice - item.item.newprice) / item.item.oldprice * 100).toFixed(2)}% off
                                                </span>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                    <i className="fa-sharp fa-solid fa-trash my-5 ms-5" style={{fontSize:'1.5em',cursor:'pointer'}}  onClick={(e) => removeItem(e, item)}></i>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))}
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Wishlist
