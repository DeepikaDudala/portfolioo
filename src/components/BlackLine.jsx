import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function BlackLine() {
	return (
		<div className="black-line mx-3 mt-lg-5 p-5 rounded-2">
			<Row className="social-icons ">
				<Col md={3} className="text-center">
					<a
						href="https://www.naukri.com/code360/profile/21K61A0538"
						className="text-white fs-5 fw-semibold no-underline hover:underline"
					>
						Coding Ninjas
					</a>
				</Col>
				<Col md={3} className="text-center">
					<a
						href="https://www.linkedin.com/in/deepika-siva-sahithi-dudala/"
						className="text-white fs-5 fw-semibold no-underline hover:underline"
					>
						LinkedIn
					</a>
				</Col>

				<Col md={3} className="text-center">
					<a
						href="https://github.com/DeepikaDudala"
						className="text-white fs-5 fw-semibold no-underline hover:underline"
					>
						GitHub
					</a>
				</Col>
				<Col md={3} className="text-center">
					<a
						href="https://www.codechef.com/users/deepikadudala"
						className="text-white fs-5 fw-semibold no-underline hover:underline"
					>
						CodeChef
					</a>
				</Col>
			</Row>
		</div>
	);
}

export default BlackLine;
