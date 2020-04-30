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
        <p>This is the Mockup Page! </p>
      </Wrapper>

    )
  }

}

export default Mockup
