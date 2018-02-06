import React, { Component } from 'react';
import { NavBar, About, Portfolio, Contact } from './index'

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
    if (this.state.contact === 'selectedblue') {
      this.setState({contact: 'unselectedblue'})
    }
    if (section === 'about' && this.state.about === 'unselected') {
      this.setState({about: 'selected', portfolio: 'unselected'})
    }
    else if (section === 'portfolio' && this.state.portfolio === 'unselected') {
      this.setState({about: 'unselected', portfolio: 'selected'})
    }
    else if (section === 'contact' &&  (this.state.contact === 'unselectedblue' || this.state.contact === 'unselected')) {
      this.setState({about: 'unselected', portfolio: 'unselected', contact: 'selectedblue'})
    }
    else if (section === 'contact' && this.state.contact === 'selectedblue') {
      this.setState({contact: 'unselectedblue'})
    }
    else {
      this.setState({about: 'unselected', portfolio: 'unselected'})
    }
  }

  render() {
    return (
      <div className="app">
      <NavBar />
      <div id="background-fader">
      </div>
      <div className="colors">

  {/* //ABOUT */}
        <div className="colors-green" id={this.state.about}>
          <div className="colors-green-title"
            onClick={e => this.handleClick(e, 'about')}>
            About
          </div>
          {this.state.about === 'selected' ? 
            <About />
          :
            null
          }
        </div>

  {/* //PORTFOLIO */}   
        <div className="colors-purple" id={this.state.portfolio}>
          <div className="colors-purple-title"
            onClick={e => this.handleClick(e, 'portfolio')}>
              Portfolio
          </div>
          {this.state.portfolio === 'selected' ? 
            <Portfolio />
          :
            null
          }
        </div>

  {/* //CONTACT */} 
        <div className="colors-blue"
          id={this.state.contact}
          onClick={e => this.handleClick(e, 'contact')}
        >
          <div className="colors-blue-title">
            Contact
          </div>
          {this.state.contact === 'selectedblue' ? 
            <Contact />
          :
            null
          }
        </div>
      </div>
      </div>
    )
  }
}