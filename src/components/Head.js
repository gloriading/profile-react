import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


export default class Head extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <div className="Head-container">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">glorious react</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">aboutMe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">myProjects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">contactMe</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    )
  }
}
