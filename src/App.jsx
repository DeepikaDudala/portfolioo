import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import BlackLine from './components/BlackLine';
import InternshipPage from './components/InternshipPage';
import SkillsPage from './components/SkillsPage';
import CertificatesPage from './components/CertificatesPage';
import ContactPage from './components/ContactPage';
import EndPage from './components/EndPage';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<HomePage />
			<BlackLine />
			<InternshipPage />
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
			<ProjectsPage />
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
			<CertificatesPage />
			<div className="custom-hr m-5">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<SkillsPage />
			<div className="custom-hr m-5">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ContactPage />
			<EndPage />
		</div>
	);
}

export default App;
