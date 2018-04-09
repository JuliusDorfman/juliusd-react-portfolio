import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInDown } from 'react-animations';
import $ from 'jquery';
import "./Homepage.css";

export class Homepage extends Component {
	constructor(props){
		super(props);
		this.state = {};
    this.styles = {
      fadeInDown: {
        animation: '3.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }, 
        fadeIn: {
        animation: '6.0s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
    }
  };

componentDidMount() {
      $(window).scroll(function() {
      var screenTop = $(document).scrollTop()
        $('.jumbotron').css({
          height: function() {
            let height =  1100 - screenTop;
            if(height >= 450) {
              return height
          }
        }
      })

      $('.fadeinleft').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'30px'},1000);
            }
            
        }); 
    });
}

	render() {

		return (

<div className="pages-homepage">
	    
      <div className="container"> 
        <div className="jumbotron">
            <div className="jumbotron-text">
              <StyleRoot>
                <h1 
                  id="my-name"
                  style={this.styles.fadeIn} >
                    [NAME]
                </h1>
                <p style={this.styles.fadeIn}>
                  Logical Design | Creative Solutions
                </p>
              <div className="jumbotron-social">
                <ul className="ul-social">
                  <li className="li-social-links" style={this.styles.fadeIn}>
                    <a className="social" href="https://github.com/JuliusDorfman" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  </li>
                  <li className="li-social-links" style={this.styles.fadeIn}>
                    <a className="social" href="https://www.linkedin.com/in/juliusgdorfman" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  </li>
                  <li className="li-social-links" style={this.styles.fadeIn}>
                    <a className="social" target="_blank" rel="noopener noreferrer" href="../assets/docs/JuliusDorfman_Resume.doc" download="JuliusDorfman_Resume.doc"><i className="far fa-file-word"></i></a>
                  </li>
                </ul>
              </div>
              <div id="scroll-down" style={this.styles.fadeIn}>
                <div className="scroll-animation" />
              </div>
              </StyleRoot>
            </div>
          </div>

 	<div className="row" id="projects">
    <div className="main-content">
      <div className="projects-header">
        <h2>// My Work</h2>
        <div className="underline-projects fadeinleft" />
      </div>
          
          <div className="project-card" id="cardOne">
            <a href="https://crystal-game-juliusd.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
            </a>
        	</div>

          <div className="project-card" id="cardTwo">
            <a href="https://github.com/JuliusDorfman/liri-node-app" target="_blank" rel="noopener noreferrer">
            </a>
          </div>

          <div className="project-card" id="cardThree">
            <a href="https://philosophy-quiz.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            </a> 
          </div>

          <div className="project-card" id="cardFour">
            <a href="https://clicky-clicky-game.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            </a>
          </div>

  	</div>
  </div>

  <div className="row" id="wips">
    <div className="main-content">
        <div className="wips-header">
            <h2>What I'm Working on Now</h2>
        </div>
          <div className="project-card news-from-card">
            <div className="project-content">
            </div>
          </div>

            <div className="project-card sass-card">
              <div className="project-content">
              </div>
            </div>
    </div>
  </div>

	<div className="row row-footer">
    <div className="main-content" id="page-footer">
      <div>
        <a className="footer-links" href="https://github.com/JuliusDorfman" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a className="footer-links" href="https://www.linkedin.com/in/juliusgdorfman" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a className="footer-links" target="_blank" rel="noopener noreferrer" href="../assets/docs/JuliusDorfman_Resume.doc" download="JuliusDorfman_Resume.doc"><i className="far fa-file-word"></i></a>
      </div>
      <div className="copywrite">
        <p>&copy; 2018 Julius G. Dorfman</p>
      </div>
    </div>
  </div>
	</div>

</div>
			)
	}
}


export default Homepage;