import React, { Component } from 'react';

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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {

    return (
      <div className="jumbotron-component">
      <StyleRoot>
        <div className="jumbo-overlay" />
        <div className="jumbo-grain" />
        <div className="jumbotron-text">
          <h1 id="my-name" style={this.styles.fadeIn}>
            <span
              className="jumbo-flavor-left"
            >
              {`<`}
            </span>
            JULIUS G. DORFMAN
                </h1>
          <ul className="my-properties" style={this.styles.fadeIn}>
            <li style={this.styles.fadeIn}>type="human"</li>
            <li style={this.styles.fadeIn}>occupation="web-developer"</li>
            <li style={this.styles.fadeIn}>hobby="aquarist"</li>
            <li style={this.styles.fadeIn}>location={'{location}'}</li>
          </ul>
          <div
            className="jumbo-flavor-right"
            style={this.styles.fadeIn}>
            <span className="jumbo-slash">/</span>>
                </div>
        </div>
        </StyleRoot>
      </div>
    )
  }
}
