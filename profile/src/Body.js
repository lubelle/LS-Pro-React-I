import React, {Component} from 'react';
import SiteBanner from './SiteBanner';
import './App.css';

class Body extends Component{
	render(){
		return (
			<div>
				<SiteBanner src={'http://mybeadingstudio.com/assets/img_portfolio_banner.jpg'} 
							alt={'photo of a wild orchid taken near Drummond Island'} />
				<br />
				<blockquote className="App-blockquote">It is in changing that we find purpose.-- <em>Heraclitus</em>
				</blockquote>
			</div>
		);
	}
}

export default Body;