import React, { Component } from 'react';

import Header from './pages/Header.js'
import ChooseFile from './pages/ChooseFile.js'
import Users from './pages/Users.js'
import Connections from './pages/Connections.js'
import Tweets from './pages/Tweets.js'
import Footer from './pages/Footer.js'

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header/>
        <ChooseFile/>
        <Users/>
        <Connections />
        <Tweets/>
        <Footer/>
      </div>
    );
  }

}

export default App;
