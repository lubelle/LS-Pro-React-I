import React, {Component} from 'react';
import NavBarButton from './NavBarButton';
import './NavBar.css';

class NavBar extends Component {
  render(){
    return (
      <div className="navbar">
        <NavBarButton text={'Home'} uri={'https://lubelle.github.io/LS-Pro-React-I'}/>
		<NavBarButton text={'About'} uri={'http://mybeadingstudio.com/'}/>
      </div>
    );
  }
}

export default NavBar;

