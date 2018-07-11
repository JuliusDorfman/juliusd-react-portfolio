import React, { Component } from 'react';
import NewsFrom from "../Projects/NewsFrom";
import HirohikoAraki from "../Projects/HirohikoAraki";
import CrystalGame from "../Projects/CrystalGame";
import LiriBot from "../Projects/LiriBot";
import ImagEdits from "../Projects/ImagEdits";
import PhilosophyTrivia from "../Projects/PhilosophyTrivia";
import MemoryGame from "../Projects/MemoryGame";
import './ProjectsWrapper.css';

// import $ from 'jquery';

export default class ProjectsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderComponent: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let conditionalRender = e.currentTarget.children[0].attributes[1].value;
    console.log(conditionalRender);
    this.setState({ renderComponent: conditionalRender })
  }



  componentDidMount() {

    // var background_image_parallax = function($object, multiplier){
    //   multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    //   multiplier = 1 - multiplier;
    //   var $doc = $(document);
    //   $object.css({"background-attatchment" : "fixed"});
    //   $(window).scroll(function(){
    //     var from_top = $doc.scrollTop(),
    //         bg_css = '0px ' +(multiplier * from_top) + 'px';
    //     $object.css({"background-position" : bg_css });
    //   });
    // };

    // background_image_parallax($(".projects-wrapper-component"), .75);
  }

  render() {

   


    return (
      <div className="projects-wrapper-component">
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
