import forwardImage from '../images/forward-icon.png';
import playImage from '../images/play-icon.png';
import stopImage from '../images/stop-icon.png';

const MusicPlayer: React.FC = () => {
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
        <li><span className="artist title-text">Queen:</span> I Want to Break Free</li>
        <li><span className="artist title-text">Aha:</span> Take On Me</li>
        <li><span className="artist title-text">Human League:</span> Don't You Want Me Baby</li>
        <li><span className="artist title-text">Dead or Alive:</span> You Spin Me Round</li>
        <li><span className="artist title-text">Prince:</span> When Doves Cry</li>
      </ul>
    </div>
  );
};

export default MusicPlayer;