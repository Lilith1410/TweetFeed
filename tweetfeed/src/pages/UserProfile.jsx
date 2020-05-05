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
      userName:  '',
      follows: [],
      tweets: [],
    }
  }

  componentDidMount = async () => {
      const { id } = this.state
      const tweef = await api.getTweefById(id)

      this.setState({
          userName: tweef.data.data.userName,
          follows: tweef.data.data.follows,
          tweets: tweef.data.data.tweets
      })
  }

  render() {
    const { id, userName, follows, tweets } = this.state
    return (
      <Wrapper>
        <p>This is the User Profile Page! </p>
        <p>Id: {id}</p>
        <p>Username: {userName}</p>
        <p>Follows: {follows}</p>
        <p>Tweets: {tweets}</p>
      </Wrapper>

    )
  }

}

export default UserProfile
