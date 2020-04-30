import React, { Component } from 'react'
// using table only for the moment. change to drop down as soon as possible!
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class Mockup extends Component {

  constructor(props) {
    super(props)

    this.state = {
        users: [],
        columns: [],
        isLoading: false,
    }
  }

  componentDidMount = async () => {
      this.setState({ isLoading: true })

      await api.getAllTweefs().then(tweefs => {
          this.setState({
              users: tweefs.data.data,
              isLoading: false,
          })
      })
  }



  render() {

    const { users, isLoading } = this.state
    console.log('TCL: UserList -> render -> users', users)

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
      }
    ]

    let showTable = true
    if (!users.length) {
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
                data={users}
                columns={columns}
                loading={isLoading}
                defaultPageSize={10}
                showPageSizeOptions={true}
                minRows={0}
            />
        )}
      </Wrapper>

    )
  }

}

export default Mockup
