import React from 'react';

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <a href="http://www.vibezplayer.com"> Vibez Playlist Maker </a>
          SOLO PROJECT < br/>
          Vibez is a React/Redux web-app that allows users to create Spotify and YouTube playlists based on a desired vibe, utilizing last.fm song tags.
        <br/>
        <br/>
        <a href="https://www.npmjs.com/package/react-modular-audio-player"> react-modular-audio-player </a>
          SOLO PROJECT < br/>
          'react-modular-audio-player' is an easily customized and styleable React Component with controls for HTML5 audio, published on NPM.
        <br/>
        <br/>
        <a href="http://bit.ly/2FOhDMu"> Game Night </a>
          TEAM PROJECT < br/>
          Game Night is a React/Redux web-app that allows users to play tabletop style games in a modular, interactive space with video chat.
        <br/>
        <br/>
        <a href="http://www.mattsohn.com"> MattSohn.com </a>
          SOLO PROJECT < br/>
          I built a simple, single page website with React for professional voice over actor, Matt Sohn, based off of his design. I also recorded and engineered all of the audio examples.
      </div>
    </div>
  )
}