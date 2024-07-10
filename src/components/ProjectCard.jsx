import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ProjectCard = ({ icon, title, description, gitlink, livelink }) => {
	return (
		<Card className="text-center pro-card rounded-5">
			<Card.Body>
				<Row>
					<Col lg={6}>
						<div className="">
							<img src={icon} alt={`${title} icon`} className="rounded-5" />
						</div>
					</Col>
					<Col lg={6} className="text-start">
						<Card.Title>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>

						<div className="m-3">
							{gitlink && (
								<Button
									variant="dark"
									className="me-4 p-2"
									onClick={() => (window.location.href = gitlink)}
								>
									Github
								</Button>
							)}

							{livelink && (
								<Button
									variant="outline-dark"
									className="p-2"
									onClick={() => (window.location.href = livelink)}
								>
									Live
								</Button>
							)}
						</div>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
