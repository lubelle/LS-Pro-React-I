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
		<blockquote>If you haven't found it yet, keep looking. Don&#39;t settle. As with all matters of the heart, you&#39;ll know when you find it. And, like any great relationship, it just gets better and better as the years roll on. -- <em>Steve Job</em>
		</blockquote>
      </div>
    );
  }
}

export default Body;