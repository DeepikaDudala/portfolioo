import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.jpg';

function InternshipPage() {
	return (
		<Container className="mt-5 intern-page">
			<Row className="my-3 ms-5 me-5 justify-content-end">
				<Col lg={6}>
					<h1 className="text-2xl font-bold heading-text lh-base">
						Work{' '}
						<span
							className="rounded-5 p-2 text-white"
							style={{ backgroundColor: '#006b7b' }}
						>
							Experience
						</span>
					</h1>
				</Col>
			</Row>
			<Row className=" align-content-between lh-lg">
				<Col lg={7} className=" ">
					<h1 className="text-xl fw-bold ms-5">FullStack Developer Intern</h1>
					<h1 className=" ms-5 my-2  text-danger-emphasis">March, 2024 - Present</h1>

					<p className="w-75 ms-5 lh-base text-start	">
						<dl>
							<li>
								Migrated a codebase from Express.js, FastAPI to Nest.ts improving
								code structure and maintainability.
							</li>
							<li>
								Consolidated 14 containers into 4 main containers, significantly
								reducing AWS Costs.
							</li>
							<li>
								Engaged in FullStack development. Utilized React.js, Nest.ts, and
								FastAPI.
							</li>
						</dl>
					</p>
				</Col>
				<Col lg={3} className="ms-5 justify-content-center rounded align-items-center">
					<img
						src="https://media.licdn.com/dms/image/D560BAQHg7pZyuzGP7Q/company-logo_200_200/0/1719258032621/eficens_it_logo?e=2147483647&v=beta&t=_jxP1Nwle-nqQY5d-k_byyEhOHgtTb2vKm6WQwFzzZU"
						alt={` icon`}
						className="rounded-5 w-25 justify-content-center my-5 ms-5 "
					/>
					<h1 className="text-xl fw-bold ms-3">Eficens Sysytems</h1>
				</Col>
			</Row>
		</Container>
	);
}

export default InternshipPage;
