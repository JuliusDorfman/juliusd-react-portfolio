import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import { fadeInRightBig, fadeInLeftBig } from 'react-animations';
import "./Homepage.css";

export class Homepage extends Component {
	constructor(props){
		super(props);
		this.state = {
      hover: false
    };
    this.styles = {
      fadeInRightBig: {
        animation: '2.5s',
        animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig')
    }, 
      fadeInLeftBig: {
        animation: '3.5s',
        animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig')
      }
    }
  };




getInitialState = () => {
    return {
        hover: false
    };
};

onMouseEnterHandler = (event) => {
    this.setState({
        hover: true
    });
};

onMouseLeaveHandler = (event) => {
    this.setState({
        hover: false
    });
};


	render() {
		return (

<div className="pages-homepage">
		<div className="navbar">
	      <a href="#about" className="hover">About</a>
	      <a href="#projects" className="hover">Projects</a>
	      <a href="#skills" className="hover">Skills</a>
	      <a href="#contact" className="hover">Contact</a>
	    </div>

	    <div className="container" id="top"> 

      <div className="jumbotron">

        <div className="jumbotron-text">
        <StyleRoot>
          <h4 className="jumbotron-greeting" style={this.styles.fadeInRightBig}>Hey, I'm</h4>
        </StyleRoot>
          <h1 
            className="hover-change-color" 
            id="my-name" >
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>J</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>u</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>l</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>i</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>u</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>s</span>
          <span>{`\n`}</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>G</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>.</span>
          <span>{`\n`}</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>D</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>o</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>r</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>f</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>m</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>a</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>n</span>
          </h1>
          <p>Full-Stack Web Developer</p>
        </div>

        <div className="jumbotron-social">
          <ul className="ul-social">
            <li className="li-social-links">
              <a className="social" href="https://github.com/JuliusDorfman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="https://www.linkedin.com/in/juliusgdorfman" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="https://www.codewars.com/users/JuliusDorfman" target="_blank" rel="noopener noreferrer"><img id="codewars" src="./assets/images/codewars.png" alt="codewars icon"/></a>
            </li>
          </ul>
        </div>
        <StyleRoot>
          <h4 className="jumbotron-thankyou" style={this.styles.fadeInLeftBig}>Thanks for visiting!</h4>
        </StyleRoot>
        <div id="down-arrow">
          <span><a href="#about"><i className="fa fa-chevron-down" aria-hidden="true" alt="downar"></i></a></span>
        </div>
      </div>

      <div className="row white box-shadow">
        <div className="side-content"></div>
        <div className="main-content">
          <div className="content-header">
            <a className="anchor" name="about"></a>
            <h2>The Person</h2>
          </div>
          <div className="content-body">
            <p>I am a recent graduate of UCSD Extension's Full-Stack Bootcamp. Here, I learned how to engineer solutions while maintaining good coding practices. DRY code is good code!</p>
            <p>I first became interested in programming whilst still an accountant working on a joint project with our IT department. I eventually decided to leave my previous field behind and pursue a career in programming. I'm happy to have finally found my passion.</p>
          </div>
        </div>
        <div className="side-content"></div>
      </div>

 	<div className="row">
        <div className="side-content-sm"></div>
        <div className="main-content-lg">
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
                	<a href="https://crystal-game-juliusd.herokuapp.com/index.html"><button className="btn btn-primary">Play!</button></a>
              	</div>
          	</div>


            <div className="project-card" id="cardTwo">
	            <div className="image-container">
	              <div className="project-image">
	                <img src="./assets/images/liri-node-bot.png" alt="liri-node-bot screenshot"/>
	              </div>
	            </div>
              	<div className="project-content">
                	<h4>Liri-Bot</h4>
                	<p>A personal Node-app used to aggregate my last handful of tweets.</p>
                	<a href="https://philosophy-quiz.herokuapp.com/"><button className="btn-philosophy">Check out the Repo!</button></a>
                </div>
            </div>


            <div className="project-card" id="cardThree">
              <div className="image-container">
                <div className="project-image">
                  <img src="./assets/images/philosophy-trivia.png" alt="philosophy-trivia"/>
                </div>
              </div>
              <div className="project-content">
                <h4>Philosophy Trivia</h4>
                <p>Think you've studied philosophy? I bet you "Kant" name these philosophers.</p>
                <a href="https://philosophy-quiz.herokuapp.com/"><button className="btn btn-primary">Play!</button></a>
              </div>
            </div>


            <div className="project-card" id="cardFour">
              <div className="image-container">
                <div className="project-image">
                  <img src="./assets/images/clicky_game.png" alt="clicky_game_screenshot"/>
                </div>
              </div>
              <div className="project-content">
                <h4>Memory-Click Game</h4>
                <p>A single page application built with React.</p>
                <a href="https://clicky-clicky-game.herokuapp.com/"><button className="btn-philosophy">Play!</button></a>
              </div>
            </div>
      	  </div>
      	</div>
        <div className="side-content-sm"></div>
      </div>


	<div className="row white box-shadow">
        <div className="side-content"></div>
        <div className="main-content">
          <div className="content-header">
            <a className="anchor" name="skills"></a>
            <h2>Skills</h2>
          </div>
          <div className="content-body">
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
          </div>
        </div>
        <div className="side-content"></div>
    </div>

    <div className="row blue">
        <div className="side-content"></div>
        <div className="main-content">
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
            <p>This site was built utilizing: HTML5, CSS3, Javascript, and ReactJS</p>
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