import './musicPlayer.css';
import { useState, useEffect } from 'react';
import { Tracks, SongData } from './types';
import forwardImage from '../assets/images/forward-icon.png';
import playImage from '../assets/images/play-icon.png';
import stopImage from '../assets/images/stop-icon.png';

const Track: React.FC<SongData & { onClick: (id: number) => void; isActive: boolean; isPlaying: boolean }> 
  = ({ id, artist, songTitle, filePath, onClick, isActive, isPlaying }) => {
  return (
    <li data-file={filePath} tabIndex={0} onClick={() => onClick(id)} className={ isActive ? 'active' : ' '}>
      { (isPlaying && isActive) && <span className="is-playing-icon">
        <img src={playImage} alt="playing" />
      </span> }
      <span className="artist title-text">{artist}:</span> {songTitle}
    </li>
  );
};

const MusicPlayer: React.FC<{tracks: Tracks}> = ({ tracks }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<SongData>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!window.MIDIjs) {
      const script = document.createElement('script');
      script.src = '//www.midijs.net/lib/midi.js';
      script.onload = () => {
        setIsDisabled(false);
      };
      script.onerror = () => {
        setIsDisabled(true);
        setHasError(true);
      };

      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (isDisabled) return;

    if (isPlaying) {
      window.MIDIjs.stop();
      // stop to play can't be too fast, will sound awful
      setTimeout(() => {
        window.MIDIjs.play(currentTrack.filePath);
      }, 500);
    } else {
      window.MIDIjs.stop();
    }
  }, [currentTrack, isPlaying, isDisabled]);

  const handleTrackClick = (id: number) => {
    const track: SongData = tracks.find((track) => track.id === id)!;
    setCurrentTrack(track);
  };

  const handleBackwardClick = () => {
    const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
    const newIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    const newTrack = tracks[newIndex];
    setCurrentTrack(newTrack);
  };

  const handleForwardClick = () => {
    const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
    const newIndex = (currentIndex + 1) % tracks.length;
    const newTrack = tracks[newIndex];
    setCurrentTrack(newTrack);
  };

  return (
    <div className={`music-player ${isDisabled ? 'disabled' : ''}`}>
      {hasError && <div className="error-message">Sorry, Error loading MIDIjs.js</div>}
      <div className="header">
        <div className="controls">
          <button className="backward-button" onClick={handleBackwardClick}>
            <img src={forwardImage} alt="skip back" />
          </button>
          <button className="play-button" onClick={() => { setIsPlaying(true) }}>
            <img src={playImage} alt="play" />
          </button>
          <button className="stop-button" onClick={() => { setIsPlaying(false) }}>
            <img src={stopImage} alt="stop" />
          </button>
          <button className="forward-button" onClick={handleForwardClick}>
            <img src={forwardImage} alt="skip forward" />
          </button>
        </div>
        <div className="now-playing">
          <span className="title-text">{ isPlaying ? 'Now Playing' : 'Stopped'}: </span>
          <span className="current-song-data">{currentTrack.artist} - {currentTrack.songTitle}</span>
        </div>
      </div>

      <ul className="tracks">
        {tracks.map((track) => (
          <Track 
            key={track.id}
            {...track}
            isActive={currentTrack.id === track.id}
            isPlaying={isPlaying}
            onClick={handleTrackClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default MusicPlayer;