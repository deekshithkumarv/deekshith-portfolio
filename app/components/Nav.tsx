import { NavLink, useLocation } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "~/data/animationConfig";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <>
      {/* <NavLink to="/" className={activeStyleCallback}>
        Home
      </NavLink> */}
    
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      
      
    </>
  );
};

export default Nav;
