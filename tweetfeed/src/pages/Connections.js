import React, { Component} from 'react';

class Connections extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connections: [
        ['Vanessa', 'Valerie'],
        ['Mark', 'Valerie', 'Karl', 'Vanessa'],
        ['Karl', 'Vanessa'],
        ['Valerie', 'Vanessa', 'Mark'],
      ]
    }
  }

  render() {
    return (
      <div className='connections'>
        <p>There are the Connections between the users: </p>
        <p>Michael follows Kent, Veronica</p>
        <p>Kent follows Vitalik</p>
        <p>Michael follows Vitalik, Kent</p>
        <p>Veronica follows Michael, Vitalik</p>
        <p>Vitalik follows Veronica</p>
      </div>
    )
  }

}

export default Connections;
