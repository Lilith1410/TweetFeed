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
      userId: '',
      follows: '',
      tweets: '',
      typeOf: this.props.typeOf,
    }

    this.handleUser = this.handleUser.bind(this)
    this.checkUserExistence = this.checkUserExistence.bind(this)
    this.inputTweefs = this.inputTweefs.bind(this)
  }

  handleUser = async (content) => {

    // console.log(content)
    // console.log(typeof content)
    const contentLine = content.split("\n")
    // console.log(contentLine.length)

    for( var i = 0; i < contentLine.length; i++) {

      var tmp = contentLine[i].split(" follows ")
      var user = tmp[0]

      this.setState({
        userName: user
      })
      //console.log("State: " + this.state.userName)
      await this.checkUserExistence()
      if( this.state.userId === '' ){
        await this.inputTweefs()

      } else {
        // nothing for now
      }
      this.setState({
          userId: '',
          userName: ''
      })
    }
    window.alert(`Database initialized successfully. `)
  }

  checkUserExistence = async () => {
    const { userName } = this.state
    const payload = { userName }

    await api.getTweefByName(payload).then(tweef => {
      for( var i = 0; i < tweef.data.data.length; i++) {
        if(userName === tweef.data.data[i].userName) {
          this.setState({
            userId: tweef.data.data[i]._id
          })
        }
      }
    })
  }

  inputTweefs = async () => {
    const { userName } = this.state
    const payload = { userName }

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
