import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import ProjectCard from './ProjectCard';
import webDesignIcon from '../assets/logo.jpg'; // Add appropriate paths for icons
import uiUxDesignIcon from '../assets/logo.jpg';
import motionGraphicsIcon from '../assets/logo.jpg';
import contactIcon from '../assets/logo.jpg';

const projects = [
	{
		icon: webDesignIcon,
		title: 'Web design',
		description:
			'Lorem ipsum dolor sit amet consectetur. Urna et rhoncus posuere adipiscing tortor tellus.',
		link: '#',
	},
	{
		icon: uiUxDesignIcon,
		title: 'UI/UX design',
		description:
			'Lorem ipsum dolor sit amet consectetur. Urna et rhoncus posuere adipiscing tortor tellus.',
		link: '#',
	},
	{
		icon: motionGraphicsIcon,
		title: 'Motion graphics',
		description:
			'Lorem ipsum dolor sit amet consectetur. Urna et rhoncus posuere adipiscing tortor tellus.',
		link: '#',
	},
	{
		icon: contactIcon,
		title: 'Get in touch',
		description: 'Looking for another service? Get in touch with me.',
		link: '#',
	},
	{
		icon: webDesignIcon,
		title: 'Web design 2',
		description:
			'Lorem ipsum dolor sit amet consectetur. Urna et rhoncus posuere adipiscing tortor tellus.',
		link: '#',
	},
	{
		icon: uiUxDesignIcon,
		title: 'UI/UX design 2',
		description:
			'Lorem ipsum dolor sit amet consectetur. Urna et rhoncus posuere adipiscing tortor tellus.',
		link: '#',
	},
	{
		icon: motionGraphicsIcon,
		title: 'Motion graphics 2',
		description:
			'Lorem ipsum dolor sit amet consectetur. Urna et rhoncus posuere adipiscing tortor tellus.',
		link: '#',
	},
	{
		icon: contactIcon,
		title: 'Get in touch 2',
		description: 'Looking for another service? Get in touch with me.',
		link: '#',
	},
];

const ProjectsPage = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 4;
	const [slideDirection, setSlideDirection] = useState(0);

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
		reverse: slideDirection === -1,
	});

	return (
		<Container className="mt-5">
			<Row className="align-items-center mb-5">
				<Col lg={4}>
					<h1 className="text-2xl font-bold heading-text">
						Personal{' '}
						<span
							className="rounded-5 p-2 text-white"
							style={{ backgroundColor: '#006b7b' }}
						>
							Projects
						</span>
					</h1>
				</Col>
				<Col lg={4} className="text-center">
					<p className="mb-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit sit lorem consequat
						massa donec integer pellentesque sed non tortor.
					</p>
				</Col>
				<Col lg={4} className="text-end">
					<Button
						variant="outline-secondary"
						onClick={handlePrevPage}
						className="me-2"
						disabled={currentPage === 0}
					>
						<FaArrowLeft />
					</Button>
					<Button
						variant="outline-secondary"
						onClick={handleNextPage}
						disabled={currentPage >= Math.ceil(projects.length / itemsPerPage) - 1}
					>
						<FaArrowRight />
					</Button>
				</Col>
			</Row>
			<animated.div style={slideProps}>
				<Row>
					{selectedProjects.map((project, index) => (
						<Col key={index} sm={12} md={6} className="mb-4">
							<ProjectCard
								icon={project.icon}
								title={project.title}
								description={project.description}
								link={project.link}
							/>
						</Col>
					))}
				</Row>
			</animated.div>
		</Container>
	);
};

export default ProjectsPage;
