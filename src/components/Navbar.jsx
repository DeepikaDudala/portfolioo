import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

const NavigationBar = () => {
	return (
		<Navbar className="custom-navbar" expand="xl">
			<Container>
				<Navbar.Brand className="fs-4 danfo-head" style={{ marginInlineEnd: '85px' }}>
					D²S²
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<FaBars />
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link as={Link} smooth to="#home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} smooth to="#intern">
							Work
						</Nav.Link>
						<Nav.Link as={Link} smooth to="/#projects">
							Projects
						</Nav.Link>
						<Nav.Link as={Link} smooth to="/#skills">
							Skills
						</Nav.Link>
						<Nav.Link as={Link} smooth to="/#contact">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
