import React from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Menu.css';

class Menu extends React.Component {
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
	render() {
    return (
        <Navbar color="light" light expand="md">
					<Link to="/" className="navbar-brand">React Express</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">Home</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
export default Menu;
