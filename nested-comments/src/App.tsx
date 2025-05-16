import styles from  './App.module.css'
import { useState } from 'react'
import CommentForm from './Components/CommentForm';
import Comment from './Components/Comment';

export type CommentType = {
  name: string;
  text: string;
  replies: Array<string>;
  score: number;
};

function App() {
  const [comments, setComments] = useState<CommentType[]>([]);

  const handleCommentSubmit = (name: string, text: string) => {
    const newComment: CommentType = {
      name: name,
      text: text,
      replies: [],
      score: 0,
    };
    setComments(comments => [...comments, newComment]); 
  };

  return (
    <>
      <div className={styles.commentForm}>
        <h1><b>New Post</b></h1>
        <CommentForm onSubmit={handleCommentSubmit}/>
      </div>
      <div>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </>
  )
}

export default App
