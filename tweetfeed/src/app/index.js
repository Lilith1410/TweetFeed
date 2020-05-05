import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TweefsInsert, TweefsUpdate, UserProfile, Mockup, Follows, Feed } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/tweefs/create" exact component={TweefsInsert} />
            <Route path="/tweefs/update/:id" exact component={TweefsUpdate} />
            <Route path="/tweefs/user/:id" exact component={UserProfile} />
            <Route path="/mockup" exact component={Mockup} />
            <Route path="/tweefs/user/:id/follows" exact component={Follows} />
            <Route path="/tweefs/user/:id/feed" exact component={Feed} />
          </Switch>
        </Router>
      </div>

    );
  }

}

export default App;
