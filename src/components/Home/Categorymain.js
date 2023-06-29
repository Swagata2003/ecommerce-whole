import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import Loader from '../Loader';
const Categorymain = (props) => {
  const { category } = props;
  const [shuffledItems, setShuffledItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedItems = localStorage.getItem(`${btoa(category)}shuffled`);
    setShuffledItems(JSON.parse(storedItems))
    setIsLoading(false);
  }, [])
  return (
    <div>
      {isLoading ?(
        <Loader />
      ):(
      <div style={{ padding: '2em' }}>
        <h3 style={{ padding: '0.5em' }}>{category}</h3>
        <div className="products-container" style={{ display: 'grid', gridRowGap: '1em' }}>
          {shuffledItems.map((product) => (
            <Item item={product} />
          ))}
        </div>
      </div>
      )}
    </div>
  )
}

export default Categorymain
