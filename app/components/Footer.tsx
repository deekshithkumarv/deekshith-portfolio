import { NavLink } from "@remix-run/react";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-primary font-bold" : "text-gray-700 hover:text-primary";

export const Footer = () => {
  return (
  <>
  </>
  );
};

export default Footer;
