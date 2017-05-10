import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';

class NavBar extends Component {
  render(){
    return (
		<Navbar inverse>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="http://lubelle.github.io/LS-Pro-React-I">React App - Random Quote Machine</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem eventKey={1} href="http://lubelle.github.io/LS-Pro-React-I">Home</NavItem>
					<NavItem eventKey={2} href="https://github.com/lubelle/LS-Pro-React-I">GitHub</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
    );
  }
}

export default NavBar;
