import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class Mockup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: ''
    }
  }

  render() {
    return (
      <Wrapper>
        <p>This is the Mockup Page! Here shall at one point be: </p>
        <br />
        <p> User Selection via Drop Down. Handing over the user id to UserProfile Page. And Drag&Drop Input of .txt-Files for DB Initialization.  </p>
      </Wrapper>

    )
  }

}

export default Mockup
