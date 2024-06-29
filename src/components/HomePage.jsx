import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
			<Row className="justify-content-center align-items-center">
				<Col md={6}>
					<h1 className="text-3xl font-bold heading-text">
						Hello, I'm{' '}
						<div className="rounded-5 p-2">
							{screenSize === 'lg' ? 'Deepika Siva Sahithi' : 'Sahithi'}
						</div>
					</h1>
					<div className="justify-content-center align-items-center ms-lg-3 ps-lg-4">
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
							nunc aliquam tincidunt est non. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Lectus mattis nunc aliquam tincidunt est non.
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
