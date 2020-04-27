import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TweefsList, TweefsInsert, TweefsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/tweefs/list" exact component={TweefsList} />
            <Route path="/tweefs/create" exact component={TweefsInsert} />
            <Route path="/tweefs/update/:id" exact component={TweefsUpdate} />
          </Switch>
        </Router>
      </div>

    );
  }

}

export default App;
