import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import { fadeInRightBig, fadeInLeftBig } from 'react-animations';
import "./Homepage.css";





export class Homepage extends Component {
	constructor(props){
		super(props);
		this.state = {
      hover: false,
      shown: false
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

componentDidMount() {
  var allAnchors = document.getElementsByTagName('a');
  console.log('AllAnchors', allAnchors);
  // allAnchors.addEventListener('click', function(event) {
  //   console.log("added click events")
  // });
}

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

goToPerson = (event) => {
console.log("hello");
};

goToProgrammer = (event) => {
console.log("goodbye");
};


	render() {
		return (

<div className="pages-homepage">
		<div className="navbar">
	      <a href="#aboutme" className="hover">About Me</a>
	      <a href="#projects" className="hover">Projects</a>
        <a href="#wips" className="hover">WIPs</a>
	      <a href="#skills" className="hover">Skills</a>
	      <a href="#contact" className="hover">Contact</a>
	    </div>

	    <div className="container" id="top"> 

      <div className="jumbotron">

        <div className="jumbotron-text">
        <StyleRoot>
          <h4 className="jumbotron-greeting" style={this.styles.fadeInRightBig}>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>H</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>e</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>y</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>,</span>
            <span>{`\n`}</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>I</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>'</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>m</span>
           </h4>
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
          <p>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>F</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>u</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>l</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>l</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>-</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>S</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>t</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>a</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>c</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>k</span>
            <span>{`\n`}</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>W</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>e</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}>b</span>
            <span>{`\n`}</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>D</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>e</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>v</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>e</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>l</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>o</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>p</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>e</span>
            <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>r</span>

          </p>
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
          <h4 className="jumbotron-thankyou" style={this.styles.fadeInLeftBig}>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>T</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>h</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>a</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>n</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>k</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>s</span>
          <span>{`\n`}</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>f</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>o</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>r</span>
          <span>{`\n`}</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>v</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>i</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>s</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>i</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>t</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>i</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>n</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>g</span>
          <span className="hover" onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}>!</span>
          </h4>
        </StyleRoot>
        <div id="down-arrow">
          <span><a href="#about"><i className="fa fa-chevron-down" aria-hidden="true" alt="downar"></i></a></span>
        </div>
      </div>

      <div className="row white box-shadow" id="aboutme">
        <div className="content-slider">

          <div className="side-content"></div>
          <div className="main-content the-person">
            <div className="content-header">
              <a className="anchor" name="about"></a>
              <h2>A Few Things About Me</h2>
            </div>
            <div className="content-body">
              <p>I enjoy cooking sous vide with various types of proteins, whilst almost always listening to history themed podcasts.
                I've probably spent an extended amount of time coding in every boba/coffee/tea spot in Clairemont and Balboa, San Diego.
                Up until recently, I also enjoyed going to the Dog Beach in Mission Bay ... before my dog left to Orlando, Florida with my parents (sad!).
              </p>
            </div>
          
            <div className="content-header">
              <a className="anchor" name="about"></a>
              <h2>My Path as a Programmer</h2>
            </div>
            <div className="content-body">
              <p>While working as an accountant for a company in Downtown, San Diego,
              I had been afforded the responsibility on several occasions to work closely with the IT department 
              on various projects. I had come to realize that the programming portion of these projects 
              were MUCH more interesting to me than the financial component.
              I began to put real thought into the agency I strive to maintain over my own life. 
              After a cumulative of two years professional experience in Accounting,
              I had enrolled into a Bootcamp at UCSD ext. and am unable to overstate just how 
              thrilled I am to be a member of a field I am passionate about. 
              I have begun regularly attending programming themed Meetup events in Downtown, San Diego to suppliment my newfound passion.
              </p>
            </div>
          </div>

          <div className="side-content"></div>
        </div>
      </div>

  <div className="row whitesmoke">
    <div className="side-content-sm"></div>
    <div className="main-content-lg ">
      <div className="content-header">
        <a className="anchor" name="wips"></a>
        <h2>What I'm Working on Now</h2>
      </div>
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
        <a href="/#"><button className="btn btn-primary">DEMO TBA</button></a>
        </div>
      </div>


      </div>


    <div className="side-content-sm"></div>
  </div>


 	<div className="row gainsboro">
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