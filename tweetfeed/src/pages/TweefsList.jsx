import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

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

class TweefsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

    render() {
        const { tweefs, isLoading } = this.state
        console.log('TCL: TweefsList -> render -> tweefs', tweefs)

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
            </Wrapper>
        )
    }
}

export default TweefsList
