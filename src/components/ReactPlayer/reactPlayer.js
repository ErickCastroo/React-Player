
import { useState } from 'react';

export const useHandles = () => {
  const [play, setPlay] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [volumeMessage, setVolumeMessage] = useState(null);

  const handlePlay = () => {
    setPlay((prev) => !prev);
  };

  const handleFullScreen = () => {
    const player = document.querySelector('.react-player');

    if (!isFullScreen) {
      if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  const handleVolumeUp = () => {
    setVolume((prev) => {
      const newVolume = prev < 1 ? prev + 0.1 : 1;
      setVolumeMessage(`Volumen: ${Math.round(newVolume * 100)}%`);
      return newVolume;
    });
  };

  const handleVolumeDown = () => {
    setVolume((prev) => {
      const newVolume = prev > 0 ? prev - 0.1 : 0;
      setVolumeMessage(`Volumen: ${Math.round(newVolume * 100)}%`);
      return newVolume;
    });
  };

  return {
    play,
    isFullScreen,
    volume,
    volumeMessage,
    handlePlay,
    handleFullScreen,
    handleVolumeUp,
    handleVolumeDown,
  };
};
