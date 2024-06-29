import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import BlackLine from './components/BlackLine';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<HomePage />
			<BlackLine />
			<ProjectsPage />
		</div>
	);
}

export default App;
