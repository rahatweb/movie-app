import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <NavbarComponent>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <p>MovieZone</p>
          </Link>
        
    </NavbarComponent>
  );
};

const NavbarComponent = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2020ff;
  color: #fff;
  padding: 1rem;
  box-shadow: 5px 5px 10px gray;
  position: sticky;
  top: 0;
  z-index: 4444;
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    p{
        font-size: 2rem;
        color: #fff;
        padding-left: 0.5rem;
    }
  }
`;

export default Navbar;
