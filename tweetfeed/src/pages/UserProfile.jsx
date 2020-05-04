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

  componentDidMount = async () => {
      const { id } = this.state
      const tweef = await api.getTweefById(id)

      this.setState({
          userName: tweef.data.data.userName
      })
  }

  render() {
    const { id, userName } = this.state
    return (
      <Wrapper>
        <p>This is the User Profile Page! </p>
        <br/>
        <p>Username: {userName}</p>
        <br/>
        <p>Id: {id}</p>
      </Wrapper>

    )
  }

}

export default UserProfile
