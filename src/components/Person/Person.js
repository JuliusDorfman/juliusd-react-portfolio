import React, { Component } from 'react';
import "./Person.css";


class person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		personMode : null
	}
}

switchPersonHandler = (event) => {
	if (this.state.personMode === false) {
		this.setState({personMode: "programmer"})
		console.log('cicked to programmer', this.state.personMode);
	} else {
		this.setState({personMode: "person"})
		console.log('cicked to person', this.state.personMode);
	}
}

	render() { 
	return (
		<div>
		
          <div className="side-content" id="person"></div>
          <div className="main-content" >
            <a 
              className="float-right"
              onClick={this.props.goToProgrammer}
            >
              <button className="slide-right btn btn-slide">The Programmer</button>
            </a>
            <div className="content-header">
              <a className="anchor" name="about"></a>
              <h2>The Person</h2>
              <small>Subject to Sudden Updates</small>
            </div>
            <div className="content-body">
              <p>I enjoy cooking sous vide with various types of proteins, whilst almost always listening to history themed podcasts.
                  I've probably spent an extended amount of time coding in every boba/coffee/tea spot in Clairemont and Balboa, San Diego.
                  Up until recently, I also enjoyed going to the Dog Beach in Mission Bay ... before my dog left to Orlando, Florida with my parents (sad!).
              </p>
            </div>
          </div>
          <div className="side-content"></div>
          
		</div>
		)
}
}
export default person;