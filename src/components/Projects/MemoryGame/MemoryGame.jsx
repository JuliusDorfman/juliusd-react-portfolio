import React, { Component } from 'react';
import "./MemoryGame.css";

export default class MemoryGame extends Component {
  render() {
    return (
      <article className="project-card" id="memory-game">
        <div className="project-outline-content">
          <h3 className="underline-projects"><a
            href="https://clicky-clicky-game.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Memory Game
            <i className="fas fa-link"></i>
          </a>
          </h3>
          <div className="project-outline-summary">
            <h4>Project Outline</h4>
            <p>
              Create a Web App based on the popular card matching memory
              game.
                  </p>
            <h4>My Role</h4>
            <p>
              Developed all Components, HTML, CSS, and JavaScript assets
              for the project.
          </p>
            <div className="project-outline-tools">
              <h4>Technologies</h4>
              <i className="fab fa-html5" alt="html5_logo"
                title="html5" />
              <i className="fab fa-css3-alt" alt="css3-alt"
                title="css3" />
              <i className="fab fa-js-square" alt="js-square"
                title="javascript" />
              <i className="fab fa-react" alt="react"
                title="react" />
            </div>
          </div>

          <div className="flavor" id="memory-game-flavor">
            <h4 className="project-title">
              <a
                href="https://clicky-clicky-game.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >Choose Your Fighter!
          </a>
            </h4>
            <div className="fighters-container">
              <span className="fighters-bg-overlay" />
              <div className="fighter-row">
                <span className="fighter-wrapper">
                  <span className="bounce-wrapper bounce-wrapper-ryu">
                    <img
                      className="fighter"
                      src="/assets/images/ryu-pixel.png"
                      alt="ryu"
                    />
                  </span>
                </span>
                <span className="fighter-wrapper">
                  <span className="bounce-wrapper bounce-wrapper-heih">
                    <img
                      className="fighter"
                      src="/assets/images/heihachi-pixel.png"
                      alt="heihachi"
                    />
                  </span>
                </span>
                <span className="fighter-wrapper">
                  <span className="bounce-wrapper bounce-wrapper-chun">
                    <img
                      className="fighter chunli"
                      id="chunli"
                      src="/assets/images/chunli-pixel.png"
                      alt="heihachi"
                    />
                  </span>
                </span>
              </div>
              <div className="fighter-row">
                <span className="fighter-wrapper">
                  <span className="bounce-wrapper-zang">
                    <img
                      className="fighter zangief"
                      src="/assets/images/zangief-pixel.png"
                      alt="heihachi"
                    />
                  </span>
                </span>
                <span className="fighter-wrapper">
                  <span className="bounce-wrapper bounce-wrapper-serv">
                    <img
                      className="fighter servbot"
                      src="/assets/images/servbot-pixel.png"
                      alt="heihachi"
                    />
                  </span>
                </span>
                <span className="fighter-wrapper">
                  <span className="bounce-wrapper bounce-wrapper-morg">
                    <img
                      className="fighter morrigan"
                      src="/assets/images/morrigan-pixel.png"
                      alt="morrigan"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }
}
