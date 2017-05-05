import React, { Component } from 'react';
import NavBar from './NavBar';
import Body from './Body';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Body className="flex-container" />
			</div>
		);
	}
}

export default App;