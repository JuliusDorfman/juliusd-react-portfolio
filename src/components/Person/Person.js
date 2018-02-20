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
              <p> 
                  I enjoy cooking sous vide with various types of proteins.
                  I make a consistent effort to hit the gym, almost always listening to history themed podcasts.
                  I regularly attend programming themed Meetup events in Downtown, San Diego.
                  I also enjoy going to the Dog Beach in Mission Bay ... before my dog left to Florida with my parents (sad!).
              </p>
            </div>
          </div>
          <div className="side-content"></div>
          
		</div>
		)
}
}
export default person;