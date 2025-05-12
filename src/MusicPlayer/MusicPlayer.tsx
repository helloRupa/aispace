import { useState, useEffect } from 'react';
import './musicPlayer.css';
import { Tracks, SongData } from './types';
import forwardImage from '../assets/images/forward-icon.png';
import playImage from '../assets/images/play-icon.png';
import stopImage from '../assets/images/stop-icon.png';

const Track: React.FC<Omit<SongData, 'id'>> = ({ artist, songTitle, filePath }) => {
  return (
    <li data-file={filePath}>
      <span className="artist title-text">{artist}:</span> {songTitle}
    </li>
  );
}

const MusicPlayer: React.FC<{tracks: Tracks}> = ({ tracks }) => {
  const [currentTrack, setCurrentTrack] = useState<SongData>(tracks[0]);

  useEffect(() => {
    if (!window.MIDIjs) {
      const script = document.createElement('script');
      script.src = '//www.midijs.net/lib/midi.js';

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="music-player">
      <div className="header">
        <div className="controls">
          <button className="backward-button"><img src={forwardImage} alt="skip back" /></button>
          <button className="play-button"><img src={playImage} alt="play" /></button>
          <button className="stop-button"><img src={stopImage} alt="stop" /></button>
          <button className="forward-button"><img src={forwardImage} alt="skip forward" /></button>
        </div>
        <div className="now-playing">
          <span className="title-text">Now Playing: </span>
          <span className="current-song-data">{currentTrack.artist} - {currentTrack.songTitle}</span>
        </div>
      </div>

      <ul className="tracks">
        {tracks.map((track) => (
          <Track key={track.id} artist={track.artist} songTitle={track.songTitle} filePath={track.filePath} />
        ))}
      </ul>
    </div>
  );
};

export default MusicPlayer;