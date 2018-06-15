import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInDown } from 'react-animations';
import "./Bio.css";

export default class Bio extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      fadeInDown: {
        animation: '3.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
      },
      fadeInRight: {
        animation: '6.0s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
      }
    };
  }
  render() {
    return (
      <StyleRoot>
        <div className="bio-component" style={this.styles.fadeInRight}>
          <div className="bio-info-wrapper">
            <ul className="bio-info-list">
              <li>Email: </li>
              <li><a href="mailto:juliusdorfman@gmail.com">JuliusDorfman@gmail.com</a></li>
              <li />
              <li />
              <li>Phone: </li>
              <li>Upon Request<i className="fas fa-phone"></i></li>
            </ul>
          </div>
          <img className="bio-profile-pic" src="/assets/images/julius-profile.png" title="Julius-Profile-Pic" alt="Julius-Profile-Pic" />
        </div>
      </StyleRoot>
    )
  }
}
