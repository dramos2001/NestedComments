import { useState } from "react";

export default function VoteComment() {
  const [score, setCommentScore] = useState(0);

  const handleCommentUpvote = () => {
    setCommentScore(score + 1);
  };

  const handleCommentDownvote = () => {
    setCommentScore(score - 1);
  };

  return (
    <div className="comment-scores">
      <button onClick={handleCommentUpvote}>Up</button>
      <span>{score}</span>
      <button onClick={handleCommentDownvote}>Down</button>
    </div>
  );
}
