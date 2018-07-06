// React and Componentss
import React, { Component } from 'react';
import Navbar from '../../components/layout/Navbar';
import Jumbotron from '../../components/layout/Jumbotron';
import ProjectsWrapper from '../../components/ProjectsWrapper';
import Footer from '../../components/layout/Footer';
// Third Party Packages
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInDown } from 'react-animations';
import $ from 'jquery';

// Assets

import './Homepage.css';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
    window.addEventListener('scroll', this.handleScroll);
    $('.fade-in')
      .css({ opacity: 0 })
      .animate({ opacity: 1 }, 1000);

  }

  handleScroll = () => {
    var scrollTop = $(window).scrollTop();
    $('#card-one').css({
      'background-position-y': Math.round(scrollTop / 10) + 'px'
    });
  };



  render() {
    return (
      <div className="pages-homepage">
        <StyleRoot>
          <Navbar />
        </StyleRoot>

        <div className="container">
          <StyleRoot>
            <Jumbotron />
          </StyleRoot>

          <ProjectsWrapper />

          <Footer />
        </div>
      </div >
    );
  }
}

export default Homepage;
