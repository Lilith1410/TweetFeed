import React, { Component } from 'react'
// using table only for the moment. change to drop down as soon as possible!
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import api from '../api'
import Upload from './Upload'
import DropDatabase from './DropDatabase'

import styled from 'styled-components'

const Title = styled.h1.attrs({
  className: 'h1',
})``

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Click = styled.div`
    cursor: pointer;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Label = styled.label`
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

class ClickUserProfile extends Component {
  clickUser = event => {
    event.preventDefault()

    window.location.href = `/tweefs/user/${this.props.id}`
  }

  render() {
    return <Click onClick={this.clickUser}>Profile</Click>
  }
}

class UpdateTweef extends Component {
  updateUser = event => {
    event.preventDefault()

    window.location.href = `/tweefs/update/${this.props.id}`
  }

  render() {
    return <Update onClick={this.updateUser}>Update</Update>
  }
}

class DeleteTweef extends Component {
  deleteUser = event => {
    event.preventDefault()

    if(
      window.confirm(
        `Do tou want to delete the tweef ${this.props.id} permanently?`,
      )
    ) {
      api.deleteTweefById(this.props.id)
      window.location.reload()
    }
  }

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>
  }
}

class Mockup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      tweets: '',
      follows: '',
      tweefs: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllTweefs().then(tweefs => {
      this.setState({
        tweefs: tweefs.data.data,
        isLoading: false,
      })
    })
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

  handleIncludeTweef = async () => {
    const { userName, tweets, follows } = this.state
    const arrayFollows = follows.split('/')
    const arrayTweets = tweets.split('/')
    const payload = { userName, tweets: arrayTweets, follows: arrayFollows }

    await api.insertTweef(payload).then(res => {
      window.alert(`Tweef inserted successfully`)
      this.setState({
        userName: '',
        tweets: '',
        follows: '',
      })
    })
  }

  render() {

    const { userName, tweets, follows, tweefs, isLoading } = this.state

    const columns = [
      {
          Header: 'ID',
          accessor: '_id',
          filterable: true,
      },
      {
          Header: 'userName',
          accessor: 'userName',
          filterable: true,
      },
      {
          Header: '',
          accessor: '',
          Cell: function(props) {
              return (
                  <span>
                      <ClickUserProfile id={props.original._id} userName={props.original.userName} />
                  </span>
              )
          },
      },{
          Header: 'Tweets',
          accessor: 'tweets',
          Cell: props => <span>{props.value.join(' / ')}</span>,
      },
      {
          Header: 'Follows',
          accessor: 'follows',
          Cell: props => <span>{props.value.join(' / ')}</span>,
      },
      {
          Header: '',
          accessor: '',
          Cell: function(props) {
              return (
                  <span>
                      <DeleteTweef id={props.original._id} />
                  </span>
              )
          },
      },
      {
          Header: '',
          accessor: '',
          Cell: function(props) {
              return (
                  <span>
                      <UpdateTweef id={props.original._id} />
                  </span>
              )
          },
      },
    ]

    let showTable = true
    if (!tweefs.length) {
        showTable = false
    }

    return (
      <Wrapper>
        <p>This is the Mockup Page! Here shall at one point be: </p>
        <br />
        <p> User Selection via Drop Down. Handing over the user id to UserProfile Page. And Drag&Drop Input of .txt-Files for DB Initialization.  </p>
        <br />
        {showTable && (
            <ReactTable
                data={tweefs}
                columns={columns}
                loading={isLoading}
                defaultPageSize={10}
                showPageSizeOptions={true}
                minRows={0}
            />
        )}
        <p>Delete complete Database here: </p>
        <DropDatabase/>
        <br />
        <p>Upload the User Files here please :) </p>
        <Upload typeOf="user"/>

        <p>Upload the Tweet Files here please ^^  </p>
        <Upload typeOf="tweets"/>
        <br/>
        <Title>Create Tweef </Title>
        <Label>Name: </Label>
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

        <Button onClick={this.handleIncludeTweef}>Add Tweef</Button>
        <CancelButton href={'/tweefs/list'}>Cancel</CancelButton>
      </Wrapper>

    )
  }

}

export default Mockup
