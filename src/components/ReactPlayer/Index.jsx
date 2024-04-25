// Index.jsx

import React from 'react';
import ReactPlayer from 'react-player';
import { useHandles } from './reactPlayer';
import { FaPlay, FaPause, FaExpand, FaCompress, FaVolumeUp, FaVolumeDown } from 'react-icons/fa';
import './reactPlayer.css';

function Index() {
  const {
    play,
    isFullScreen,
    volume,
    handlePlay,
    handleFullScreen,
    handleVolumeUp,
    handleVolumeDown,
  } = useHandles();

  return (
    <div className="index-container">
      <h1>Tutorial Visto</h1>
      <ReactPlayer
        className="react-player"
        url='https://youtu.be/he_dPEEWeLY?si=drg1ZDjQe9D8i0-G'
        loop
        playing={play}
        volume={volume}
      />
      
      <div className="control-buttons-container">

        <button className="control-button" onClick={handlePlay}>
          {play ? <FaPause /> : <FaPlay />}
        </button>

        <button className="control-button" onClick={handleVolumeDown}>
          <FaVolumeDown />
        </button>
        
        <button className="control-button" onClick={handleVolumeUp}>
          <FaVolumeUp />
        </button>

        <button className="control-button" onClick={handleFullScreen}>
          {isFullScreen ? <FaCompress /> : <FaExpand />}
        </button>

      </div>
      <div>
        {`Volumen: ${Math.round(volume * 100)}%`}
      </div>
    </div>
  );
}

export default Index;
