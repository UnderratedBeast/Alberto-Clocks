import React from 'react';
import { useCart } from '../data/CartContext';
import { Button } from 'react-bootstrap';
import CustomAlert from '../customs/CustomAlert'; // Assuming CustomAlert is in the same directory

function Checkout() {
  const { cartItems, removeFromCart } = useCart(); // Ensure you are using cartItems and removeFromCart
  const [alertMessage, setAlertMessage] = React.useState('');

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setAlertMessage('Item has been removed from your cart.'); // Set alert message
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h4>Items in your cart:</h4>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
                <span>${item.price.toFixed(2)}</span>
                <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total: ${calculateTotal()}</h4>
          <Button variant="success" className="mt-3">Proceed to Payment</Button>
        </div>
      )}
      {alertMessage && <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />}
    </div>
  );
}

export default Checkout;
