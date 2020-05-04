import React, { Component } from 'react'
import styled from 'styled-components'

import logo from './logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://vaske.codes">
                <img src={logo} width="35" height="50" alt="vaske.codes" />
            </Wrapper>
        )
    }
}

export default Logo
