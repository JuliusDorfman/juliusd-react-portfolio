import React, { Component } from 'react';
import NewsFrom from "../Projects/NewsFrom";
import HirohikoAraki from "../Projects/HirohikoAraki";
import CrystalGame from "../Projects/CrystalGame";
import LiriBot from "../Projects/LiriBot";
import ImagEdits from "../Projects/ImagEdits";
import PhilosophyTrivia from "../Projects/PhilosophyTrivia";
import MemoryGame from "../Projects/MemoryGame";
import './ProjectsWrapper.css';

export default class ProjectsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderComponent: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  handleClick(e) {
    let conditionalRender = e.currentTarget.children[0].attributes[1].value;
    console.log(conditionalRender);
    this.setState({ renderComponent: conditionalRender })
  }


  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  onScroll = (e) => {
    let parallaxElement = document.getElementsByClassName('projects-wrapper-component')[0].style;
    console.log(parallaxElement)
    parallaxElement = "200px 2000px";
  }
  render() {
    return (
      <div className="projects-wrapper-component" onScroll={this.onScroll}>
        <aside className="projects-list-wrapper">
          <div className="projects-list-item" onClick={this.handleClick}>
            <h4 className="project-list-title" value="NewsFrom">News-From</h4>
          </div>
          <div className="projects-list-item" onClick={this.handleClick}>
            <h4 className="project-list-title" value="HirohikoAraki">Hirohiko Araki-Fanpage</h4>
          </div>
          <div className="projects-list-item" onClick={this.handleClick}>
            <h4 className="project-list-title" value="CrystalGame">Crystal Game</h4>
          </div>
          <div className="projects-list-item" onClick={this.handleClick}>
            <h4 className="project-list-title" value="LiriBot">Liri-Bot</h4>
          </div>
          <div className="projects-list-item" onClick={this.handleClick}>
            <h4 className="project-list-title" value="ImagEdits">ImagEdits</h4>
          </div>
          <div className="projects-list-item" onClick={this.handleClick}>
            <h4 className="project-list-title" value="PhilosophyTrivia">Philosophy Trivia</h4>
          </div>
          <div className="projects-list-item" onClick={this.handleClick}>
            <h4 className="project-list-title" value="MemoryGame">Memory Game</h4>
          </div>
        </aside>
        <section id="project-render-area">
          {(() => {
            switch (this.state.renderComponent) {
              case 'NewsFrom':
                return <NewsFrom />;
              case 'HirohikoAraki':
                return <HirohikoAraki />;
              case 'CrystalGame':
                return <CrystalGame />;
              case 'LiriBot':
                return <LiriBot />;
              case 'ImagEdits':
                return <ImagEdits />;
              case 'PhilosophyTrivia':
                return <PhilosophyTrivia />;
              case 'MemoryGame':
                return <MemoryGame />;
              default:
                return null;
            }
          })()}

        </section>
      </div >
    )
  }
}
