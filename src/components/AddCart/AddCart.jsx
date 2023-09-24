import minus from "../../assets/icon-minus.svg";
import plus from "../../assets/icon-plus.svg";
import { useState } from "react";
import updateQuantity from "../../state/zustand";

const AddCart = () => {
  const addItem = updateQuantity((state) => state.addItem);

  const [quantity, setQuantity] = useState(0);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity === 0) {
      return quantity;
    }
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    addItem(quantity);
    setQuantity(0);
  };

  return (
    <div className="flex-col flex justify-center items-center gap-3 pt-3 / md:flex-row md:pt-6">
      <div className="quantity flex items-center justify-between px-5 rounded-2xl py-3 w-full shadow / md:w-44 md:max-w-xs">
        <img
          src={minus}
          alt="minus"
          className="cursor-pointer"
          onClick={handleDecrease}
        />
        <div className="font-bold">{quantity}</div>
        <img
          src={plus}
          alt="plus"
          className="cursor-pointer"
          onClick={handleIncrease}
        />
      </div>
      <button
        className="cart-button flex justify-center rounded-lg py-3 pt-3 w-full shadow-md / "
        onClick={quantity > 0 ? addToCart : null}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddCart;
