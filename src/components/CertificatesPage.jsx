import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import java from '../assets/java.png';
import fullstack from '../assets/fullstack.png';
import ciscopy from '../assets/ciscopy.png';
import linux from '../assets/linux.png';
import genai from '../assets/genai.png';

const certificates = [
	{
		id: 1,
		image: fullstack,
	},
	{
		id: 2,
		image: java,
	},
	{ id: 3, image: ciscopy },
	{ id: 4, image: linux },
	{ id: 5, image: genai },
];

function CertificatesPage() {
	return (
		<div id="certificate">
			<Container className="mt-5 cert-page">
				<Row className="my-3 ms-3 me-5 justify-content-end">
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
				<Row className="mt-3 justify-content-center">
					<Col lg={4} className="my-4 d-flex align-items-center justify-content-center">
						<p className="text-center">
							Here are some certifications I've completed, showcasing my achievements
							and commitment to continuous learning. These certificates reflect my
							dedication to expanding skills and knowledge in relevant fields.
						</p>
					</Col>
					<Col lg={7} className="mb-4">
						<Carousel>
							{certificates.map((certificate) => (
								<Carousel.Item key={certificate.id}>
									<img
										className="d-block mx-auto"
										src={certificate.image}
										alt={`Certificate ${certificate.id}`}
										style={{
											width: '400px',
											height: '300px',
											objectFit: 'cover',
										}}
									/>
								</Carousel.Item>
							))}
						</Carousel>
					</Col>
				</Row>
			</Container>
			<br />
			<br />
			<div className="custom-hr m-5">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
}

export default CertificatesPage;
