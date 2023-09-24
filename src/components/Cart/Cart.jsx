import bin from "../../assets/icon-delete.svg";
import updateQuantity from "../../state/zustand";
import thumb1 from "../../assets/image-product-1-thumbnail.jpg";
import { motion, AnimatePresence } from "framer-motion";
import closeIcon from "../../assets/icon-close.svg"


const Cart = ({ handleCartClick }) => {
  const cart = updateQuantity((state) => state.cart);
  const deleteItems = updateQuantity((state) => state.deleteItems);



  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0, y: -20 }}
        animate={{ opacity: 1, height: 240, y: 0 }}
        exit={{ opacity: 0, height: 0, y: -20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="cart max-w-md w-11/12 z-20 absolute flex-col top-24 left-4 rounded-lg pb-6 shadow-md / md:w-80 md:right-0 md:left-auto md:top-16"
      >
        <div className="cart-title w-full flex items-center justify-between">
          <h3 className="mt-3 pb-5 ml-4 font-bold">Cart</h3>
          <img src={closeIcon} className="mr-4 cursor-pointer" alt="Close Icon" onClick={handleCartClick} />
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="product-card w-11/12 m-auto flex-col justify-between items-center"
            >
              <div className="flex justify-between items-center">
                <div className="w-14">
                  <img
                    className="rounded shadow"
                    src={thumb1}
                    alt="product thumbnail"
                  />
                </div>
                <div className="product-info-cart my-8">
                  <h3 className="text-sm">Fall Limited Edition Sneakers</h3>
                  <h4>
                    $125.00 x {item.quantity}
                    <span className="font-bold ml-3">${125 * item.quantity}</span>
                  </h4>
                </div>
                <div>
                  <img
                    src={bin}
                    alt="delete"
                    className="cursor-pointer"
                    onClick={() => deleteItems(index)}
                  ></img>
                </div>
              </div>
              <div className="m-auto">
                <button className="checkout-button w-full px-10 py-3 rounded-lg shadow-md">
                  Checkout
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart p-10 py-16 flex justify-center font-bold">
            <h1>Your cart is empty</h1>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};


export default Cart;



