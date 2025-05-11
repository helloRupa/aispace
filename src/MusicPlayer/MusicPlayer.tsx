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
  let songTitle: string = "Song Title"; // Placeholder for the song title
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
          <span className="title-text">Now Playing: </span>{songTitle}
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