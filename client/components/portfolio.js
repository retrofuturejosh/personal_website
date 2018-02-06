import React from 'react';

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <a href="http://www.vibezplayer.com"> Vibez Playlist Maker </a>
        <br />
          Vibez is a React/Redux web-app that allows users to create Spotify and YouTube playlists based on a desired vibe, utilizing last.fm song tags.
        <br/>
        <br/>
        <a href="http://bit.ly/2FOhDMu"> Game Night </a>
        <br />
          Game Night is a React/Redux web-app that allows users to play table top style games in a modular, interactive space with video chat.
        <br/>
        <br/>
        <a href="http://www.mattsohn.com"> MattSohn.com </a>
        <br />
          Website for professional voice over actor Matt Sohn built with React. I also recorded and engineered all of the audio examples.
      </div>
    </div>
  )
}