import React, { Component } from 'react';
import "./CrystalGame.css";

export default class CrystalGame extends Component {
  render() {
    return (
      <article className="project-card" id="crystal-numbers">
        <div className="project-outline-content">
          <h3 className="underline-projects">
            <a
              href="https://crystal-numbers.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crystal Game
              <i className="fas fa-link"></i>
            </a>
          </h3>
          <div className="project-outline-summary">
            <h4>Project Outline</h4>
            <p>To create a single-page, javascript driven math game.</p>
            <h4>My Role</h4>
            <p>
              Developing all HTML, CSS, and JavaScript assets for the
              project.
              </p>
            <div className="project-outline-tools">
              <h4>Technologies</h4>
              <i className="fab fa-html5" alt="html5_logo" title="html5" />
              <i className="fab fa-css3-alt" alt="css3-alt" title="css3" />
              <i className="fab fa-js-square" alt="js-square" title="javascript" />
            </div>
            <div className="flavor crystal-game-flavor">
            <p>
              <span className="first-word">{`Challenging   `}</span> math
              game based on intuition and pragmatism. Collect crystals with
              undisclosed values. Beware: greed never pays; don't go over
              the goal value!
            </p>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/crystal_ruby.png"
          className="crystal-ruby"
          alt="ruby"
        />
        <img
          src="/assets/images/crystal_diamond.png"
          className="crystal-diamond"
          alt="diamond"
        />
        <img
          src="/assets/images/crystal_sapphire.png"
          className="crystal-sapphire"
          alt="sapphire"
        />
        <img
          src="/assets/images/crystal_emerald.png"
          className="crystal-emerald"
          alt="emerald"
        />
      </article>
    )
  }
}
