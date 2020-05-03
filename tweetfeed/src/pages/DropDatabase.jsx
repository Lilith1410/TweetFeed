import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
    margin: 0 30px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class DropDatabase extends Component {

   dropDatabase = async () => {

     await api.dropDatabase().then( res => {
       window.alert(`Database emptied. `)
     })
   }

  render() {
    return(
      <Wrapper>
        <Button onClick={this.dropDatabase}>Drop Database</Button>
      </Wrapper>
    )
  }

}

export default DropDatabase
