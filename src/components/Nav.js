import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = (props) => {
	return (
		<StyledNav>
			<h1>
				<Link to="/" id="logo">
					Capture
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">1. About Us</Link>
				</li>
				<li>
					<Link to="/work">2. Our Work</Link>
				</li>
				<li>
					<Link to="/contact">3. Contact Us</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	margin: auto;
	background-color: #282828;
	position: sticky;
	top: 0;
	z-index: 5;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
		li {
			padding-left: 10rem;
			position: relative;
		}
	}
	#logo {
		font-size: 1.5rem;
		font-family: "Lobster", cursive;
		font-weight: lighter;
	}
	@media screen and (max-width: 720px) {
		flex-direction: column;
		padding: 1rem;
		ul {
			justify-content: space-around;
			width: 100%;
			li {
				padding: 0 1rem;
			}
		}
	}
`;
export default Nav;
