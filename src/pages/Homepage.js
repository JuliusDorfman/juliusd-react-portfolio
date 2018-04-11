import React, { Component } from 'react';
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

      $('.fadeinleft').each(function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'30px'},1000);
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

  <div className="project-outline">
    <div className="project-outline-content">
      <h3>Crystal Game</h3>
      <h4>Project Outline</h4>
      <p>To create a single-page, javascript driven math game.</p>
      <h4>My Role</h4>
      <p>Developing all HTML, CSS, and JavaScript assets for the project.</p>
    </div>
    <div className="project-outline-tools">
        <i class="fab fa-html5" />
        <i class="fab fa-css3-alt" />
        <i class="fab fa-js-square" />
    </div>
  </div>
          
          <div className="project-card" id="card-one">
            <img src="/assets/images/crystal_ruby.png" className="crystal-ruby" />
            <img src="/assets/images/crystal_diamond.png" className="crystal-diamond" />
            <img src="/assets/images/crystal_sapphire.png" className="crystal-sapphire" />
            <img src="/assets/images/crystal_emerald.png" className="crystal-emerald" />
            <a href="https://crystal-game-juliusd.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
              <h3 className="project-title">Crystal Game</h3>
            </a>
            <p><span className="first-word">{(`Challenging   `)}</span> math game based on intuition and pragmatism. Collect crystals with undisclosed values. Beware: greed never pays; don't go over the goal value!</p>
        	</div>

          <div className="divider" />

          <div className="project-card" id="card-two">
            <a href="https://github.com/JuliusDorfman/liri-node-app" target="_blank" rel="noopener noreferrer">
            <span className="liri-flavor">(Compiled Successfully!)</span>
            <h4 className="project-title">Liri-Node-App</h4>
            </a>
            <p> node liri <br />
                this is loaded
                <br />
                <br />
                <span className="cyan">Takes the following cases: 'my-tweets', 'spotify-this-song', <br />
                'movie-this', 'do-what-it-says'</span>
                <br />
                <br />
                $ my-tweets <br />
                this is loaded
                <br />
                <br />
                Sun Oct 01 21:15:19 +0000 2017 <br />
                Welcome to my Universe, compadre
                <br />
                <br />
                Sun Oct 01 21:15:03 +0000 2017 <br />
                Hey look who just walked in.
                <br />
                <br />
                Sun Oct 01 21:12:54 +0000 2017 <br />
                Tier List Tier List: Pet Tier List, Holiday Tier List, Tea Topping Tier List
                <br />
                <br />
                Sun Oct 01 21:12:09 +0000 2017 <br />
                Holiday Tier List: Halloween. No other holidays matter
                <br />
                <br />
                Sun Oct 01 21:11:45 +0000 2017 <br />
                Tea Topping Tier: Boba, Lychee Jelly, Grass Jelly, everything else
                <br />
                <br />
                Sun Oct 01 21:11:11 +0000 2017 <br />
                Pet Tier List: Dogs, Birds, Fish, Lizards, Cats(cats suck)
          </p>
          </div>

          <div className="divider" />

          <div className="project-card" id="card-three">
            <a href="https://philosophy-quiz.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <h4 className="project-title">Philosophy Trivia</h4>
            </a>
          </div>

          <div className="divider" />

          <div className="project-card" id="card-four">
            <a href="https://clicky-clicky-game.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <h4 className="project-title">Placeholder</h4>
            </a>
          </div>

  	</div>
  </div>

  <div className="divider" />

  <div className="row" id="wips">
    <div className="main-content">
        <div className="wips-header">
            <h2>What I'm Working on Now</h2>
        </div>
          <div className="project-card news-from-card">
            <div className="project-content">
            </div>
          </div>

  <div className="divider" />

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