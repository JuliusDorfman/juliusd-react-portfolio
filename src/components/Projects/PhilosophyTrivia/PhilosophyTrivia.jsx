import React, { Component } from 'react';
import "./PhilosophyTrivia.css";
import $ from 'jquery';

// Assets
import nietzsche from '../../../assets/images/nietzsche.jpg';
import rand from '../../../assets/images/aynrand.jpg';
import locke from '../../../assets/images/locke.jpg';
import paine from '../../../assets/images/paine.jpg';
import marx from '../../../assets/images/marx.jpg';
import confucius from '../../../assets/images/confucius.jpg';

export default class PhilosophyTrivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      philosophers: [nietzsche, rand, locke, paine, marx, confucius],
      quotes: [
        '"He who fights with monsters might take care lest he thereby become a monster. And if you gaze for long into an abyss, the abyss gazes also into you." \n -F. Nietzsche'
      ]
    }
  }

  componentDidMount() {
      const philosophers = [];
      const philPic = $('<img>');
      this.state.philosophers.map((philosopher, i) => {
        return philosophers.push(philosopher);
      });
      setInterval(function() {
        philPic
          .css({ opacity: 0, left: 30 + 'px' })
          .attr('src', philosophers[Math.floor(Math.random() * 6 - 0) + 0])
          .appendTo('.pic-wrapper-area')
          .animate({ opacity: 1, left: 30 + 'px' }, 1500);
  
        philPic.animate({ opacity: 0, left: 30 + 'px' }, 750);
      }, 2500);
  }

  render() {
    return (
      <div>

        <div className="project-outline philosophy-project-outline">
          <div className="project-outline-content">
            <a
              href="https://philosophy-quiz.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="underline-projects">Philosophy Trivia</h3>
              <i className="fas fa-link"></i>
            </a>
            <h4>Project Outline</h4>
            <p>To create a philosophy themed time-based quiz</p>
            <h4>My Role</h4>
            <p>
              Create client interface. Establish communication between
              Spotify, Twitter, and OMDB APIs.
                  </p>
          </div>
          <div className="project-outline-tools">
            <i className="fab fa-html5" alt="html5_logo" />
            <i className="fab fa-css3-alt" alt="css3-alt" />
            <i className="fab fa-js-square" alt="js-square" />
            <img src="/assets/images/jquery-icon.png" alt="jquery-icon" title="jquery" />
            <img
              src="/assets/images/bootstrap-logo.png"
              alt="bootstrap-logo"
              title="bootstrap"
            />
          </div>
        </div>

        <div className="project-card" id="card-three">
          <a
            href="https://philosophy-quiz.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="speech-bubble">Philosophy Trivia!</h4>
          </a>

          <div className="quote-wrapper">
            <p className="phil-quotes">{this.state.quotes}</p>
          </div>
        </div>

      </div>
    )
  }
}
