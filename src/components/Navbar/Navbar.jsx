import { useState, useEffect, useRef } from "react";
import useWindowSize from "../../utils/useWindowSize";
import logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-menu.svg";
import NavbarMenu from "./NavbarMenu";
import cart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";
import Cart from "../Cart/Cart";
import updateQuantity from "../../state/zustand";


const Navbar = () => {
  const { width } = useWindowSize();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartItem = updateQuantity((state) => state.cart[0]);
  const menuRef = useRef();
  const cartRef = useRef()
  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };
  const handleCartClick = () => {
    setIsCartVisible(!isCartVisible);
  };


  useEffect(() => {
    function handleClickOutside(event) {

      // Make the menu disappear if you click outside of it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }


    // Make the menu or cart disappear if you resize the screen
    function handleWindowResize() {
      setMenuVisible(false);
      setIsCartVisible(false);
    }


    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleWindowResize);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  return (
    <div className="navbar">
      <div className="navbar-container flex justify-between h-12  w-full / md:items-start md:border-b md:pt-0 md:relative md:h-20">
        <section className="navbar-menu-logo flex gap-6 py-5 px-5 items-center / md:gap-0 md:py-0 md:px-0 md:h-20">
          {width < 768 && (
            <img
              src={iconMenu}
              alt="Menu open"
              onClick={handleClick}
              className="cursor-pointer w-5"
            />
          )}
          <div className="navbar-logo">
            <img src={logo} alt="Sneakers Logo" className="pb-1" />
          </div>


          {isMenuVisible && <NavbarMenu menuRef={menuRef} handleClick={handleClick} />}
          {width > 768 && (
            <>
              <NavbarMenu />
            </>
          )}
        </section>

        <section className="navbar-cart-profile flex py-3 px-5 items-center gap-6 / md:px-0 md:h-full">
          <img
            src={cart}
            onClick={handleCartClick}
            alt="cart"
            className="w-6 cursor-pointer relative"
          />
          <span className="cartItemsNumber w-3 absolute top-2 px-2 right-16 flex justify-center items-center / md:top-6 md:right-14">
            {cartItem ? cartItem.quantity : ""}
          </span>
          <img
            src={avatar}
            alt="avatar"
            className="avatar transition-all duration-500 w-8 cursor-pointer / md:w-10"
          />

          {isCartVisible && (
            <>
              <Cart handleCartClick={handleCartClick} />
            </>
          )}
        </section>
      </div>
    </div>
  );
};


export default Navbar;



