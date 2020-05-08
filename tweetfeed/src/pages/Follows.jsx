import React, { Component } from 'react'
import api from '../api'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Click = styled.div`
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
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

class Follows extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      userName:  '',
      follows: [],
    }
  }

  componentDidMount = async () => {
    const { id } = this.state
    this.setState({ isLoading: true })

    await api.getTweefById(id).then(tweef => {
      this.setState({
        follows: tweef.data.data.follows,
        //isLoading: false,
      })
    })
  }

  render() {

    const { follows } = this.state

    const columns = [
      // Follows Name
      {
          Header: 'Follows',
          accessor: 'follows',
          //Cell: props => <span>{props.value.join(' / ')}</span>,
          Cell: props => <span>{follows}</span>
      },
      // Link to that Profile Page
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
      },
      // Delete Follows
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
    ]

    let showTable = true
    if (!follows.length) {
        showTable = false
    }

    return (
      <Wrapper>
        <p>Here is where the Follows List is supposed to go. This Page lists all the people the user follows in a table.  </p>
        <br />
        <p>Option to delete Person from Follows List with a delete button next to the user name.  </p>
        {showTable && (
            <ReactTable
                data={follows}
                columns={columns}
                defaultPageSize={10}
                showPageSizeOptions={true}
                minRows={0}
            />
        )}
      </Wrapper>

    )
  }

}

export default Follows
