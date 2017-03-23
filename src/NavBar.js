import React, {Component} from 'react';
import NavBarButton from './NavBarButton';
import './NavBar.css';

class NavBar extends Component {
  render(){
    return (
      <div className="navbar">
        <NavBarButton text={'Home'} uri={'http://mybeadingstudio.com/'}/>
		<NavBarButton text={'About'} uri={'https://github.com/lubelle/LS-Pro-React-I'}/>
      </div>
    );
  }
}

export default NavBar;