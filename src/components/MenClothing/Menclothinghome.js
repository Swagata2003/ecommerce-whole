import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import totalitems from '../products.json'
import Item from '../Item/Item';
const Menclothinghome = () => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = totalitems.products.filter((product) => product.type === "Menclothing");
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div style={{ padding: '2em' }}>
      <h3 style={{padding:'0.5em'}}>Men's Clothing</h3>
      <div className="products-container">
        {displayedProducts.map((product)=>(
            <Item item={product}/>
        ))}
        {!showAll && filteredProducts.length > 8 && (
          <Link className="show-all-button" onClick={toggleShowAll} style={{fontSize:'1.5em'}} to="/menclothing" >
           &gt;&gt;
        </Link>
        )}
      </div>
    </div>
  )
}

export default Menclothinghome
