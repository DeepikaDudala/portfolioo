import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function BlackLine() {
	return (
		<div className="black-line mx-3 mt-lg-5 p-5 rounded-2">
			<Row className="social-icons ">
				<Col md={3} className="text-center">
					<a
						href="#youtube"
						className="text-white fs-5 fw-semibold no-underline hover:underline"
					>
						YouTube
					</a>
				</Col>
				<Col md={3} className="text-center">
					<a
						href="#pinterest"
						className="text-white fs-5 fw-semibold no-underline hover:underline"
					>
						Pinterest
					</a>
				</Col>

				<Col md={3} className="text-center">
					<a
						href="#behance"
						className="text-white fs-5 fw-semibold no-underline hover:underline"
					>
						Behance
					</a>
				</Col>
				<Col md={3} className="text-center">
					<a
						href="#google"
						className="text-white fs-5 fw-semibold no-underline hover:underline"
					>
						Google
					</a>
				</Col>
			</Row>
		</div>
	);
}

export default BlackLine;
