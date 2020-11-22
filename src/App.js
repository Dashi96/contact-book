import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import EditUser from './components/users/EditUser';
import axios from 'axios';

class App extends Component {

  //Ajax get request, putting users to localstorage
  getData() {
    axios.get("http://demo.sibers.com/users")
      .then((result) => {
        localStorage.setItem('users', JSON.stringify(result.data));
      });
  };

  componentDidMount() {
    this.getData();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
