import React, { Component } from 'react';

// Components
// import Bio from "../../Bio";

// Third Party
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInDown } from 'react-animations';
import $ from 'jquery';

// Assets
import "./Jumbotron.css";

export default class Jumbotron extends Component {
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
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = () => {
    var screenTop = $(document).scrollTop();
    $('.jumbotron-component').css({
      height: function() {
        let height = (1000 - screenTop) * 0.75;
        if (height >= 450) {
          return height;
        }
      }
    });
  }

  click(e) {
    window.scroll({
      top: 500,
      behavior: 'smooth'
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    window.scroll({
      top: 2500,
      left: 0,
      behavior: 'smooth'
    });
    return (
      <div className="jumbotron-component">
        <StyleRoot>
          <div className="transparent-overlay" style={this.styles.fadeIn}>
            <div className="landing-intro">
              <h1>Julius <span className="responsive-disappear">G.</span> Dorfman</h1>
              <h3>Website & Application:</h3>
              <ul className="occupation-list">
                <li className="occupation-list-items">Planning</li>
                <li className="occupation-list-items">Design</li>
                <li className="occupation-list-items">Development</li>
              </ul>
            </div>
            <span onClick={this.click.bind(this)}><i className="far fa-arrow-alt-circle-down scroll-down-button"></i></span>
          </div>
        </StyleRoot>
      </div>
    )
  }
}
