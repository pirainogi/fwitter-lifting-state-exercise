import React, { Component } from 'react'
import Header from './Header'
import TweetsContainer from './TweetsContainer'

export default class App extends Component {

  state = {
    darkMode: false
  }

  handleToggle = () => {
    this.setState({
      darkMode: true
    })
  }

  render() {
    return (
      <div id="wrapper" className={this.state.darkMode ? "dark-mode" : null }>
        <Header handleToggle={this.handleToggle} darkMode={this.state.darkMode}/>
        <TweetsContainer />
      </div>
    )
  }
}
