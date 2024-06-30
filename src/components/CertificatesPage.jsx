import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
// import './CertificatesPage.css'; // Import the CSS file
import logo from '../assets/logo.jpg'; // Ensure the path is correct

const certificates = [
	{ id: 1, title: 'Certificate 1', image: logo },
	{ id: 2, title: 'Certificate 2', image: logo },
	{ id: 3, title: 'Certificate 3', image: logo },
	{ id: 4, title: 'Certificate 4', image: logo },
	{ id: 5, title: 'Certificate 5', image: logo },
	{ id: 6, title: 'Certificate 6', image: logo },
	{ id: 7, title: 'Certificate 7', image: logo },
	{ id: 8, title: 'Certificate 8', image: logo },
];

function CertificatesPage() {
	return (
		<Container className="mt-5 cert-page">
			<Row className="my-3 ms-4 me-5 justify-content-end">
				<Col lg={6}>
					<h1 className="text-2xl font-bold heading-text lh-base">
						Course{' '}
						<span
							className="rounded-5 p-2 text-white"
							style={{ backgroundColor: '#006b7b' }}
						>
							Certifications
						</span>
					</h1>
				</Col>
			</Row>
			<Row className="mt-3">
				<Col lg={4} className="my-4 ms-5">
					{/* Placeholder for additional content */}
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, unde non
						ipsum modi, officia enim fugit asperiores quo error dolore nesciunt. Modi
						odit rem officiis autem molestiae cupiditate unde qui?
					</p>
				</Col>
				<Col lg={7} className="mb-4 ms-3">
					<Carousel>
						{certificates.map((certificate) => (
							<Carousel.Item key={certificate.id}>
								<img
									className="d-block mx-auto align-items-center"
									src={certificate.image}
									alt={certificate.title}
									style={{ width: '400px', height: '200px', objectFit: 'cover' }}
								/>
								<Carousel.Caption>
									<h3>{certificate.title}</h3>
								</Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default CertificatesPage;
