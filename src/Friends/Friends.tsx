import { useState } from 'react';
import './friends.css';
import { FriendProps } from './types';

const Friend: React.FC<FriendProps> = ({ name, image, altText }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <li 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="friend-name" style={{ display: isHovered ? 'block' : 'none' }}>Meow from {name}</div>
        <img src={image} alt={altText} />
      </li>
    </>
  )
}

const Friends: React.FC<{ friends: FriendProps[] }> = ({friends }) => {
  return (
    <div className="friends">
      <h1>Besties Pss pss pss...</h1>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.name} {...friend} />
        ))}
      </ul>
    </div>
  );
};

export default Friends;