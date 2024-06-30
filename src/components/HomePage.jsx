import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';

const HomePage = () => {
	const [screenSize, setScreenSize] = useState(''); // State to track screen size

	// Function to update screen size state
	const updateScreenSize = () => {
		if (window.innerWidth >= 1024) {
			setScreenSize('lg');
		} else {
			setScreenSize('md'); // Default to 'md' for smaller screens
		}
	};

	// Effect to update screen size on mount and resize
	useEffect(() => {
		updateScreenSize(); // Initial check
		window.addEventListener('resize', updateScreenSize); // Listen to window resize
		return () => {
			window.removeEventListener('resize', updateScreenSize); // Cleanup
		};
	}, []);

	return (
		<Container className="text-center home-page">
			<Row className="justify-content-center align-items-center ms-4">
				<Col md={6}>
					<h1 className="text-3xl font-bold heading-text">
						Hello, I'm{' '}
						<div className="rounded-5 p-2">
							{screenSize !== 'lg' ? (
								<ReactTyped
									strings={['Sahithi']}
									typeSpeed={90}
									backSpeed={50}
									cursorChar=" !"
									loop
								/>
							) : (
								<ReactTyped
									strings={['Deepika Siva Sahithi ', 'a FullStack Developer']}
									typeSpeed={60}
									backSpeed={50}
									cursorChar=" !"
									loop
								/>
							)}
						</div>
					</h1>
					<div className="justify-content-center align-items-center ms-lg-3 ps-lg-4">
						<span className="">
							passionate about learning and driven by challenges. Proficient in Java
							and Python, with a robust background in full-stack development. I enjoy
							exploring new technologies to expand my skills.
						</span>
					</div>
					<div className="mt-4">
						<Button variant="dark" className="m-3 p-2">
							Get in touch
						</Button>
						<Button variant="outline-dark m-3 p-2">My story</Button>
					</div>
				</Col>
				<Col md={5}>
					<div className="profile-picture bg-cover bg-center rounded-full mx-auto mt-4"></div>
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
