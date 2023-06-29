import React,{useEffect, useState} from 'react'
import totalitems from '../products.json'
import Item from '../Item/Item';
import seedrandom from 'seedrandom';
const Search = () => {
    const word = localStorage.getItem('searchword');

    const filteredItems = totalitems.products.filter((item) => {
        // Convert all parameters to lowercase for case-insensitive search
        const itemKeys = Object.keys(item);
        const searchTermLower = word.toLowerCase();

        for (let i = 0; i < itemKeys.length; i++) {
          const key = itemKeys[i];
          if (
            typeof item[key] === 'string' &&
            item[key].toLowerCase().includes(searchTermLower)
          ) {
            return true;
          }
        }

        return false;
    });
    const shuffleArrayWithSeed = (array, seed) => {
        const shuffledArray = [...array];
        const rng = seedrandom(seed); // Create a seeded random number generator
      
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(rng() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };
    const shuffledArray=shuffleArrayWithSeed(filteredItems,123)
   
    return (
        <>
        {shuffledArray.length === 0 ? (
            <div style={{ padding: '7em 35em' }}>
              <img src="https://saferoomdesigns.com/wp-content/uploads/2021/06/item_no.png" alt="" />
            </div>
          ) : (
            <div style={{ padding: '2em' }}>
              <h2 style={{ paddingBottom: '0.25em' }}>Search Results:</h2>
              <div className="products-container" style={{ display: 'grid', gridRowGap: '1em' }}>
                {shuffledArray.map((item) => (
                  <Item item={item} key={item.id} />
                ))}
              </div>
            </div>
          )}
      </>
    );
  };
  
  export default Search;
  