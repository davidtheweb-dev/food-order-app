import { useContext } from 'react';

import Button from './UI/Button.jsx';
import logoImg from './../assets/logo.jpg';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalItemsNumber, item) => {
    return totalItemsNumber + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Restaurant logo" />
        <h1>Food order</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
