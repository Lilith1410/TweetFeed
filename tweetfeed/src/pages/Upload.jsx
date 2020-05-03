import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class Upload extends Component {

  constructor(props) {

    super(props)

    this.state= {
      content: '',
      userName: '',
      follows: '',
      tweets: '',
      typeOf: this.props.typeOf,
    }

    this.handleUser = this.handleUser.bind(this)
    this.handleIncludeTweef = this.handleIncludeTweef.bind(this)
  }

  handleUser = async (content) => {

    // console.log(content)
    // console.log(typeof content)
    const contentLine = content.split("\n")
    // console.log(contentLine.length)

    for( var i = 0; i < contentLine.length; i++) {

      var tmp = contentLine[i].split(" follows ")
      var user = tmp[0]
      console.log(user)
      console.log(typeof user)
      this.setState({
        userName: user
      })
      console.log("State: " + this.state.userName)
      await this.handleIncludeTweef()
      {/*
      var follows = tmp[1]
      console.log(user)
      console.log(typeof user)
      console.log(follows)
      console.log(typeof follows)
      */}
    }
    window.alert(`Tweef inserted successfully`)
  }

  handleIncludeTweef = async () => {
    const { userName } = this.state
    const payload = { userName }

    // check if user exists! 

    await api.insertTweef(payload).then(res => {
      this.setState({
        userName: '',
      })
    })
  }

  handleTweets = (content) => {
    console.log(content)
  }

  onChangeHandler = async (file) => {
    let words = await file.text()

    if(this.state.typeOf === 'user') {
      this.handleUser(words)
    } else if (this.state.typeOf === 'tweets') {
      this.handleTweets(words)
    }
  }

  render() {
    return(
      <Wrapper>
        <input type="file"
                id="file"
                accept=".txt"
                onChange={e => this.onChangeHandler(e.target.files[0])}/>
      </Wrapper>
    )
  }

}

export default Upload
