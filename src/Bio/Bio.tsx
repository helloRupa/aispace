import { useEffect, useState } from 'react';
import './bio.css';
import generateResponse from '../utils/ai';
import catSpinner from '../assets/images/catSpinner.gif';

const BIO_STORAGE_KEY = 'bioStorageKey';
const originalBio = "Hey there! I'm just a chill cat hangin' with my human. She knits so much yarn, it's wild! And Costco runs? Epic! I dream of the outside, headbanging to Nirvana like Kurt (dat hair!). Moshing would be awesome, but... tiny cat problems. Vet? No thanks! I love my human, but lemme down sometimes! Life's good, but a little dark sometimes stuck inside, ya know? Peace out!";
const storedBio = localStorage.getItem(BIO_STORAGE_KEY);

const Bio: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [bio, setBio] = useState<string>(storedBio || originalBio);

  useEffect(() => {
    localStorage.setItem(BIO_STORAGE_KEY, bio);
  }, [bio]);

  const updateBio = async () => {
    setIsLoading(true);

    try {
      const newBio = await generateResponse({ prompt: 'Generate a bio for a cat.' });
      setBio(newBio);
    } catch (error) {
      console.error('Error generating bio:', error);
      setHasError(true);
    }

    setIsLoading(false);
  }

  return (
    <div className="bio">
      <div className="header">
        <h1 className="title-text">Meow Life</h1>
        <button 
          className={isLoading ? "disabled" : ""} 
          disabled={isLoading}
          onClick={updateBio}>
            Update
        </button>
      </div>
      {
        isLoading && <div className="loading">
          <span>Loading...</span>
          <img src={catSpinner} alt="Loading Spinner" className="spinner" />
        </div>
      }
      {hasError ? <p className="error-text">Meowsas! Something has gone wrong.</p> : <p>{bio}</p>}
    </div>
  );
};

export default Bio;