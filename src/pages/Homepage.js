import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Fade from 'react-reveal/Fade';
import $ from "jquery";
import { headShake, flipInX, fadeInDown, fadeInLeftBig } from 'react-animations';
import "./Homepage.css";


export class Homepage extends Component {
	constructor(props){
		super(props);
		this.state = {
      hover: false,
      shown: false,
      myName: null
    };
    this.styles = {
      fadeInDown: {
        animation: '3.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }, 
      fadeInLeftBig: {
        animation: '3.5s',
        animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig')
    },
        flipInX: {
        animation: '2.75s',
        animationName: Radium.keyframes(flipInX, 'flipInX')
    },
        headShake: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(headShake, 'headShake')
    }
    }
  };

componentWillMount() {
};

onMouseEnterHandler = (event) => {
    this.styles.headShake
};

onMouseLeaveHandler = (event) => {
    this.setState({
        hover: false
    });
};

goToPerson = (event) => {
console.log("hello");
};

goToProgrammer = (event) => {
console.log("goodbye");
};


	render() {
		return (

<div className="pages-homepage">
    <span id="home" />
    <StyleRoot>
		  <div className="navbar" style={this.styles.fadeInDown}>
        <a href="#home">Home</a>
	      <a href="#aboutme">About Me</a>
	      <a href="#projects">Projects</a>
        <a href="#wips">WIPs</a>
	      <a href="#contact">Contact</a>
	    </div>
    </StyleRoot>
	    
      <div className="container" id="top"> 

        <div className="jumbotron">
          <div className="bg-overlay" />
            <div className="jumbotron-text">
              <StyleRoot>
                <h1 
                  id="my-name"
                  style={this.styles.flipInX} >
                    Julius G. Dorfman
                </h1>
                <p style={this.styles.flipInX}>
                  Full-Stack Web Developer
                </p>
              <div className="jumbotron-social">
                <ul className="ul-social">
                  <li className="li-social-links" style={this.styles.flipInX}>
                    <a className="social" href="https://github.com/JuliusDorfman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </li>
                  <li className="li-social-links" style={this.styles.flipInX}>
                    <a className="social" href="https://www.linkedin.com/in/juliusgdorfman" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
              </StyleRoot>
       
            </div>
          </div>

        <div className="row white box-shadow" id="aboutme">
          <div className="bg-overlay-reveal-1">

            <div className="main-content" id="skills-row">
              <div className="content-body">
                <Fade big left cascade>
                  <span><p className="welcome-intro"><span className="flavor-text-big">Hi, </span> I'm Julius. I enjoy making web apps that are <span className="flavor-text-big">intuitive</span> and <span className="flavor-text-big">aesthetic</span>.</p></span>
                </Fade>
              </div>

              <div className="main-content">
              <Fade big left cascade>
                <div className="content-header">
                  <a className="anchor"></a>
                  <h2>Skills</h2>
                </div>
              </Fade>
                <div className="content-body">
                  <StyleRoot>
                    <Fade big left cascade>
                      <ul className="ul-skills">
                        <li className="li-skills">Javascript</li>
                        <li className="li-skills">MongoDB</li>
                        <li className="li-skills">HTML5</li>
                        <li className="li-skills">CSS3</li>
                        <li className="li-skills">Bootstrap</li>
                        <li className="li-skills">Express</li>
                        <li className="li-skills">jQuery</li>
                        <li className="li-skills">ReactJS</li>
                        <li className="li-skills">MySQL</li>
                        <li className="li-skills">API Integration</li>
                        <li className="li-skills">NodeJS</li>
                        <li className="li-skills">RESTful Applications</li>
                      </ul>
                    </Fade>
                  </StyleRoot>
                </div>
              </div>
            </div>
          </div>
        </div>

 	<div className="row">
    <div className="bg-overlay-rows" />
    <div className="main-content-lg">
      <Fade big left cascade>
        <div className="content-header">
          <a className="anchor" name="projects"></a>
          <h2>Projects</h2>
        </div>
      </Fade>
      <Fade big left cascade>
        <div className="content-body">
          
          <div className="project-card" id="cardOne">
            <a href="https://crystal-game-juliusd.herokuapp.com/index.html" target="_blank">
              <div className="bg-card-overlay">
                <h3>Crystals Number Matching Game</h3>
                <p>Click the Crystals to discover their worth. Don't be greedy though. You'll only want to obtain enough points to MATCH the given number.</p>
              </div>
            </a>
        	</div>


          <div className="project-card" id="cardTwo">
            <a href="https://github.com/JuliusDorfman/liri-node-app" target="_blank">
              <div className="bg-card-overlay">
              	<h3>Liri-Bot</h3>
              	<p>A personal Node-app used to aggregate my last handful of tweets.</p>
              </div>
            </a>
          </div>
          
          </div>
        </Fade>
        <Fade big left cascade>
        <div className="content-body">

          <div className="project-card" id="cardThree">
            <a href="https://philosophy-quiz.herokuapp.com/" target="_blank">
              <div className="bg-card-overlay">
                <h3>Philosophy Trivia</h3>
                <p>Think you've studied philosophy? I bet you "Kant" name these philosophers.</p>
              </div>
            </a> 
          </div>


          <div className="project-card" id="cardFour">
            <a href="https://clicky-clicky-game.herokuapp.com/" target="_blank">
              <div className="bg-card-overlay">
              <h3>Memory-Click Game</h3>
              <p>A single page application built with React. Don't click the same iconic character twice in a round!</p>
              </div>
            </a>
          </div>

        </div>
        </Fade>

  	</div>
  </div>

  <div className="row whitesmoke" id="wips">
    <div className="bg-overlay-rows" />
    <div className="main-content-lg">
      <Fade big left cascade>
        <div className="content-header">
          <a className="anchor" name="wips"></a>
          <h2>What I'm Working on Now</h2>
        </div>
      </Fade>

      <Fade big left cascade>
        <div className="content-body">

          <div className="project-card">
            <div className="project-content">
              <h3>This Portfolio</h3>
              <p>This Portfolio is in perpetual growth; 
              I look forward to incorporating new libraries and techniques as I move forward in my 
              programming career.
              </p>
            </div>
          </div>


            <div className="project-card">
              <div className="project-content">
                <h3>Personal SASS/SCSS Template</h3>
                <p>I am VERY excited to begin working on a personal stylesheet.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>Revisit and Refactor</h3>
                <p>I have past projects, group and solo, that I'd like to refine.</p>
              </div>
            </div>

        </div>
      </Fade>

    </div>
  </div>

  <div className="row blue">
      <div className="main-content" id="contact-form">
        <div className="content-header">
          <a className="anchor" name="contact"></a>
          <h2 className="white-text">Say "Hello"!</h2>
        </div>
        <div className="contact content-body">
          <form method="POST" action="mailto:juliusgcd@gmail.com" encType="text/plain">
            <input type="hidden" name="_subject" value="Contact request from personal website"/>
            <input type="email" name="_replyto" placeholder="A Contact Email"/>
            <textarea name="message" placeholder="Your message... constructive criticism, advice, words of love, emotional support, mean comments; anything, really."></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
  </div>

	<div className="row">
    <div className="main-content" id="page-footer">
      <div className="content-body">
        <p>&copy; 2018 Julius G. Dorfman</p>
      </div>
      <div className="content-body">
        <p>This site was built utilizing: HTML5, CSS3, Javascript, ReactJS, Radium and various other packages</p>
      </div>
    </div>
  </div>

	</div>
</div>
			)
	}
}

export default Homepage;