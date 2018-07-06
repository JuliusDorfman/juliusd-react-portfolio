import React, { Component } from 'react';
import "./HirohikoAraki.css";

export default class HirohikoAraki extends Component {
  render() {
    return (
      <div className="hirohiko-araki-component">
        <div className="project-outline jojo-fanpage-project-outline">
          <div className="project-outline-content">
            <a
              href="https://jojo-fanpage.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="underline-projects">Jojo-Fanpage</h3>
              <i className="fas fa-link"></i>
            </a>
            <h4>Project Outline</h4>
            <p>
              To create a simple Hirohiko Araki art fanpage. Visitor will be able to alternate
              Backgrounds and interact with move able fan-art as well as official art pieces.
                  </p>
            <h4>My Role</h4>
            <p>
              Solo Developer
                  </p>
          </div>
          <div className="project-outline-tools">
            <i className="fab fa-html5" alt="html5_logo" title="html5" />
            <i className="fab fa-css3-alt" alt="css3-alt" title="css3" />
            <i
              className="fab fa-js-square"
              alt="js-square"
              title="javascript"
            />
            <span className="no-icon"><p>Konva</p></span>
          </div>
        </div>

        <div className="project-card" id="jojo-fanpage">
          <span className="jojo-overlay" />
          <a
            href="https://jojo-fanpage.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="rohan-jolyne" src="/assets/images/rohan_jolyne.jpg" alt="rohan_jolyne" />
          </a>
          <img className="under_construction" src="/assets/images/under_construction.jpg" alt="under_construction" />
        </div>
      </div>
    )
  }
}
