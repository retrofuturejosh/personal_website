import React, { Component } from 'react';
import { NavBar } from './index'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      about: 'unselected',
      portfolio: 'unselected',
      contact: 'unselected'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, section) {
    if (section === 'about' && this.state.about === 'unselected') {
      this.setState({about: 'selected', portfolio: 'unselected', contact: 'unselected'})
    }
    else if (section === 'portfolio' && this.state.portfolio === 'unselected') {
      this.setState({about: 'unselected', portfolio: 'selected', contact: 'unselected'})
    }
    else if (section === 'contact' &&  this.state.contact === 'unselected') {
      this.setState({about: 'unselected', portfolio: 'unselected', contact: 'selected'})
    }
    else {
      console.log('hi')
      this.setState({about: 'unselected', portfolio: 'unselected', contact: 'unselected'})
    }
  }

  render() {
    return (
      <div className="app">
      <NavBar />
        {/* <div id="side-bar" >
        </div> */}
        <div id="background-fader">
        </div>
        <div className="colors">
          <div className="colors-green"
            id={this.state.about}
            onClick={e => this.handleClick(e, 'about')}
          >
            <div className="colors-green-title">
              About
            </div>
          </div>
          <div className="colors-purple"
            id={this.state.portfolio}
            onClick={e => this.handleClick(e, 'portfolio')}
          >
            <div className="colors-purple-title">
                Portfolio
            </div>
          </div>
          <div className="colors-blue"
            id={this.state.contact}
            onClick={e => this.handleClick(e, 'contact')}
          >
            <div className="colors-blue-title">
              Contact
            </div>
          </div>
        </div>
      </div>
    )
  }
}