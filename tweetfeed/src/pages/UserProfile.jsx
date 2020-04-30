import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class UserProfile extends Component {

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
        <p>This is the User Profile Page! </p>
      </Wrapper>

    )
  }

}

export default UserProfile
