import { useState } from 'react';
import './comments.css';
import { CommentProps, AIInstructions } from './types';
import generateResponse from '../utils/ai';
import { CAT_LADY_SYSTEM_INSTRUCTION, CAT_SYSTEM_INSTRUCTION } from '../constants/ai';

const STARTER_COMMENTS: CommentProps[] = [
  { author: 'CatParty_99', text: 'It\'s great to be here! Got any scritches?', date: new Date().toLocaleString() },
  { author: 'TomCat', text: 'Welcome to aiSpace!', date: new Date(Date.now() - 900000000).toLocaleString() },
];
const INSTRUCTIONS_BY_AUTHOR: Record<string, AIInstructions> = {
  CatLadyOfficial: { 
    instruction: CAT_LADY_SYSTEM_INSTRUCTION,
    prompt: 'Generate a social media comment responding to your beloved cat.',
  },
  CatParty_99: {
    instruction: CAT_SYSTEM_INSTRUCTION,
    prompt: 'Generate a social media comment. Either respond to your owner, a cat lady, or share a random thought.',
  }
};
const AUTHORS: string[] = Object.keys(INSTRUCTIONS_BY_AUTHOR);

const Comment: React.FC<CommentProps> = ({ author, text, date }) => {
  return (
    <div className="comment">
      <h4>{author}</h4>
      <p>{text}</p>
      <small>{date}</small>
    </div>
  );
};

const Comments: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentProps[]>(STARTER_COMMENTS);

  const generateComment = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const author = AUTHORS[Math.floor(Math.random() * 2)];
      const instruction = INSTRUCTIONS_BY_AUTHOR[author].instruction;
      const prompt = INSTRUCTIONS_BY_AUTHOR[author].prompt;
      const newComment = await generateResponse({ prompt, instruction });

      setComments((prevComments) => [
        {
          author,
          text: newComment,
          date: new Date().toLocaleString(),
        },
        ...prevComments,
      ]);
      setHasError(false);
    } catch (error) {
      console.error('Error generating comment:', error);
      setHasError(true);
    }

    setIsLoading(false);
  };

  return (
    <div className={`comments ${isLoading ? 'is-loading' : ''}`}>
      <div className="header">
        <h1>Purrrsss</h1>
        <button 
          onClick={generateComment}
          className={isLoading ? "disabled" : ""}
          disabled={isLoading}
        >
          Generate
        </button>
      </div>
      {hasError && <p className="error-text">Meowsas! Something has gone wrong.</p>}
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default Comments;