import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInDown } from 'react-animations';
import nietzsche from "../assets/images/nietzsche.jpg";
import rand from "../assets/images/aynrand.jpg";
import locke from "../assets/images/locke.jpg";
import paine from "../assets/images/paine.jpg";
import marx from "../assets/images/marx.jpg";
import confucius from "../assets/images/confucius.jpg";
import $ from 'jquery';
import "./Homepage.css";

export class Homepage extends Component {
	constructor(props){
		super(props);
		this.state = {
      philosophers:[nietzsche, rand, locke, paine, marx, confucius],
      quotes:["\"He who fights with monsters might take care lest he thereby become a monster. And if you gaze for long into an abyss, the abyss gazes also into you.\" \n -F. Nietzsche"]
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
    }
  };

componentWillMount() {
      $(window).scroll(function() {
      var screenTop = $(document).scrollTop()
      var scrollTop = $(window).scrollTop();

        $('.jumbotron').css({
          height: function() {
            let height =  (1000 - screenTop) * .75;
            if (height >= 450) {
              return height
          }
        }
      })

      $('.fadeInLeft').each(function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'left':'0px'},1000);
            } 
        }); 

      $('#card-one').css({
      "background-position-y": (Math.round(scrollTop/4))+"px"
      });
    });


  }

  philosopherAnimate = () => {
    const philosophers = [];
    const philPic = $('<img>');
    this.state.philosophers.map((philosopher, i) => {
        return philosophers.push(philosopher)
  })
    setInterval(function() {
      philPic
        .css({"opacity":0, "left": 30+"px"})
        .attr('src', philosophers[Math.floor(Math.random() * 6 - 0) + 0])
        .appendTo('.pic-wrapper-area')
        .animate({"opacity":1,"left":30 + "px"}, 1500)

      philPic
        .animate({"opacity":0, "left":30 + "px"}, 750)

    }, 2500)

}


componentDidMount() {
  this.philosopherAnimate();
  $('.fade-in')
  .css({"opacity":0})
  .animate({"opacity": 1}, 1000)

    setInterval(function(){
      $('.crystal-ruby')
        .css({"top": -500 + "px", "left": 200 + "px"})
        .animate({"top": 1000 + "px"}, 10000);
      }, 10200)

    setInterval(function(){

      $('.crystal-diamond')
        .css({"top": -500 + "px", "left": 500 + "px"})
        .animate({"top": 1000 + "px"}, 5000);
      }, 5200)

    setInterval(function(){

      $('.crystal-sapphire')
        .css({"top": -500 + "px", "left": 1000 + "px"})
        .animate({"top": 1000 + "px"}, 3000);
      }, 3200)

    setInterval(function(){
      $('.crystal-emerald')
        .css({"top": -500 + "px", "left": 800 + "px"})
        .animate({"top": 1000 + "px"}, 2500);
      }, 2700)

}

	render() {
		return (

<div className="pages-homepage">

      <StyleRoot>
	     <nav 
        className="navbar"
        style={this.styles.fadeInDown}
        >
        <div className="nav-overlay" />
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
          <div id="scroll-down" className="fade-in">
            <div className="scroll-animation" />
          </div>
        </nav>
        </StyleRoot>

  <div className="container"> 
    <div className="jumbotron">
    <div className="jumbo-overlay" />
    <div className="jumbo-grain" />
      <StyleRoot>
        <div className="jumbotron-text">
          <span
            className="jumbo-flavor-left"
            style={this.styles.fadeIn}
            >
          </span>
            <h1 
              id="my-name"
              style={this.styles.fadeIn} >
               Julius G. Dorfman
            </h1>
            <p style={this.styles.fadeIn}>
            </p>
          <span
            className="jumbo-flavor-right"
            style={this.styles.fadeIn}
            >
          </span>

        </div>
      </StyleRoot>
    </div>

   	<div className="row" id="projects">
      <div className="main-content">


    <div className="project-outline">
      <div className="project-outline-content">
        <a href="https://github.com/JuliusDorfman/liri-node-app" target="_blank" rel="noopener noreferrer">
          <h3 className="underline-projects">Liri-Bot</h3>
        </a>
        <h4>Project Outline</h4>
        <p>To create a Language Interpretation and Recognition Interface program.</p>
        <h4>My Role</h4>
        <p>Create client interface. Establish communication between Spotify, Twitter, and OMDB APIs.</p>
      </div>
      <div className="project-outline-tools">
          <i className="fab fa-node" />
          <img src="/assets/images/express-icon.png" alt="express-icon"/>
      </div>
    </div>

    <div className="project-card" id="card-two">
      <a href="https://github.com/JuliusDorfman/liri-node-app" target="_blank" rel="noopener noreferrer">
        <span className="liri-flavor">(Compiled Successfully!)</span>
        <h4 className="project-title">Liri-Node-App</h4>
      </a>
      <ul> 
        <li>node liri</li> 
        <li>this is loaded</li>

        <br />
          
        <li><span className="cyan">Takes the following cases: 'my-tweets', 'spotify-this-song', 
          'movie-this', 'do-what-it-says'</span></li>
        
        <br />
          
        <li>$ my-tweets</li>
        <li>this is loaded</li>
        
        <br />                
        
        <li>Sun Oct 01 21:15:19 +0000 2017 </li>
        <li>Welcome to my Universe, compadre</li>
        
        <br />
        
        <li>Sun Oct 01 21:15:03 +0000 2017</li>
        <li>Hey look who just walked in.</li>
        
        <br />
        
        <li>Sun Oct 01 21:12:54 +0000 2017</li>
        <li>Tier List Tier List: Pet Tier List, Holiday Tier List, Tea Topping Tier List</li>
        
        <br />
        
        <li>Sun Oct 01 21:12:09 +0000 2017</li>
        <li>Holiday Tier List: Halloween. No other holidays matter</li>
        
        <br />
        
        <li>Sun Oct 01 21:11:45 +0000 2017</li>
        <li>Tea Topping Tier: Boba, Lychee Jelly, Grass Jelly, everything else</li>
        
        <br />
        
        <li>Sun Oct 01 21:11:11 +0000 2017</li> 
        <li>Pet Tier List: Dogs, Birds, Fish, Lizards, Cats(cats suck)</li> 
      </ul>
    </div>


    <div className="project-outline">
      <div className="project-outline-content">
        <a href="https://crystal-game-juliusd.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
          <h3 className="underline-projects">Crystal Game</h3>
        </a>
        <h4>Project Outline</h4>
        <p>To create a single-page, javascript driven math game.</p>
        <h4>My Role</h4>
        <p>Developing all HTML, CSS, and JavaScript assets for the project.</p>
      </div>
      <div className="project-outline-tools">
          <i className="fab fa-html5" alt="html5_logo"/>
          <i className="fab fa-css3-alt" alt="css3-alt"/>
          <i className="fab fa-js-square" alt="js-square"/>
      </div>
    </div>
            
    <div className="project-card" id="card-one">
      <img src="/assets/images/crystal_ruby.png" className="crystal-ruby" alt="ruby" />
      <img src="/assets/images/crystal_diamond.png" className="crystal-diamond" alt="diamond" />
      <img src="/assets/images/crystal_sapphire.png" className="crystal-sapphire" alt="sapphire" />
      <img src="/assets/images/crystal_emerald.png" className="crystal-emerald" alt="emerald" />
      <a href="https://crystal-game-juliusd.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
        <h3 className="project-title">Crystal Game</h3>
      </a>
      <p><span className="first-word">{(`Challenging   `)}</span> math game based on intuition and pragmatism. Collect crystals with undisclosed values. Beware: greed never pays; don't go over the goal value!</p>
  	</div>

    <div className="project-outline">
      <div className="project-outline-content">
        <a href="https://philosophy-quiz.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <h3 className="underline-projects">Philosophy Trivia</h3>
        </a>
        <h4>Project Outline</h4>
        <p>To create a philosophy themed time-based quiz</p>
        <h4>My Role</h4>
        <p>Create client interface. Establish communication between Spotify, Twitter, and OMDB APIs.</p>
      </div>
      <div className="project-outline-tools">
        <i className="fab fa-html5" alt="html5_logo"/>
        <i className="fab fa-css3-alt" alt="css3-alt"/>
        <i className="fab fa-js-square" alt="js-square"/>
        <img src="/assets/images/jquery-icon.png" alt="jquery-icon" />
        <img src="/assets/images/bootstrap-logo.png" alt="bootstrap-logo" />
      </div>
    </div>

    <div className="project-card" id="card-three">
    <a href="https://philosophy-quiz.herokuapp.com/" target="_blank" rel="noopener noreferrer">
      <h4 className="speech-bubble">Philosophy Trivia!</h4>
    </a>
      <div className="pic-wrapper-area">
      </div>
    <div className="quote-wrapper">
      <p className="phil-quotes">
      {this.state.quotes}
      </p>
    </div>
    </div>

    <div className="project-outline">
      <div className="project-outline-content">
        <a href="https://clicky-clicky-game.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <h3 className="underline-projects">Memory Game</h3>
        </a>
        <h4>Project Outline</h4>
        <p>Create a Web App based on the popular card matching memory game.</p>
        <h4>My Role</h4>
        <p>Developed all Components, HTML, CSS, and JavaScript assets for the project.</p>
      </div>
      <div className="project-outline-tools">
        <i className="fab fa-html5" alt="html5_logo"/>
        <i className="fab fa-css3-alt" alt="css3-alt"/>
        <i className="fab fa-js-square" alt="js-square"/>
        <img src="/assets/images/jquery-icon.png" alt="jquery-icon"/>
        <i className="fab fa-react" />
      </div>
    </div>

      <div className="project-card" id="card-four">
        <a href="https://clicky-clicky-game.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <h4 className="project-title">Choose Your Fighter!</h4>
        </a>
        <div className="fighters-container">
          <span className="fighters-bg-overlay"/>
          <div className="fighter-row">
            <span className="fighter-wrapper"><span className="bounce-wrapper"><img className="fighter" src="/assets/images/ryu-pixel.png" alt="ryu" /></span></span>
            <span className="fighter-wrapper"><img className="fighter" src="/assets/images/heihachi-pixel.png" alt="heihachi" /></span>
            <span className="fighter-wrapper"><img className="fighter chunli" id="chunli" src="/assets/images/chunli-pixel.png" alt="heihachi" /></span>
          </div>
          <div className="fighter-row">
            <span className="fighter-wrapper"><img className="fighter zangief" src="/assets/images/zangief-pixel.png" alt="heihachi" /></span>
            <span className="fighter-wrapper"><img className="fighter servbot" src="/assets/images/servbot-pixel.png" alt="heihachi" /></span>
            <span className="fighter-wrapper"><img className="fighter morrigan" src="/assets/images/morrigan-pixel.png" alt="morrigan" /></span>
          </div>
        </div>
      </div>

    	</div>
    </div>

  	<div className="row">
      <div id="page-footer">
        <div className="footer-links-wrapper">
          <a className="footer-link" href="https://github.com/JuliusDorfman" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a className="footer-link" href="https://www.linkedin.com/in/juliusgdorfman" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a className="footer-link" target="_blank" rel="noopener noreferrer" href="../assets/docs/JuliusDorfman_Resume.doc" download="JuliusDorfman_Resume.doc"><i className="far fa-file-word"></i></a>
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