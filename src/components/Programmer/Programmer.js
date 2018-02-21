import React, { Component } from 'react';
import "./Programmer.css";

class programmer extends React.Component {
	constructor(props) {
		super(props);
	}
  
	render() { 
	return (
		<div>
		
          <div className="side-content"></div>
          <div className="main-content">
            <a 
              className="float-left"
              onClick={this.switchPersonHandler}
            >
              <button className="slide-left btn btn-slide">The Person</button></a>
            <div className="content-header">
              <a className="anchor" name="about"></a>
              
              <h2>The Programmer</h2>
            </div>
            <div className="content-body">
              <p>While working as an accountant for a company in Downtown, San Diego,
              I had been afforded the responsibility on several occasions to work closely with the IT department 
              on various projects. I had come to realize that the programming portion of these projects 
              were MUCH more interesting to me than the financial component.
              I began to put real thought into the agency I strive to maintain over my own life. 
              After a cumulative of two years professional experience in Accounting,
              I had enrolled into a Bootcamp at UCSD ext. and am unable to overstate just how 
              thrilled I am to be a member of a field I am passionate about. 
              I have begun regularly attending programming themed Meetup events in Downtown, San Diego to suppliment my newfound passion.
              </p>
            </div>
          </div>
          <div className="side-content" id="programmer"></div>

		</div>
		)
	}
}

export default programmer;
