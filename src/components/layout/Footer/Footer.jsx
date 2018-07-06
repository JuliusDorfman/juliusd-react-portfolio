import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-component">
          <a
            className="footer-link"
            href="https://github.com/JuliusDorfman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/juliusgdorfman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            href="../../assets/docs/JuliusDorfman_Resume.docx"
            download="JuliusDorfman_Resume.docx"
          >
            <i className="far fa-file-word" />
          </a>
          <span>&copy; 2018 Julius G. Dorfman</span>
      </div>
    )
  }
}