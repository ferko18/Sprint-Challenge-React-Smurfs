import React, { Component } from 'react';
import './smurf.css'
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
      name: '',
      age: '',
      height: ''
    }
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    // add code to create the smurf using the api DUSTIN! You told us to place the function that changes the state in the component where the state is managed!!!!
    this.props.addSmurf(event, this.state.smurf);

    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
    
  };

  handleInputChange = event => {
    console.log(event.target.value);

    this.setState({
      smurf:{
      ...this.state.smurf,
      [event.target.name]: event.target.value}
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
