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
        animation: '3.5s',
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
    <StyleRoot>
		<div className="navbar" style={this.styles.fadeInDown}>
	      <a href="#aboutme">About Me</a>
	      <a href="#projects">Projects</a>
        <a href="#wips">WIPs</a>
	      <a href="#skills">Skills</a>
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

          <p
          style={this.styles.flipInX} >
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


      <div className="row white box-shadow reveal-me" id="aboutme">
        <div className="bg-overlay-reveal-1" />

          <div className="main-content the-person">
        <Fade big left cascade>
            <div className="content-header">
              <a className="anchor" name="about"></a>
            </div>
        </Fade>
            <div className="content-body welcome-panel">
          <Fade big left cascade>
                <span><p className="welcome-intro"><span className="flavor-text-big">Hi, </span> I'm Julius. I enjoy making web apps that are <span className="flavor-text-big">intuitive</span> and <span className="flavor-text-big">aesthetic</span>.</p></span>
          </Fade>
            </div>
          </div>
  <div className="row white box-shadow">

        <div className="side-content" />
        <div className="main-content">
            <Fade big left cascade>
          <div className="content-header">
            <a className="anchor" name="skills"></a>
            <h2>Skills</h2>
          </div>
            </Fade>
          <div className="content-body">
            <StyleRoot>
            <Fade big left cascade>
            <ul className="ul-skills">
              <li className="li-skills">Javascript</li>
              <li className="li-skills highlight-skill">MongoDB</li>
              <li className="li-skills">HTML5</li>
              <li className="li-skills">CSS3</li>
              <li className="li-skills">Bootstrap</li>
              <li className="li-skills highlight-skill">Express</li>
              <li className="li-skills">jQuery</li>
              <li className="li-skills highlight-skill">ReactJS</li>
              <li className="li-skills">MySQL</li>
              <li className="li-skills">API Integration</li>
              <li className="li-skills highlight-skill">NodeJS</li>
              <li className="li-skills">RESTful Applications</li>
            </ul>
            </Fade>
            </StyleRoot>

          </div>
        </div>
        <div className="side-content" />
      </div>



       
    </div>


  <div className="row whitesmoke">
    <div className="side-content-sm"></div>
    <div className="main-content-lg ">
        <Fade big left cascade>
      <div className="content-header">
        <a className="anchor" name="wips"></a>
        <h2>What I'm Working on Now</h2>
      </div>
        </Fade>

        <Fade big left cascade>
      <div className="content-body">
      <div className="project-card">
          <div className="image-container">
            <div className="project-image">
              <img src="../assets/images/portfolio_screen.jpg" alt="portoflio screenshot"/>
            </div>
          </div>
        <div className="project-content">
        <h4>This Portfolio</h4>
        <p>This Portfolio is in perpetual growth; 
        I look forward to incorporating new libraries and techniques as I move forward in my 
        programming career.
        </p>
        <a href="#"><button className="btn btn-primary">Take me to the top</button></a>
        </div>
      </div>

      <div className="spacer"></div>

        <div className="project-card">
          <div className="image-container">
            <div className="project-image">
              <img src="../assets/images/heirophant_green.jpg" alt="portoflio screenshot"/>
            </div>
          </div>
        <div className="project-content">
        <h4>JoJo Fansite</h4>
        <p>Helping individuals with this niche of an interest find each other.</p>
        <a href="/#/"><button className="btn btn-primary">DEMO TBA</button></a>
        </div>
      </div>

      </div>
      </Fade>

      </div>

    <div className="side-content-sm"></div>
  </div>


 	<div className="row gainsboro">
        <div className="side-content-sm"></div>
        <div className="main-content-lg">
        <Fade big left cascade>
          <div className="content-header">
            <a className="anchor" name="projects"></a>
            <h2>Projects</h2>
          </div>

          <div className="content-body">

            <div className="project-card" id="cardOne">
                <div className="image-container">
                	<div>
                		<img className="project-image-split" src="./assets/images/crystal.png" alt="crystal"/>
                	</div>
	                <div>
	                	<img className="project-image-split" src="./assets/images/crystal_zoom.png" alt="crystal-zoom"/>
	                </div>
                </div>
              	<div className="project-content">
                	<h4>Crystal Numbers</h4>
                	<p>Novelty-based static web-app. This is a ...fun-ish numbers game. Click each crystal to decipher its value. Match your number, without grabbing too many crystals.</p>
                	<a href="https://crystal-game-juliusd.herokuapp.com/index.html" target="_blank"><button className="btn btn-primary">Play!</button></a>
              	</div>
          	</div>

            <div className="spacer"></div>

            <div className="project-card" id="cardTwo">
	            <div className="image-container">
	              <div className="project-image">
	                <img src="./assets/images/liri-node-bot.png" alt="liri-node-bot screenshot"/>
	              </div>
	            </div>
              	<div className="project-content">
                	<h4>Liri-Bot</h4>
                	<p>A personal Node-app used to aggregate my last handful of tweets.</p>
                	<a href="https://github.com/JuliusDorfman/liri-node-app" target="_blank"><button className="btn-philosophy">Check out the Repo!</button></a>
                </div>
            </div>

            <div className="spacer"></div>

            <div className="project-card" id="cardThree">
              <div className="image-container">
                <div className="project-image">
                  <img src="./assets/images/philosophy-trivia.png" alt="philosophy-trivia"/>
                </div>
              </div>
              <div className="project-content">
                <h4>Philosophy Trivia</h4>
                <p>Think you've studied philosophy? I bet you "Kant" name these philosophers.</p>
                <a href="https://philosophy-quiz.herokuapp.com/" target="_blank"><button className="btn btn-primary">Play!</button></a>
              </div>
            </div>

            <div className="spacer"></div>

            <div className="project-card" id="cardFour">
              <div className="image-container">
                <div className="project-image">
                  <img src="./assets/images/clicky_clicky.jpg" alt="clicky_game_screenshot"/>
                </div>
              </div>
              <div className="project-content">
                <h4>Memory-Click Game</h4>
                <p>A single page application built with React. Don't click the same iconic character twice in a round!</p>
                <a href="https://clicky-clicky-game.herokuapp.com/" target="_blank"><button className="btn-philosophy">Play!</button></a>
              </div>
            </div>
      	  </div>
        </Fade>
      	</div>
        <div className="side-content-sm"></div>
      </div>



    <div className="row blue">
        <div className="side-content"></div>
        <div className="main-content" id="contact-form">
          <div className="content-header">
            <a className="anchor" name="contact"></a>
            <h2 className="white-text">Contact Me</h2>
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
        <div className="side-content"></div>
      </div>

	<div className="row">
        <div className="side-content"></div>
        <div className="main-content">
          <div className="content-header">
          </div>
          <div className="content-body">
            <p>&copy; 2018 Julius G. Dorfman</p>
          </div>
          <div className="content-body">
            <p>This site was built utilizing: HTML5, CSS3, Javascript, ReactJS, Radium and various other packages</p>
          </div>
        </div>
        <div className="side-content"></div>
    </div>

	</div>
</div>
			)
	}
}

export default Homepage;