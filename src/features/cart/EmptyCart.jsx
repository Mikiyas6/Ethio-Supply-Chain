import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Link
        className="text-white inline-block rounded-full bg-green-600  font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
        to="/menu"
      >
        &larr; Back to menu
      </Link>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some Items :)
      </p>
    </div>
  );
}

export default EmptyCart;
