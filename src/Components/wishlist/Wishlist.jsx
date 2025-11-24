import React from 'react';
import { useCart } from '../data/CartContext';
import { Button } from 'react-bootstrap';

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useCart();

  return (
    <div className="container mt-5">
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          <h4 style={{marginTop:"30px"}}>Items in your wishlist:</h4>
          <ul className="list-group">
            {wishlistItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
                <Button variant="primary" style={{backgroundColor:"rgb(85, 37, 4)", border:"1px solid rgb(84,27,25)"}} onClick={() => removeFromWishlist(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>
          <p>{wishlistItems.length} items in your wishlist</p>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
