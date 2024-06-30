import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import ProjectCard from './ProjectCard';
import testboard from '../assets/testboard.png';
import hms from '../assets/hms.png';
import bl from '../assets/bl.png';
import poet from '../assets/poet.png';
import tenzie from '../assets/tenzie.png';
import facebook from '../assets/facebook.png';
import doc2 from '../assets/doc2.jpeg';

const projects = [
	{
		icon: testboard,
		title: 'Test Board',
		description:
			'Facilitated secure student authentication, test-taking, and teacher administrative capabilities for a managing and student records.',
		livelink: 'https://testboard.onrender.com',
		gitlink: 'https://github.com/DeepikaDudala/TestBoard',
	},
	{
		icon: hms,
		title: 'HealthEase',
		description:
			"Hospital Management Web App which stores Patients's records, Make appointments and has backup AI doctor assistance.",
		gitlink: 'https://github.com/DeepikaDudala/hackathon24-backend',
	},
	{
		icon: bl,
		title: 'My Book List',
		description:
			'A web application to manage your personal book collection, ensuring a well-organized list with essential details.',
		gitlink: 'https://github.com/DeepikaDudala/MyBookList',
		livelink: 'https://deepikadudala.github.io/MyBookList/',
	},
	{
		icon: poet,
		title: 'Poet',
		description:
			'Langchain App to write and share poems, stories, and quotes with the world with interface streamlit & GenAI capabilities.',
		gitlink: 'https://github.com/DeepikaDudala/chatbot',
	},
	{
		icon: tenzie,
		title: 'Tenzies',
		description:
			'Tenzie is a dice game that is easy and fun to play. It is developed using React.js and Bootstrap.',
		gitlink: 'https://github.com/DeepikaDudala/tenzies-game',
		livelink: 'https://deepikadudala.github.io/tenzies-game/',
	},
	{
		icon: facebook,
		title: 'Facebook Clone',
		description:
			'A Facebook clone with features like Login, SignUp. It is developed using React.js.',
		gitlink: 'https://github.com/DeepikaDudala/react-facebook',
	},
	{
		icon: doc2,
		title: 'Docx2PDF',
		description:
			'Converts docx files to pdf files locally in folder. It is developed using Python and JS.',
		gitlink: 'https://github.com/DeepikaDudala/docx2pdf',
	},
];

const ProjectsPage = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 2);
	const [slideDirection, setSlideDirection] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
			setCurrentPage(0);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handlePrevPage = () => {
		setSlideDirection(-1);
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
	};

	const handleNextPage = () => {
		setSlideDirection(1);
		setCurrentPage((prevPage) =>
			Math.min(prevPage + 1, Math.ceil(projects.length / itemsPerPage) - 1)
		);
	};

	const startIndex = currentPage * itemsPerPage;
	const selectedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

	const slideProps = useSpring({
		from: { opacity: 0, transform: `translate3d(${slideDirection * 100}%, 0, 0)` },
		to: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		reset: true,
		reverse: false,
	});

	return (
		<div id="projects">
			<Container className="mt-5 project-page">
				<Row className="align-items-center my-5">
					<Col lg={6}>
						<h1 className="text-2xl font-bold heading-text lh-base">
							Personal{' '}
							<span
								className="rounded-5 p-2 text-white"
								style={{ backgroundColor: '#006b7b' }}
							>
								Projects
							</span>
						</h1>
						<p className="text-center">
							Explore my diverse web projects, from secure management systems to
							creative apps and interactive games, each with live demos and GitHub
							repositories.
						</p>
					</Col>
					<Col lg={4} className="text-center mt-3">
						<Button
							variant="outline-secondary"
							onClick={handlePrevPage}
							className="me-2"
							disabled={currentPage === 0}
						>
							<FaArrowLeft style={{ color: 'black' }} />
						</Button>
						<Button
							variant="outline-secondary"
							onClick={handleNextPage}
							disabled={currentPage >= Math.ceil(projects.length / itemsPerPage) - 1}
						>
							<FaArrowRight style={{ color: 'black' }} />
						</Button>
					</Col>
				</Row>
				<animated.div style={slideProps}>
					<Row className="justify-content-center">
						{selectedProjects.map((project, index) => (
							<Col key={index} sm={5} lg={5.5} className="mb-4">
								<ProjectCard
									icon={project.icon}
									title={project.title}
									description={project.description}
									gitlink={project.gitlink}
									livelink={project.livelink}
								/>
							</Col>
						))}
					</Row>
				</animated.div>
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
};

export default ProjectsPage;
