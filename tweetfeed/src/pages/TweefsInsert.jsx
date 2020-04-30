import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
  className: 'h1',
})``

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class TweefsInsert extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      tweets: '',
      follows: '',
    }
  }

  handleChangeInputUserName = async event => {
    const userName = event.target.value
    this.setState({ userName })
   }

  handleChangeInputTweets = async event => {
    const tweets = event.target.validity.valid
      ? event.target.value
      : this.state.tweets

    this.setState({ tweets })
  }

  handleChangeInputFollows = async event => {
    const follows = event.target.value
    this.setState({ follows })
  }

  handleIncludeTweef = async () => {
    const { userName, tweets, follows } = this.state
    const arrayFollows = follows.split('/')
    const payload = { userName, tweets, follows: arrayFollows }

    await api.insertTweef(payload).then(res => {
      window.alert(`Tweef inserted successfully`)
      this.setState({
        userName: '',
        tweets: '',
        follows: '',
      })
    })
  }


  render() {
    const { userName, tweets, follows } = this.state

    return(
      <Wrapper>
        <Title>Create Tweef </Title>
        <Label>Name: </Label>
        <InputText
          type="text"
          value={userName}
          onChange={this.handleChangeInputUserName}
        />

        <Label>Tweets: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="0"
          max="10"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={tweets}
          onChange={this.handleChangeInputTweets}
        />

        <Label>Follows: </Label>
        <InputText
          type="text"
          value={follows}
          onChange={this.handleChangeInputFollows}
        />

        <Button onClick={this.handleIncludeTweef}>Add Tweef</Button>
        <CancelButton href={'/tweefs/list'}>Cancel</CancelButton>

      </Wrapper>
    )
  }
}

export default TweefsInsert
