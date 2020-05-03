import React, { Component } from 'react'
// using table only for the moment. change to drop down as soon as possible!
import ReactTable from 'react-table'
import api from '../api'
import Upload from './Upload'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Click = styled.div`
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

class Mockup extends Component {

  constructor(props) {
    super(props)

    this.state = {
        tweefs: [],
        columns: [],
    }
  }

  componentDidMount = async () => {
    await api.getAllTweefs().then(tweefs => {
      this.setState({
        tweefs: tweefs.data.data
      })
    })
  }

  render() {

    const { tweefs } = this.state

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
                defaultPageSize={10}
                showPageSizeOptions={true}
                minRows={0}
            />
        )}
        <br />
        <p>Upload the User Files here please :) </p>
        <Upload typeOf="user"/>

        <p>Upload the Tweet Files here please ^^  </p>
        <Upload typeOf="tweets"/>
      </Wrapper>

    )
  }

}

export default Mockup
