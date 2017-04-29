import React, {Component} from 'react';

class NavBarButton extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<button className="nav_btn">
				<a href={ this.props.uri }>{ this.props.text }</a>
			</button>
		);
	}
}	

NavBarButton.defaultProps = {
	uri : ""
}

export default NavBarButton;