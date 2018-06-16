import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInDown } from 'react-animations';
import $ from 'jquery';

import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.styles = {
      fadeInDown: {
        animation: '3.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
      },
      fadeIn: {
        animation: '6.0s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
      }
    };
  }


  componentDidMount() {

    let navStat = 'open';

    $('.nav-control').click(function() {
      let hideHeight = $('.nav-overlay').height();
      console.log(hideHeight);

      if (navStat === 'open') {
        $('nav').animate({ top: -hideHeight + 20 + 'px' });
        navStat = 'closed';
      } else {
        $('nav').animate({ top: 0 });
        navStat = 'open';
      }
    });
  }


  render() {
    return (
      <div className="navbar-component">
        <StyleRoot>
          <nav className="navbar" style={this.styles.fadeInDown}>
            <div className="nav-overlay" />
            <ul className="ul-social">
              <li className="li-social-links" style={this.styles.fadeIn}>
                <a
                  className="social"
                  href="https://github.com/JuliusDorfman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="li-social-links" style={this.styles.fadeIn}>
                <a
                  className="social"
                  href="https://www.linkedin.com/in/juliusgdorfman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="li-social-links" style={this.styles.fadeIn}>
                <a
                  className="social"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="../../assets/docs/JuliusDorfman_Resume.docx"
                  download="JuliusDorfman_Resume.docx"
                >
                  <i className="far fa-file-word" />
                </a>
              </li>
            </ul>
            <div id="scroll-down" className="fade-in nav-control">
              <div className="scroll-animation" />
            </div>
            <div className="nav-control" />
          </nav>
        </StyleRoot>
      </div>
    )
  }
}

