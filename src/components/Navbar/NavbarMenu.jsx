import { NavbarEls } from "./config";
import navbarIconClose from "../../assets/icon-close.svg";
import { motion, AnimatePresence } from "framer-motion";


const NavbarMenu = ({ handleClick, menuRef }) => {

  return (
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="navbar-menu w-1/2 h-screen absolute left-0 top-0 px-6 py-5 md:flex md:bg-transparent md:w-auto md:relative md:h-full md:py-0 md:items-center z-30">
        <img
          src={navbarIconClose}
          alt="close icon"
          onClick={handleClick}
          className="close-icon cursor-pointer w-5 / md:hidden"
        />
        <div className="navbar-items my-10 md:flex gap-5 md:text-xs md:my-0">
          {NavbarEls.map((navbarEl) => (
            <div
              key={navbarEl.id}
              className="navbar-item my-5 font-bold md:font-normal  md:h-full md:m-0"
            >
              <a href={navbarEl.link}>{navbarEl.title}</a>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};


export default NavbarMenu;