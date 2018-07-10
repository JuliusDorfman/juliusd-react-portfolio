import React, { Component } from 'react';
import "./MemoryGame.css";

export default class MemoryGame extends Component {
  render() {
    return (
      <div className="memory-game-component">
        <div className="project-outline memory-game-project-outline">
          <div className="project-outline-content">
            <div className="project-outline-details">
              <a
                href="https://clicky-clicky-game.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="underline-projects">Memory Game</h3>
                <i className="fas fa-link"></i>
              </a>
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
            </div>
            <div className="project-outline-tools">
              <i className="fab fa-html5" alt="html5_logo"
                title="html5" />
              <i className="fab fa-css3-alt" alt="css3-alt"
                title="css3" />
              <i className="fab fa-js-square" alt="js-square"
                title="javascript" />
              <img src="/assets/images/jquery-icon.png" alt="jquery-icon" />
              <i className="fab fa-react" alt="react"
                title="react" />
            </div>
          </div>
        </div>

        <div className="project-card" id="card-four">
          <a
            href="https://clicky-clicky-game.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="project-title">Choose Your Fighter!</h4>
          </a>
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
    )
  }
}
