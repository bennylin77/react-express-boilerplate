import React from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
		const {authenticated} = this.props.auth
		const navItem = [];
		if(authenticated){
				navItem.push(<NavItem key="images"><Link className="nav-link" to="/videos">Videos</Link></NavItem>)
        navItem.push(<NavItem key="signout"><NavLink href="#" onClick={this.handleSignOutClick}>Sign out</NavLink></NavItem>)
    }else{
	      navItem.push(<NavItem key="signin"><Link className="nav-link" to="/auth/signin">Sign in</Link></NavItem>)
	      navItem.push(<NavItem key="signup"><Link className="nav-link" to="/auth/signup">Sign up</Link></NavItem>)
	  }

    return (
        <Navbar color="light" light expand="md">
					<Link to="/" className="navbar-brand">React Express</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
							{navItem}
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
export default Menu;
