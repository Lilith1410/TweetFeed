import React, { Component} from 'react';

class Tweets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        'Vitalik> Things like tornado cash and uniswap, kyber and the like are successful in part because they are just tools that people can put into their existing workflows, and not ecosystems. We need more tools that are content with being tools and fewer attempts at ecosystems.',
        'Michael> There are only two hard things in Computer Science: cache invalidation, naming things and off-by-1 errors.',
        'Kent> For it should never feel the high complexity of the future of preference',
        'Veronica> Worried about shifting your focus from now another sister will surely become to have bugs, only!',
        'Michael> If your linter tortures you its complexity and were building'] ,
    }
    {/*Mind the ' in words like "we're". That ends the string. You have to check for that beforehand! */}
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
