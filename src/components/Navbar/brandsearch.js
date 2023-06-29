import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import totalitems from '../products.json'
const Brandsearch = (props) => {
    const {brand}=props;
    const [filteredItems, setFilteredItems] = useState([]);
  
    useEffect(() => {
      const filteredItems = totalitems.products.filter((item) =>
        item.name.toLowerCase().includes(brand.toLowerCase())
      );
      setFilteredItems(filteredItems);
    }, [brand]);
  return (
    <div>
      <div style={{ padding: '2em' }}>
        <h3 style={{padding:'0.5em'}}>{brand}</h3>
        <div className="products-container" style={{display: 'grid',gridTemplateColumns: 'repeat(4, 1fr)',gridRowGap: '1em'}}>
          {filteredItems.map((product)=>(
              <Item item={product}  />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brandsearch
// useEffect(() => {
    //     const fetchData = async () => {
    //       const filteredItems = totalitems.products.filter(item =>
    //         item.name.toLowerCase().includes(brand.toLowerCase())
    //       );
    //       setItems(filteredItems);
    //       console.log(filteredItems)
    //     };
    //     fetchData();
    //   }, [brand]);
    //   const filteredItems = totalitems.products.filter((item) => {
    //     // Convert all parameters to lowercase for case-insensitive search
    //     const itemKeys = Object.keys(item);
    //     const searchTermLower = word.toLowerCase();

    //     for (let i = 0; i < itemKeys.length; i++) {
    //       const key = itemKeys[i];
    //       if (
    //         typeof item[key] === 'string' &&
    //         item[key].toLowerCase().includes(searchTermLower)
    //       ) {
    //         return true;
    //       }
    //     }

    //     return false;
    // });
