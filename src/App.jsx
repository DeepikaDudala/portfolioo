import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import InternshipPage from './components/InternshipPage';
import SkillsPage from './components/SkillsPage';
import CertificatesPage from './components/CertificatesPage';
import ContactPage from './components/ContactPage';
function App() {
	return (
		<Router>
			<div className="App">
				<NavigationBar />
				<HomePage />
				<InternshipPage />
				<ProjectsPage />
				<SkillsPage />
				<CertificatesPage />
				<ContactPage />
			</div>
		</Router>
	);
}

export default App;
