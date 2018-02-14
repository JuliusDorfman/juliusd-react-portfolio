import React, { Component } from 'react';

import "./Homepage.css";


export class Homepage extends Component {
	constructor(props){
		super(props);
		this.state = []
	}

	render() {
		return (

<div className="pages-homepage">
		<div class="navbar">
	      <a href="#about">About</a>
	      <a href="#projects">Projects</a>
	      <a href="#skills">Skills</a>
	      <a href="#contact">Contact</a>
	    </div>

	    <div class="container" id="top"> 

      <div class="jumbotron">

        <div class="jumbotron-text">
          <h4 class="jumbotron-greeting">Hey, I'm</h4>
          <h1 class="hover-change-color" reference="my-name">Julius G. Dorfman</h1>
          <p>Full-Stack Web Developer</p>
        </div>

        <div class="jumbotron-social">
          <ul class="ul-social">
            <li class="li-social-links">
              <a class="social" href="https://github.com/JuliusDorfman" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li class="li-social-links">
              <a class="social" href="https://www.linkedin.com/in/juliusgdorfman" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
            <li class="li-social-links">
              <a class="social" href="https://www.codewars.com/users/JuliusDorfman" target="_blank"><img id="codewars" src="./assets/codewars.png" alt="codewars icon"/></a>
            </li>
          </ul>
        </div>

        <h4 class="jumbotron-thankyou">Thanks for visiting!</h4>

        <div id="down-arrow">
          <span><a href="#about"><i class="fa fa-chevron-down" aria-hidden="true"></i></a></span>
        </div>
      </div>

      <div class="row white box-shadow">
        <div class="side-content"></div>
        <div class="main-content">
          <div class="content-header">
            <a class="anchor" name="about"></a>
            <h2>The Person</h2>
          </div>
          <div class="content-body">
            <p>I am a recent graduate of UCSD Extension's Full-Stack Bootcamp. Here, I learned how to engineer solutions while maintaining good coding practices. DRY code is good code!</p>
            <p>I first became interested in programming whilst still an accountant working on a joint project with our IT department. I eventually decided to leave my previous field behind and pursue a career in programming. I'm happy to have finally found my passion.</p>
          </div>
        </div>
        <div class="side-content"></div>
      </div>

 	<div class="row">
        <div class="side-content-sm"></div>
        <div class="main-content-lg">
          <div class="content-header">
            <a class="anchor" name="projects"></a>
            <h2>Projects</h2>
          </div>


          <div class="content-body">

            <div class="project-card" id="cardOne">
                <div class="image-container">
                  	<div>
                  		<img class="project-image-split" src="./assets/crystal.png" alt="crystal"/>
                  	</div>
	                <div>
	                	<img class="project-image-split" src="./assets/crystal_zoom.png" alt="crystal-zoom"/>
	                </div>
                </div>
              	<div class="project-content">
                	<h4>Crystal Numbers</h4>
                	<p>Novelty-based static web-app. This is a ...fun-ish numbers game. Click each crystal to decipher its value. Match your number, without grabbing too many crystals.</p>
                	<a href="https://crystal-game-juliusd.herokuapp.com/index.html"><button class="btn btn-primary">Play!</button></a>
              	</div>
          	</div>


            <div class="project-card" id="cardTwo">
	            <div class="image-container">
	              <div class="project-image">
	                <img src="./assets/liri-node-bot.png"/>
	              </div>
	            </div>
              	<div class="project-content">
                	<h4>Liri-Bot</h4>
                	<p>A personal Node-app used to aggregate my last handful of tweets.</p>
                	<a href="https://philosophy-quiz.herokuapp.com/"><button class="btn-philosophy">Check out the Repo!</button></a>
                </div>
            </div>


            <div class="project-card" id="cardThree">
              <div class="image-container">
                <div class="project-image">
                  <img src="./assets/philosophy-trivia.png" alt="philosophy-trivia"/>
                </div>
              </div>
              <div class="project-content">
                <h4>Philosophy Trivia</h4>
                <p>Think you've studied philosophy? I bet you "Kant" name these philosophers.</p>
                <a href="https://philosophy-quiz.herokuapp.com/"><button class="btn btn-primary">Play!</button></a>
              </div>
            </div>


            <div class="project-card" id="cardFour">
              <div class="image-container">
                <div class="project-image">
                  <img src="./assets/clicky_game.png"/>
                </div>
              </div>
              <div class="project-content">
                <h4>Memory-Click Game</h4>
                <p>A single page application built with React.</p>
                <a href="https://clicky-clicky-game.herokuapp.com/"><button class="btn-philosophy">Play!</button></a>
              </div>
            </div>
      	  </div>
      	</div>
        <div class="side-content-sm"></div>
      </div>


	<div class="row white box-shadow">
        <div class="side-content"></div>
        <div class="main-content">
          <div class="content-header">
            <a class="anchor" name="skills"></a>
            <h2>Skills</h2>
          </div>
          <div class="content-body">
            <ul class="ul-skills">
              <li class="li-skills">Javascript</li>
              <li class="li-skills highlight-skill">MongoDB</li>
              <li class="li-skills">HTML5</li>
              <li class="li-skills">CSS3</li>
              <li class="li-skills">Bootstrap</li>
              <li class="li-skills highlight-skill">Express</li>
              <li class="li-skills">jQuery</li>
              <li class="li-skills highlight-skill">ReactJS</li>
              <li class="li-skills">MySQL</li>
              <li class="li-skills">API Integration</li>
              <li class="li-skills highlight-skill">NodeJS</li>
              <li class="li-skills">RESTful Applications</li>
            </ul>
          </div>
        </div>
        <div class="side-content"></div>
    </div>

    <div class="row blue">
        <div class="side-content"></div>
        <div class="main-content">
          <div class="content-header">
            <a class="anchor" name="contact"></a>
            <h2 class="white-text">Contact Me</h2>
          </div>
          <div class="contact content-body">
            <form method="POST" action="mailto:juliusgcd@gmail.com" enctype="text/plain">
                <input type="hidden" name="_subject" value="Contact request from personal website"/>
                <input type="email" name="_replyto" placeholder="A Contact Email"/>
                <textarea name="message" placeholder="Your message... constructive criticism, advice, words of love, emotional support, mean comments; anything, really."></textarea>
                <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div class="side-content"></div>
      </div>

	<div class="row">
        <div class="side-content"></div>
        <div class="main-content">
          <div class="content-header">
          </div>
          <div class="content-body">
            <p>&copy; 2018 Julius G. Dorfman</p>
          </div>
          <div class="content-body">
            <p>This site was built utilizing: HTML5, CSS3, Javascript</p>
          </div>
        </div>
        <div class="side-content"></div>
    </div>

	</div>
</div>
			)
	}
}

export default Homepage;