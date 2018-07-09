import React, { Component } from 'react';
import './NewsFrom.css';

export default class NewsFrom extends Component {
  render() {
    return (
      <article className="project-wrapper news-from-component">
        <div className="project-outline news-from-project-outline">
          <div className="project-outline-content">
            <a
              href="https://news-from.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="underline-projects">News-From</h3>
              <i className="fas fa-link"></i>
            </a>
            <h4>Project Outline</h4>
            <p>
              Create a news aggregator where the user is able to
              manipulate headlines from various news sources as data and
              output an aesthetic infographic based on findings
                  </p>
            <h4>My Role</h4>
            <p>
              Develop all React components, a from-scratch API, and establish
              database models and communication routes, user interface.
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
            <i className="fab fa-react" alt="react" title="react" />
            <img
              src="/assets/images/mLab-logo.jpg"
              alt="mLab-Logo"
              title="mLab"
            />
          </div>
        </div>

        <div className="project-card" id="news-from">
              <a
                href="https://news-from.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img
                  className="news-from-logo"
                  src="/assets/images/news-from-logo.png"
                  alt="news-from-logo"
                  title="news-from-logo"
                />
              </a>
            <div className="news-from-summary">
              Find the most recent headlines from the largest news media websites.
              Manipulate various metrics as you see fit and then output as
              an aesthetic infographic.
          </div>
          </div>
      </article>
    )
  }
}
