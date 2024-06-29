import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

const NavigationBar = () => {
	return (
		<Navbar className="custom-navbar" expand="xl">
			<Container>
				<Navbar.Brand className=" fs-4 danfo-head " style={{ marginInlineEnd: '85px' }}>
					D²S²
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<FaBars />
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#portfolio">Portfolio</Nav.Link>
						<Nav.Link href="#pricing">Projects</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
