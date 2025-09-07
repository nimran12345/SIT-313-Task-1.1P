import React from "react";
import "./NewPost.css";

const ArticleForm = ({ onPost }) => {
  const [title, setTitle] = React.useState("");
  const [abstract, setAbstract] = React.useState("");
  const [text, setText] = React.useState("");
  const [tags, setTags] = React.useState("");

  const handlePost = () => {
    setTitle("");
    setAbstract("");
    setText("");
    setTags("");
    if (onPost) onPost();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a descriptive title"
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter a 1-paragraph abstract"
        className="input"
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
      />
      <textarea
        placeholder="Enter full article text"
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
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

export default ArticleForm;
