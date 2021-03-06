import React, { Component } from 'react';
import "./LiriBot.css";

export default class LiriBot extends Component {
  render() {
    return (
      <article className="project-card" id="liri-node">
        <div className="project-outline-content">
          <h3 className="underline-projects">
            <a
              href="https://github.com/JuliusDorfman/liri-node-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liri-Bot
                <i className="fas fa-link"></i>
            </a>
          </h3>
          <div className="project-outline-summary">
            <h4>Project Outline</h4>
            <p>
              To create a Language Interpretation and Recognition
              Interface program.
                  </p>
            <h4>My Role</h4>
            <p>
              Create client interface. Establish communication between
              Spotify, Twitter, and OMDB APIs.
                  </p>
            <div className="project-outline-tools">
              <h4>Technologies</h4>
              <i className="fab fa-node"
                title="node"
              />
            </div>
          </div>
          <div className="liri-bot-flavor">
            <span className="liri-compiled-flavor">(Compiled Successfully!)</span>
            <a
              href="https://github.com/JuliusDorfman/liri-node-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="project-title">Liri-Node-App</h4>
            </a>
            <ul>
              <li>node liri</li>
              <li>this is loaded</li>

              <br />

              <li>
                <span className="cyan">
                  Takes the following cases: 'my-tweets',
                  'spotify-this-song', 'movie-this', 'do-what-it-says'
                    </span>
              </li>

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
              <li>
                Tier List Tier List: Pet Tier List, Holiday Tier List, Tea
                Topping Tier List
                  </li>

              <br />

              <li>Sun Oct 01 21:12:09 +0000 2017</li>
              <li>
                Holiday Tier List: Halloween. No other holidays matter
                  </li>

              <br />

              <li>Sun Oct 01 21:11:45 +0000 2017</li>
              <li>
                Tea Topping Tier: Boba, Lychee Jelly, Grass Jelly,
                everything else
                  </li>

              <br />

              <li>Sun Oct 01 21:11:11 +0000 2017</li>
              <li>
                Pet Tier List: Dogs, Birds, Fish, Lizards, Cats(cats suck)
                  </li>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}
