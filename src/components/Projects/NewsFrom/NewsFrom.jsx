import React, { Component } from 'react';
import './NewsFrom.css';

export default class NewsFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      highlightedHeadlines: {},
      didUserSearch: false
    }
  }


  render() {
    return (
      <article className="project-card" id="news-from">
        <div className="project-outline-content">
          <h3 className="underline-projects">
            <a
              href="https://news-from.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              News-From
                <i className="fas fa-link"></i>
            </a>
          </h3>
          <div className="project-outline-summary">
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
            <div className="project-outline-tools">
              <h4>Technologies</h4>
              <i className="fab fa-html5" alt="html5_logo" title="html5" />
              <i className="fab fa-css3-alt" alt="css3-alt" title="css3" />
              <i
                className="fab fa-js-square"
                alt="js-square"
                title="javascript"
              />
              <i className="fab fa-react" alt="react" title="react" />
            </div>
          </div>
          <div className="flavor news-from-flavor">
            <ul className="news-headlines">
              <li>
                <i className="far fa-newspaper"></i>
                &nbsp;Lost Dog travels 1000 miles to pee on owners carpet!&nbsp;
              <i className="far fa-newspaper"></i>
              </li>
              <li>
                <i className="far fa-newspaper"></i>
                &nbsp;Missippi's Literacy Program Improves!&nbsp;
              <i className="far fa-newspaper"></i>
              </li>
              <li>
                <i className="far fa-newspaper"></i>
                &nbsp;Birds all over the world now on Keto free diet!&nbsp;
              <i className="far fa-newspaper"></i>
              </li>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}





// Highlight Function Draft

// this.handleSubmit = this.handleSubmit.bind(this);
// this.handleChange = this.handleChange.bind(this);


// handleSubmit(e) {
//   e.preventDefault();
//   this.highlightWords(this.state.searchWord);
//   this.setState({ searchWord: "" });
//   this.setState({ didUserSearch: true });
// }

// handleChange(e) {
//   this.setState({ searchWord: e.target.value });
// }

// highlightWords(word) {
//   word = word.toLowerCase();
//   let newsHeadlines = document.getElementsByClassName('news-headlines')[0].innerText;
//   newsHeadlines = newsHeadlines.toLowerCase();

//   let renderHeadlines = newsHeadlines.replace(word, highlight)
//   console.log(renderHeadlines);
//   this.setState({ highlightedHeadlines: renderHeadlines });
// }




// {
//   this.state.didUserSearch
//     ?
//     this.state.highlightedHeadlines
//     :
//     <ul className="news-headlines">
//       <li>
//         <i className="far fa-newspaper"></i>
//         &nbsp;Lost Dog travels 1000 miles to pee on owners carpet!&nbsp;
//   <i className="far fa-newspaper"></i>
//       </li>
//       <li>
//         <i className="far fa-newspaper"></i>
//         &nbsp;Missippi's Literacy Program Improves!&nbsp;
//   <i className="far fa-newspaper"></i>
//       </li>
//       <li>
//         <i className="far fa-newspaper"></i>
//         &nbsp;Birds all over the world now on Keto free diet!&nbsp;
//   <i className="far fa-newspaper"></i>
//       </li>
//     </ul>
// }