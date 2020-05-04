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

class TweefsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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
        const tweets = event.target.value
        this.setState({ tweets })
    }

    handleChangeInputFollows = async event => {
        const follows = event.target.value
        this.setState({ follows })
    }

    handleUpdateTweef = async () => {
        const { id, userName, tweets, follows } = this.state
        const arrayFollows = follows.split('/')
        const arrayTweets = tweets.split('/')
        const payload = { userName, tweets: arrayTweets, follows: arrayFollows }

        await api.updateTweefById(id, payload).then(res => {
            window.alert(`Tweef updated successfully`)
            this.setState({
                userName: '',
                tweets: '',
                follows: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const tweef = await api.getTweefById(id)

        this.setState({
            userName: tweef.data.data.userName,
            tweets: tweef.data.data.tweets.join('/'),
            follows: tweef.data.data.follows.join('/'),
        })
    }

    render() {
        const { userName, tweets, follows } = this.state
        return (
            <Wrapper>
                <Title>Create Tweef</Title>

                <Label>Username: </Label>
                <InputText
                    type="text"
                    value={userName}
                    onChange={this.handleChangeInputUserName}
                />

                <Label>Tweets: </Label>
                <InputText
                    type="text"
                    value={tweets}
                    onChange={this.handleChangeInputTweets}
                />

                <Label>Follows: </Label>
                <InputText
                    type="text"
                    value={follows}
                    onChange={this.handleChangeInputFollows}
                />

                <Button onClick={this.handleUpdateTweef}>Update Tweef</Button>
                <CancelButton href={'/tweefs/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TweefsUpdate
