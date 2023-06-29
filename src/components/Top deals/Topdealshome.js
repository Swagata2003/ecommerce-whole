import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import totalitems from '../products.json';
import Item from '../Item/Item';
import './Topdeals.css'

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Topdeals = () => {
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    let storedProducts = localStorage.getItem('topdeals');
    if (storedProducts) {
      storedProducts = JSON.parse(storedProducts);
      setShuffledProducts(storedProducts);
    } else {
      // Filter products with discount > 40
      const filteredProducts = totalitems.products.filter(
        (product) => ((product.oldprice - product.newprice) / product.oldprice) * 100 > 35
      );

      // Shuffle the filtered products
      const shuffled = shuffleArray(filteredProducts);

      // Store shuffled products in localStorage
      localStorage.setItem('topdeals', JSON.stringify(shuffled));

      setShuffledProducts(shuffled);
    }
  }, []); // Empty dependency array to run the effect only once

  

  return (
    <div style={{ padding: '2em' }}>
      <h3 style={{padding:'0.5em'}}>TOP DEALS</h3>
      <div className="products-container">
        {shuffledProducts.slice(0, showAll ? shuffledProducts.length : 8).map((product) => (
          <Item item={product}/>
        ))}
        {!showAll && shuffledProducts.length > 8 && (
          <Link className="show-all-button" onClick={toggleShowAll} style={{fontSize:'1.5em'}} to="/topdeals" >
           &gt;&gt;
        </Link>
        )}
      </div>
    </div>
  );
};

export default Topdeals;
