import catImage from '../images/cat.jpg';

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <h1>CatParty_99</h1>
      <div className="details">
        <img src={catImage} alt="me, I'm a cat" />
        <div className="metadata">
          <span className="status">
            Feeling like moshing
          </span>
          <span className="age">
            <span className="title-text">Age:</span> 7
          </span>
          <span className="location">
            <span className="title-text">Location:</span> MoshPitania
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;