import React, { Component} from 'react';

class Tweets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: ['Tweet1', 'Tweet2', 'Tweet3', 'Tweet4', 'Tweet5'],
    }
  }

  render() {
    return (
      <div className='tweets'>
      <p>These are these Tweets: </p>
        <ul>
          {this.state.tweets.map(tweet => (
            <li key={tweet}>{tweet}</li>
          ))}
        </ul>
      </div>
    )
  }

}

export default Tweets;
