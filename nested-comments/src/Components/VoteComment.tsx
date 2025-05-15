import { useState } from "react";
import styles from "./VoteComment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong, faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

export default function VoteComment() {
  const [score, setCommentScore] = useState(0);

  const handleCommentUpvote = () => {
    setCommentScore(score + 1);
  };

  const handleCommentDownvote = () => {
    setCommentScore(score - 1);
  };

  return (
    <div>
      <button className={styles.voteButton} onClick={handleCommentUpvote}>
        <FontAwesomeIcon className={styles.upvote} icon={faArrowUpLong} />
      </button>
      <span className={styles.score}>{score}</span>
      <button className={styles.voteButton} onClick={handleCommentDownvote}>
        <FontAwesomeIcon className={styles.downvote} icon={faArrowDownLong} />
      </button>
    </div>
  );
}
