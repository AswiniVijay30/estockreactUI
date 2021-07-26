import React from 'react'
import { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import StockContainer from '../container/StockContainer'
import CompanyAndDateInfo from './CompanyAndDateInfo';

class Header extends Component  {
render(){
  return (
<header>
<Navbar bg="primary" expand="lg" variant="dark">
<span className="material-icons">
trending_up
</span>
  <Navbar.Brand href="#">E-Stock Market</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Nav.Link href="#" className="text-light w-25">Add Company</Nav.Link>
 
</Navbar>
</header>

  )
}                
}
export default Header;