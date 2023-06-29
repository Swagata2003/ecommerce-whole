import React, { useState, useEffect } from 'react'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import totalitems from '../products.json';
const Category = (props) => {
    const { category} = props;
    const filteredProducts = totalitems.products.filter((product) => product.category === atob(category) || product.type===atob(category));
    const [shuffledItems, setShuffledItems] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    useEffect(() => {
        const storedItems = localStorage.getItem(`${category}shuffled`);
        if (storedItems) {
            setShuffledItems(JSON.parse(storedItems))
        }
        else {
            const shuffled = shuffleArray(filteredProducts);
            setShuffledItems(shuffled);
            localStorage.setItem(`${category}shuffled`, JSON.stringify(shuffled));
        }
    }, [])
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    return (
        <div style={{ padding: '2em' }}>
            <h3 style={{ padding: '0.5em' }}>{atob(category)}</h3>
            <div className="products-container">
                {shuffledItems.slice(0, showAll ? shuffledItems.length : 8)
                    .map(product => (
                        <Item item={product} />
                    ))}
                {!showAll && shuffledItems.length > 8 && (
                    <Link
                        className="show-all-button"
                        onClick={toggleShowAll}
                        style={{ fontSize: '1.5em' }}
                        to={`/${category}`}
                    >
                        &gt;&gt;
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Category
