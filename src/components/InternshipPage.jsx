import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.jpg';

function InternshipPage() {
	return (
		<div id="intern">
			<Container className="mt-5 intern-page">
				<Row className="my-3 ms-4 me-5 justify-content-end">
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
					<Col lg={7} md={7}>
						<h1 className="text-xl fw-bold ms-5">FullStack Developer Intern</h1>
						<h1 className=" ms-5 my-2  text-danger-emphasis">March, 2024 - Present</h1>

						<p className="w-75 ms-5 lh-base text-start	">
							<dl>
								<li>
									Migrated a codebase from Express.js, FastAPI to Nest.ts
									improving code structure and maintainability.
								</li>
								<li>
									Consolidated 14 containers into 4 main containers, significantly
									reducing AWS Costs.
								</li>
								<li>
									Engaged in FullStack development. Utilized React.js, Nest.ts,
									and FastAPI.
								</li>
							</dl>
						</p>
					</Col>
					<Col
						lg={3}
						xs={9}
						md={4}
						className="ms-5 justify-content-center rounded align-items-center"
					>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXRM0zKc1Zvyg2Dn_igJM4tcEPpItEs8IjQ&usqp=CAU"
							alt={` icon`}
							className="rounded-5 w-25 justify-content-center my-5 ms-5 "
						/>
						<h1 className="text-xl fw-bold ms-3">Eficens Sysytems</h1>
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

export default InternshipPage;
