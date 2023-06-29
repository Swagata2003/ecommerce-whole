import React from 'react'
import Item from '../Item/Item'
import totalitems from '../products.json'
const womentype = (props) => {
    const { type} = props;
    const filteredProducts = totalitems.products.filter((product) => product.type===type);
    
    return (
        <div style={{ padding: '2em' }}>
        <h3 style={{padding:'0.5em'}}>{type}</h3>
        <div className="products-container" style={{display: 'grid',gridTemplateColumns: 'repeat(4, 1fr)',gridRowGap: '1em'}}>
          {filteredProducts.map((product)=>(
              <Item item={product} />
          ))}
        </div>
      </div>
  )
}

export default womentype
