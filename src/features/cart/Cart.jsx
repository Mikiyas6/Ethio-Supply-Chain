import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { getUsername } from "../user/userSlice";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <Link
        className="text-white inline-block rounded-full bg-green-600  font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
        to="/menu"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y-2 divide-stone-200 border-b">
        {cart.map((pizza) => (
          <CartItem pizza={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="secondary" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
