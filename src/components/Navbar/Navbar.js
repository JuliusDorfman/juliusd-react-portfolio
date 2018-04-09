import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import { fadeInDown } from 'react-animations';
import './Navbar.css';

export class Navbar extends React.Component { 
	constructor(props){
		super(props);
		this.state = {};
    this.styles = {
      fadeInDown: {
        animation: '3.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    	}
    }
  };
	render() {
		return(
			<div>
			    <span id="home" />
			    <StyleRoot>
					  <div className="navbar" style={this.styles.fadeInDown}>
			        <a href="#home">Home</a>
				      <a href="#projects">Projects</a>
			        <a href="#wips">WIPs</a>
				    </div>
			    </StyleRoot>
			</div>
	)}
}

export default Navbar;