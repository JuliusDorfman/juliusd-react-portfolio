import React, { Component } from 'react';
import "./ImagEdits";
export default class ImagEdits extends Component {
  render() {
    return (
      <article className="project-wrapper imagedits-component">
        <div className="project-card" id="imagedits">

          <div className="project-outline-content">
            <h3 className="underline-projects">
              <a
                href="https://juliusdorfman.github.io/imagEdits/"
                target="_blank"
                rel="noopener noreferrer"
              >
                imagEdits
              <i className="fas fa-link"></i>
              </a>
            </h3>
            <div className="project-outline-summary">
              <h4>Project Outline</h4>
              <p>
                To create a single-page, online application that edits and
                saves .jpg/.png files.
                  </p>
              <h4>My Role</h4>
              <p>
                Developing all HTML, CSS, and JavaScript assets for the
                project. Become Proficient in CamanJS plugin/library.
                  </p>
            </div>
            <div className="project-outline-tools">
              <i className="fab fa-html5" alt="html5_logo" title="html5" />
              <i className="fab fa-css3-alt" alt="css3-alt" title="css3" />
              <i className="fab fa-js-square" alt="js-square" title="javascript" />
            </div>
          </div>

          <a
            href="https://juliusdorfman.github.io/imagEdits/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">imagEdits</h3>
          </a>
        </div>

      </article >
    )
  }
}
