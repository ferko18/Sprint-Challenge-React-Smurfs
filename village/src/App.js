import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        this.setState({ error: err.response.message });
      });
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        this.props.history.push('/Smurfs')
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
      <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/SmurfForm">Add a Smurf</Link>
            <Link to="/Smurfs">Smurfs</Link>
          </div>
        </nav>
        <Route
          exact
          path="/SmurfForm"
          render={() => <SmurfForm addSmurf={this.addSmurf} />}
        />
        <Route
          exact
          path="/Smurfs"
          render={() => <Smurfs smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
