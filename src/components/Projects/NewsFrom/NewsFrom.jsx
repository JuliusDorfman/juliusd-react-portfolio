import React, { Component } from 'react';
import './NewsFrom.css';

export default class NewsFrom extends Component {
  render() {
    return (
      <article className="project-wrapper news-from-component">
        <div className="project-outline news-from-project-outline">
          <div className="project-outline-content">
            <div className="project-outline-details">
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
                Develop UX/UI, a from-scratch API, establish
                database models and communication routes.
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
            <ul>
              <li>
                <i class="far fa-newspaper"></i>
                  &nbsp;Lost Dog travels 1000 miles to pee on owners carpet!&nbsp;
                <i class="far fa-newspaper"></i>
              </li>
              <li>
                <i class="far fa-newspaper"></i>
                &nbsp;Missippi's Literacy Program Improves!&nbsp;
                <i class="far fa-newspaper"></i>
              </li>
              <li>
                <i class="far fa-newspaper"></i>
                &nbsp;Birds all over the world now on Keto free diet!&nbsp;
                <i class="far fa-newspaper"></i>
              </li>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}
