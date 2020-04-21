import React, { Component} from 'react';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: ['Vanessa', 'Mark', 'Karl', 'Valerie'],
    }
  }

  render() {
    return (
      <div className='users'>
        <p>There are these users: </p>
          <ul>
            {this.state.users.map(user => (
              <li key={user}>{user}</li>
            ))}
          </ul>
      </div>
    )
  }

}

export default Users;
