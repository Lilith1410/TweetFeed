import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class Feed extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <p>This is the users Tweet Feed. </p>
      </Wrapper>

    )
  }

}

export default Feed
