import React, { Component } from 'react';

class SiteImage extends Component{ 
  render(){    
	return (
	  <img src={this.props.src} />
	);  
  }
}

export default SiteImage;