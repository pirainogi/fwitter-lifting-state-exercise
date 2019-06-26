import React, { Component } from 'react'
import TweetList from './TweetList'
import UserList from './UserList'
import { users } from './data/data'

export default class TweetsContainer extends Component {
  state = {
    users: users,
    currentUser: 0
  }

  handleUserClick = (userId) => {
    let foundUser = this.state.users.find(user => user.id === userId)
    let userIndex = this.state.users.indexOf(foundUser)
    this.setState({
      currentUser: userIndex
    })
  }

  render() {
    console.log("In TweetsContainer, state is", this.state)
    return (
      <div className="ui main container">
        <div className="ui grid">
          <div className="six wide column">
            <h2 className="ui header">Users</h2>
            <UserList users={this.state.users} handleUserClick={this.handleUserClick} />
          </div>
          <div className="ten wide column">
            <h2 className="ui header">Tweets</h2>
            <TweetList user={this.state.users[this.state.currentUser]} />
          </div>
        </div>
      </div>
    )
  }
}
