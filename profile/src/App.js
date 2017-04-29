import React, { Component } from 'react';
import NavBar from './NavBar';
import Body from './Body';
import Footer from './Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Body />
				<Footer />
			</div>
		);
	}
}

export default App;