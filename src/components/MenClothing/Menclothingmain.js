import React from 'react'
import totalitems from '../products.json'
import Item from '../Item/Item';

const Menclothingmain = () => {
    const filteredProducts = totalitems.products.filter((product) => product.type === "Menclothing");
    return (
      <div style={{ padding: '2em' }}>
        <h3 style={{padding:'0.5em'}}>Men's Clothing</h3>
        <div className="products-container" style={{display: 'grid',gridRowGap: '1em'}}>
          {filteredProducts.map((product)=>(
              <Item item={product} />
          ))}
        </div>
      </div>
    )
}

export default Menclothingmain
