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
            rating: '',
            follows: '',
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
        const follows = event.target.value
        this.setState({ follows })
    }

    handleUpdateTweef = async () => {
        const { id, userName, rating, follows } = this.state
        const arrayFollows = follows.split('/')
        const payload = { userName, rating, follows: arrayFollows }

        await api.updateTweefById(id, payload).then(res => {
            window.alert(`Tweef updated successfully`)
            this.setState({
                userName: '',
                rating: '',
                follows: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const tweef = await api.getTweefById(id)

        this.setState({
            userName: tweef.data.data.userName,
            rating: tweef.data.data.rating,
            follows: tweef.data.data.follows.join('/'),
        })
    }

    render() {
        const { userName, rating, follows } = this.state
        return (
            <Wrapper>
                <Title>Create Tweef</Title>

                <Label>Username: </Label>
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

                <Label>Follows: </Label>
                <InputText
                    type="text"
                    value={follows}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleUpdateTweef}>Update Tweef</Button>
                <CancelButton href={'/tweefs/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TweefsUpdate
