import { useState } from "react";

interface Props {
  onSubmit: (name: string, comment: string) => void;
}

export default function CommentForm({ onSubmit }: Props) {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(name, comment);
    setComment("");
    setName("");
  };

  const canSubmitComment = name.trim() === "" || comment.trim() === "";

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="nameInput"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <textarea
        name="commentInput"
        placeholder="Write your response here..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button type="submit" id="submit-button" disabled={canSubmitComment}>
        Submit
      </button>
    </form>
  );
}
