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
      philosophers:[nietzsche, rand, locke, paine, marx, confucius]
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

      $('.crystal-ruby').css({
      "top": -100 + (Math.round(scrollTop/2))+"px"
      });

      $('.crystal-diamond').css({
      "top": -300 + (Math.round(scrollTop/1))+"px"
      });

      $('.crystal-sapphire').css({
      "top": -1000 + (Math.round(scrollTop/.5))+"px"
      });

      $('.crystal-emerald').css({
      "top": -1600 + (Math.round(scrollTop/.4))+"px"
      });

      $('.fighter-wrapper').click(function() {
          console.log(this.currentTarget)
      })

    });
  }

  philosopherAnimate = () => {
    const philosophers = [];
    const philPic = $('<img>').css({"opacity":0, "left": 1000+"px"});
    this.state.philosophers.map((philosopher, i) => {
        philosophers.push(philosopher)
  })
    for (let j=0; j < philosophers.length; j++){
      philPic
        .attr('src', philosophers[j])
        .appendTo('.pic-wrapper-area')
        .animate({"opacity":1,"left":0}, 2000)
      console.log('inside loop philosopher', philosophers[j]);
}

}


componentDidMount() {
  this.philosopherAnimate();

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

    <div className="project-outline">
      <div className="project-outline-content">
        <h3 className="underline-projects">Crystal Game</h3>
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
        <h3 className="underline-projects">Liri-Bot</h3>
        <h4>Project Outline</h4>
        <p>To create a Language Interpretation and Recognition Interface program.</p>
        <h4>My Role</h4>
        <p>Create client interface. Establish communication between Spotify, Twitter, and OMDB APIs.</p>
      </div>
      <div className="project-outline-tools">
          <i className="fab fa-node" />
          <img src="/assets/images/express-icon.png" />
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
        <h3 className="underline-projects">Philosophy Trivia</h3>
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
    </div>

    <div className="project-outline">
      <div className="project-outline-content">
        <h3 className="underline-projects">Memory Game</h3>
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
          <h4 className="project-title">Clicky Memory Game</h4>
        </a>
        <div className="fighters-container">
          <span className="fighters-bg-overlay"/>
          <div className="fighter-row">
            <span className="fighter-wrapper"><img className="fighter" src="/assets/images/ryu-pixel.png" alt="ryu" /></span>
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