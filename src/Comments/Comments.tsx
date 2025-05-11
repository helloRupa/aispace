interface CommentProps {
  author: string;
  text: string;
  date: string;
}

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
  const sampleComments = [
    { author: 'Alice', text: 'This is a great post!', date: '2023-10-01' },
    { author: 'Bob', text: 'Thanks for sharing!', date: '2023-10-02' },
  ];

  return (
    <div className="comments">
      <div className="comments-header">
        <h1>Purrrsss</h1>
        <button>Generate</button>
      </div>
      {sampleComments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default Comments;