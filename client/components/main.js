import React from 'react';
import { NavBar } from './index'

export const Main = (props) => {

  return (
    <div className="app">
    <NavBar />
      {/* <div id="side-bar" >
      </div> */}
      <div id="background-fader">
      </div>
      <div className="colors">
        <div className="colors-green">
          <div className="colors-green-title">
            About
          </div>
        </div>
        <div className="colors-purple">
          <div className="colors-purple-title">
              Portfolio
          </div>
        </div>
        <div className="colors-blue">
          <div className="colors-blue-title">
            Social Media
          </div>
        </div>
      </div>
    </div>
  )
}