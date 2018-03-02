import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Fade from 'react-reveal/Fade';
import { zoomIn, fadeIn, fadeInDown, fadeInUp } from 'react-animations';
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
      fadeInUp: {
        animation: '3.5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
        fadeIn: {
        animation: '6.0s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
        zoomIn: {
        animation: '3.5s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
    }
  };

componentWillMount() {
};

onMouseEnterHandler = (event) => {
    this.styles.zoomIn
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
                  style={this.styles.zoomIn} >
                    Julius G. Dorfman
                </h1>
                <p style={this.styles.fadeIn}>
                  Full-Stack Web Developer
                </p>
              <div className="jumbotron-social">
                <ul className="ul-social">
                  <li className="li-social-links" style={this.styles.fadeIn}>
                    <a className="social" href="https://github.com/JuliusDorfman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </li>
                  <li className="li-social-links" style={this.styles.fadeIn}>
                    <a className="social" href="https://www.linkedin.com/in/juliusgdorfman" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
              </StyleRoot>
            </div>
          </div>

      <StyleRoot>
      <div className="jumbotron-fadeInUp" style={this.styles.fadeInUp} />
        <div className="row content-row" id="aboutme" >
          <div className="bg-overlay-reveal-1">

            <div className="main-content" id="skills-row">


                <div className="content-header">
                      <Fade big left cascade>
                  <h2 className="skills-header">My Toolbox</h2>
                      </Fade>
                </div>

                <div className="content-body skills-group">
                    <div className="skills-container">
                      <Fade big left cascade>
                        <h3>Languages</h3>
                        <ul className="ul-skills">
                          <li className="li-skills"><img src="../assets/images/javascript_logo.jpg" alt="js-icon" /><p>Javascript</p></li>
                          <li className="li-skills"><img src="../assets/images/html5_logo.jpg" alt="html5-icon" /><p>HTML5</p></li>
                          <li className="li-skills"><img src="../assets/images/css3.jpg" alt="CSS3-icon" /><p>CSS3</p></li>
                        </ul>
                      </Fade>                         
                    </div>
                    <div className="skills-container">
                      <Fade big left cascade>
                        <h3>Libraries</h3>
                        <ul className="ul-skills">
                          <li className="li-skills"><img src="../assets/images/bootstrap_logo.jpg" alt="bootstrap-icon" /><p>Bootstrap</p></li>
                          <li className="li-skills"><img src="../assets/images/jquery_logo.jpg" alt="jquery-icon" /><p>jQuery</p></li>
                          <li className="li-skills"><img src="../assets/images/react_logo.jpg" alt="react-icon" /><p>ReactJS</p></li>
                          <li className="li-skills"><img src="../assets/images/redux_logo.jpg" alt="redux-icon" /><p>Redux</p></li>
                        </ul>
                      </Fade>                        
                    </div>
                    <div className="skills-container">
                      <Fade big left cascade>
                      <h3 style={{width:"150%"}}> Environments & Databases</h3>
                      <ul className="ul-skills">
                        <li className="li-skills"><img src="../assets/images/node_logo.jpg" alt="node-icon" /><p>NodeJS</p></li>
                        <li className="li-skills"><img src="../assets/images/mysql.jpg" alt="mysql-icon" /><p>MySQL</p></li>
                        <li className="li-skills"><img src="../assets/images/mongodb_logo.jpg" alt="mongodb-icon" /><p>MongoDB</p></li>
                      </ul>
                      </Fade>                      
                    </div>
                </div>


              </div>
            </div>
          </div>
      </StyleRoot>

 	<div className="row content-row" id="project-row">
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

  <div className="row content-row" id="wips">
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


  <div className="bg-peak" />

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

	<div className="row row-footer">
    <div className="main-content" id="page-footer">
      <div className="content-body">
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