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
      rating: '',
      time: '',
    }
  }

  handleChangeInputName = async event => {
    const userName = event.target.value
    this.setState({ userName })
   }

  handleChangeInputRating = async event => {
    const rating = event.target.validity.valid
      ? event.target.value
      : this.state.rating

    this.setState({ rating })
  }

  handleChangeInputTime = async event => {
    const time = event.target.value
    this.setState({ time })
  }

  handleIncludeTweef = async () => {
    const { userName, rating, time } = this.state
    const arrayTime = time.split('/')
    const payload = { userName, rating, time: arrayTime }

    await api.insertTweef(payload).then(res => {
      window.alert(`Tweef inserted successfully`)
      this.setState({
        userName: '',
        rating: '',
        time: '',
      })
    })
  }


  render() {
    const { userName, rating, time } = this.state

    return(
      <Wrapper>
        <Title>Create Tweef </Title>
        <Label>Name: </Label>
        <InputText
          type="text"
          value={userName}
          onChange={this.handleChangeInputName}
        />

        <Label>Rating: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="0"
          max="10"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={rating}
          onChange={this.handleChangeInputRating}
        />

        <Label>Time: </Label>
        <InputText
          type="text"
          value={time}
          onChange={this.handleChangeInputTime}
        />

        <Button onClick={this.handleIncludeTweef}>Add Tweef</Button>
        <CancelButton href={'/tweefs/list'}>Cancel</CancelButton>

      </Wrapper>
    )
  }
}

export default TweefsInsert
