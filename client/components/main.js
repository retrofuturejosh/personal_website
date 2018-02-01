import React from 'react';
import { NavBar, Player, About } from './index';

export const Main = (props) => {

  return (
    <div className="app">
      <NavBar/>
      <div className="main">
        <About/>
        <Player/>
      </div>
      <div className="footer">
      <h3>Contact: <a href="mailto:mattbsohn@gmail.com?subject=RE: Voice Over Services">mattbsohn@gmail.com</a></h3>
      </div>
    </div>
  )
}