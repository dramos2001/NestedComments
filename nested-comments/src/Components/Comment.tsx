import { useState } from "react";
import CommentForm from "./CommentForm";
import VoteComment from "./VoteComment";
import { CommentType } from "../App";
import styles from './Comment.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

interface Props {
  comment: CommentType;
}

export default function Comment({ comment }: Props) {
  const [replies, setReplies] = useState<CommentType[]>([]);
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<boolean>(false);

  const handleReplyButtonClick = () => {
    setIsReplying(true);
    setFormStatus(false);
  };

  const handleReplySubmit = (name: string, reply: string) => {
    const newReply: CommentType = {
      name: name,
      text: reply,
      replies: [],
      score: 0,
    };
    setReplies((replies) => [...replies, newReply]);
    setIsReplying(false);
    setFormStatus(false);
  };

  return (
    <div>
      <div>
        <h4>{comment.name}</h4>
        <p>{comment.text}</p>
        <button className={styles.replyButton} id="reply-button" onClick={handleReplyButtonClick}>
          <FontAwesomeIcon icon={faReply} />
        </button>
      </div>
      <VoteComment />
      {isReplying && !formStatus && (
        <CommentForm onSubmit={handleReplySubmit} />
      )}
      <div>
          {replies.map((reply, index) => {
            return <Comment key={index} comment={reply} />
          })}
      </div>
    </div>
  );
}
