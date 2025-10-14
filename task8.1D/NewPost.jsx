import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";
import "./NewPost.css";

const NewPost = () => {
  const [postType, setPostType] = useState("question");
  const [posted, setPosted] = useState(false);

  const handlePost = () => {
    setPosted(true);
    setTimeout(() => setPosted(false), 2000);
  };

  return (
    <div className="container">
      <h3 className="heading">Select Post Type:</h3>
      <div className="type">
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === "question"}
            onChange={() => setPostType("question")}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="article"
            checked={postType === "article"}
            onChange={() => setPostType("article")}
          />
          Article
        </label>
      </div>

      <div className="section">
        <h3 className="heading2">What do you want to ask or share</h3>
        <p className="desc">
          This section is designed based on the type of the post.
        </p>

        {posted && <div className="popper">It has been posted</div>}

        {postType === "question" ? (
          <QuestionForm onPost={handlePost} />
        ) : (
          <ArticleForm onPost={handlePost} />
        )}
      </div>
    </div>
  );
};

export default NewPost;
