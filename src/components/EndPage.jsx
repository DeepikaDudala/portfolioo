import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function EndPage() {
	return (
		<div className="footer bg-black py-3">
			<Container>
				<Row className="mb-4 justify-content-center">
					<Col xs="auto">
						<a href="mailto:sahithidudala@gmail.com" className="text-white me-4">
							<AiOutlineMail size={24} />
						</a>
					</Col>
					<Col xs="auto">
						<a
							href="https://www.instagram.com/_sahithiprasad/"
							className="text-white me-4"
						>
							<FaInstagram size={24} />
						</a>
					</Col>
					<Col xs="auto">
						<a
							href="https://www.linkedin.com/in/deepika-siva-sahithi-dudala/"
							className="text-white"
						>
							<FaLinkedin size={24} />
						</a>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs="auto" className="text-center text-white align-text-bottom">
						<h1>Thank You!</h1>
						<p className="m-0">
							© 2024 Deepika Siva Sahithi Dudala. All rights reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default EndPage;
