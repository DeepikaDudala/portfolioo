import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ icon, title, description, link }) => {
	return (
		<Card className="text-center shadow-sm border rounded">
			<Card.Body>
				<div className="mb-3">
					<img
						src={icon}
						alt={`${title} icon`}
						style={{ width: '50px', height: '50px' }}
					/>
				</div>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				{link && (
					<Button variant="primary" href={link}>
						Learn More
					</Button>
				)}
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
