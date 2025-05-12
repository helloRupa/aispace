import './App.css';
import Profile from './Profile';
import Bio from './Bio';
import MusicPlayer from './MusicPlayer';
import { Tracks } from './MusicPlayer/types';
import Friends from './Friends';
import { FriendProps } from './Friends/types';
import Comments from './Comments';
import tomCat from './assets/images/tomcat.jpg'
import catLady from './assets/images/catLady.jpg';

const friends: FriendProps[] = [
  { name: 'TomCat', image: tomCat, altText: 'Besty 1: TomCat' },
  { name: 'Official Cat Lady', image: catLady, altText: 'Besty 2: Official Cat Lady' },
];

const playlist: Tracks = [
  { id: 1, artist: 'Queen', songTitle: 'I Want to Break Free', fileName: 'I-Want-To-Break-Free.mid' },
  { id: 2, artist: 'Aha', songTitle: 'Take On Me', fileName: 'Aha.mid' },
  { id: 3, artist: 'Human League', songTitle: "Don't You Want Me Baby", fileName: 'Dont-You-Want-Me.mid' },
  { id: 4, artist: 'Dead or Alive', songTitle: 'You Spin Me Round', fileName: 'Dead-or-Alive.mid' },
  { id: 5, artist: 'Prince', songTitle: 'When Doves Cry', fileName: 'Doves.mid' },
];

// const apiKey = process.env.REACT_APP_GEMINI_KEY;
function App() {
  return (
    <div className="App">
      <section className="left-side">
        <Profile />
        <Bio />
      </section>
      <section className="right-side">
        <MusicPlayer tracks={playlist} />
        <Friends friends={friends} />
        <Comments />
      </section>
    </div>
  );
}

export default App;
