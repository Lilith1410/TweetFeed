import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class Follows extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      userName:  ''
    }
  }

  render() {
    return (
      <Wrapper>
        <p>Here is where the Follows List is supposed to go. This Page lists all the people the user follows in a table.  </p>
        <br />
        <p>List with clickable user names (redirect to profile). </p>
        <br />
        <p>Option to delete Person from Follows List with a delete button next to the user name.  </p>
      </Wrapper>

    )
  }

}

export default Follows
