import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const skills = [
	{ id: 1, name: 'Skill 1', image: logo },
	{ id: 2, name: 'Skill 2', image: logo },
	{ id: 3, name: 'Skill 3', image: logo },
	{ id: 4, name: 'Skill 4', image: logo },
	{ id: 5, name: 'Skill 5', image: logo },
	{ id: 6, name: 'Skill 6', image: logo },
	{ id: 7, name: 'Skill 7', image: logo },
	{ id: 8, name: 'Skill 8', image: logo },
];

function SkillsPage() {
	return (
		<Container className="mt-5">
			<Row className="align-items-center mt-5">
				<Col lg={4}>
					<h1 className="text-2xl font-bold heading-text lh-base">Skills</h1>
				</Col>
			</Row>
			<Row className="ms-5 ">
				{skills.map((skill) => (
					<Col
						key={skill.id}
						lg={2}
						md={4}
						sm={6}
						xs={6}
						className="text-center justify-content-center my-4"
					>
						<SkillCard skill={skill} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

function SkillCard({ skill }) {
	const [isFlipped, setIsFlipped] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsFlipped((prev) => !prev);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const flipVariants = {
		visible: { opacity: 1, rotateX: isFlipped ? 180 : 0 },
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={flipVariants}
			transition={{ duration: 1 }}
			className="skill-card"
		>
			<div className="card-inner mb-5">
				<div className="card-front">
					<img src={skill.image} alt={skill.name} className="" />
				</div>
				<div className="card-back ">
					<img src={skill.image} alt={skill.name} className="" />
				</div>
			</div>
		</motion.div>
	);
}

export default SkillsPage;
