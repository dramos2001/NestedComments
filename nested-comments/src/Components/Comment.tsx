import { useState } from "react";
import CommentForm from "./CommentForm";
import VoteComment from "./VoteComment";
import { CommentType } from "../App";

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
        <button id="reply-button" onClick={handleReplyButtonClick}>
          Reply
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
