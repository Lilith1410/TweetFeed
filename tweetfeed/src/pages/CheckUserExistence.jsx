import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

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

class CheckUserExistence extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      userId: '',
    }
  }

  handleChangeInputUserName = async event => {
    const userName = event.target.value
    this.setState({ userName })
   }

   handleExistenceCheck = async () => {
     const { userName } = this.state
     const payload = { userName }

     await api.getTweefByName(payload).then(tweef => {

       console.log(tweef)
       for( var i = 0; i < tweef.data.data.length; i++) {
         if(userName === tweef.data.data[i].userName) {
           this.setState({
             userId: tweef.data.data[i]._id
           })
         }
       }
       window.alert(`Tweef found. Id is ${this.state.userId}`)
     })
     this.setState({
       userId: ''
     })
   }

  render() {
    const { userName } = this.state

    return(
      <Wrapper>
        <InputText
          type="text"
          value={userName}
          onChange={this.handleChangeInputUserName}
        />

        <Button onClick={this.handleExistenceCheck}>Check DB for Name</Button>

      </Wrapper>
    )
  }

}

export default CheckUserExistence
