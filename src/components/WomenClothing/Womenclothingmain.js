import React from 'react'
import totalitems from '../products.json'
import Item from '../Item/Item';

const Womenclothingmain = () => {
    const filteredProducts = totalitems.products.filter((product) => product.type === "Womenclothing");
    return (
      <div style={{ padding: '2em' }}>
        <h3 style={{padding:'0.5em'}}>Women's Clothing</h3>
        <div className="products-container" style={{display: 'grid',gridRowGap: '1em'}}>
          {filteredProducts.map((product)=>(
              <Item item={product} />
          ))}
        </div>
      </div>
    )
}

export default Womenclothingmain
