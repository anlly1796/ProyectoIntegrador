import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 
import { SearchProduct } from './SearchProduct';



export const MyNavbar = () => {
  return (

    <nav className="navbar navbar-expand-lg ">

      <Link
        className="navbar-brand "
        to="/">
        <img src="src\assets\LogoMusichouse.svg" alt="Logo" width="110" height="110" className="logo" />
        <p className="slogan">Find Your Tune</p>

      </Link>

      {/* Botón de menú hamburguesa */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Contenido colapsable del navbar */}
      <div className="collapse navbar-collapse" id="navbarContent">



        <SearchProduct />



        <NavLink
          className="nav-item nav-link"
          to="/register"
        >
          <button className="btn btn-outline" type="submit">Register Product</button>
        </NavLink>
      </div>




    </nav>
  )
}

