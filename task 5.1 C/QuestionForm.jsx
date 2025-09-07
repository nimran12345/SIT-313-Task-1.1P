import React from "react";
import "./NewPost.css";

const QuestionForm = ({ onPost }) => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [tags, setTags] = React.useState("");

  const handlePost = () => {
    setTitle("");
    setDesc("");
    setTags("");
    if (onPost) onPost();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Start your question with how, what, why, etc."
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Describe your problem"
        className="textarea"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
        className="input"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button className="btn" onClick={handlePost}>
        Post
      </button>
    </div>
  );
};

export default QuestionForm;
