import React from 'react';
import { Audio } from './index'

export const Player = (props) => {

  return (
    <div className="audio">
      <div className="audio-title" >
        <h2>Examples </h2>
      </div>
      <div className="audio-examples">
        <div className="audio-examples-title">
          Audiobook
        </div>
        <Audio mp3="/audio/Pride and Prejudice.mp3" />
      </div>
      <div className="audio-examples">
        <div className="audio-examples-title">
          Educational
        </div>
        <Audio mp3="/audio/Test Cut.mp3" />
      </div>
      <div className="audio-examples">
        <div className="audio-examples-title">
          Podcast
        </div>
        <Audio mp3="/audio/Weekly Weather Minute.mp3" />
      </div>
    </div>
  )
}