import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, description, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  // The getCurrentQuantityById function is called with id and returns a selector function that uses that id somewhere in its code
  // The selector function is invoked by useSelector with the Redux store as its argument.
  // Then the useSelector extracts the desired value
  //  The extracted value is then assigned to a variable
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      description,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="gap flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-44 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-2.5">
        <p className="font-medium text-white">{name}</p>
        <p className="text-sm mt-4 font-bold capitalize italic text-white">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm text-white">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm text-white font-medium uppercase">Sold out</p>
          )}
          {!soldOut && !isInCart && (
            <div>
              <Button onClick={handleAddToCart} type="small">
                Add to Cart
              </Button>
            </div>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                currentQuantity={currentQuantity}
                pizzaId={id}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
