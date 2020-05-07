import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class UpdateTweef extends Component {
  updateUser = event => {
    //event.preventDefault()

    window.location.href = `/tweefs/user/${this.props.id}`
  }

  render() {
    return <Update onClick={this.updateUser}>Update</Update>
  }
}

class DeleteTweef extends Component {
  deleteUser = event => {
    event.preventDefault()

    if(
      window.confirm(
        `Do tou want to delete the tweef ${this.props.userName} permanently?`,
      )
    ) {
      api.deleteTweefById(this.props.id)
      window.location.reload()
    }
  }

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>
  }
}

class ClickFollows extends Component {
  clickUser = event => {
    event.preventDefault()

    window.location.href = `/tweefs/user/${this.props.id}/follows`
  }

  render() {
    return <Button onClick={this.clickUser}>Follows</Button>
  }
}

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

  handleChangeInputUserName = async event => {
    const userName = event.target.value
    this.setState({ userName })
   }

  handleChangeInputTweets = async event => {
    const tweets = event.target.value
    this.setState({ tweets })
  }

  handleChangeInputFollows = async event => {
    const follows = event.target.value
    this.setState({ follows })
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
        <p>Id: {id}</p>
        <p>Username: {userName}</p>
        <ClickFollows id={id} userName={userName} />
        <p>Follows: {follows}</p>
        <p>Tweets: {tweets}</p>
        <span>
            <DeleteTweef userName={userName} />
        </span>
        <span>
            <UpdateTweef id={id} />
        </span>
      </Wrapper>

    )
  }

}

export default UserProfile
