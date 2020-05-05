import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
      return (
        <React.Fragment>
          <Link to="/" className="navbar-brand">
            TweetFeed
          </Link>
          <Collapse>
            <List>
              <Item>
                <Link to="/mockup" className="nav-link">
                  Mockup
                </Link>
              </Item>
              <Item>
                <Link to="/tweefs/user/id" className="nav-link">
                  User
                </Link>
              </Item>
              <Item>
                <Link to="/tweefs/user/id/follows" className="nav-link">
                  Follows
                </Link>
              </Item>
              <Item>
                <Link to="/tweefs/user/id/feed" className="nav-link">
                  Feed
                </Link>
              </Item>
            </List>
          </Collapse>
      </React.Fragment>
    )
  }
}

export default Links
