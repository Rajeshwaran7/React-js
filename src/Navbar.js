import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavElement.js";

const Navbar = () => {
return (
	<>
   	<Nav>
		<NavMenu>
		<header id ="he1"><h2>Trainee Details</h2></header>
		<NavLink to="/" activeStyle>
			<button>CREATE</button>
		</NavLink>
		<NavLink to="/table" activeStyle>
		<button>SHOW</button>
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
}

export default Navbar;
