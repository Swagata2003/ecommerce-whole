import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Loader from '../Loader';

const Topdealsmain = () => {
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let storedProducts = localStorage.getItem('topdeals');
    storedProducts = JSON.parse(storedProducts);
    setShuffledProducts(storedProducts);
    setIsLoading(false); // Set isLoading to false after the data is loaded
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader /> // Display the loader while the page is loading
      ) : (
        <div style={{ padding: '2em' }}>
          <h3 style={{ padding: '0.5em' }}>TOP DEALS</h3>
          <div className="item-container">
            {shuffledProducts.map((product) => (
              <Item key={product.name} item={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Topdealsmain;
