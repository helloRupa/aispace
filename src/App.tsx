import './App.css';
import Profile from './Profile';
import Bio from './Bio';
import MusicPlayer from './MusicPlayer';
import Friends from './Friends';
import { FriendProps } from './Friends/types';
import Comments from './Comments';
import tomCat from './images/tomcat.jpg'
import catLady from './images/catLady.jpg';

const friends: FriendProps[] = [
  { name: 'TomCat', image: tomCat, altText: 'Besty 1: TomCat' },
  { name: 'Official Cat Lady', image: catLady, altText: 'Besty 2: Official Cat Lady' },
]

// const apiKey = process.env.REACT_APP_GEMINI_KEY;
function App() {
  return (
    <div className="App">
      <section className="left-side">
        <Profile />
        <Bio />
      </section>
      <section className="right-side">
        <MusicPlayer />
        <Friends friends={friends} />
        <Comments />
      </section>
    </div>
  );
}

export default App;
