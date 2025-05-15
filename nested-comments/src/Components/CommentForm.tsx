import { useState } from "react";
import styles from './CommentForm.module.css'

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
    <form className={styles.formContainer} onSubmit={handleFormSubmit}>
      <input
        className={styles.nameInput}
        type="text"
        name="nameInput"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <textarea
        className={styles.nameInput}
        name="commentInput"
        placeholder="Write your response here..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button className={styles.submitButton} type="submit" id="submit-button" disabled={canSubmitComment}>
        Submit
      </button>
    </form>
  );
}
