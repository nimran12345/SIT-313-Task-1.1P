import React, { useState } from "react";
import "./NewPost.css";
import { db, auth } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const QuestionForm = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");

  const handlePost = async () => {
    if (!title.trim() || !desc.trim()) {
      alert("Please fill in both the title and description.");
      return;
    }
    const tagArray = tags.split(",").map(t => t.trim()).filter(Boolean).slice(0, 3);
    await addDoc(collection(db, "questions"), {
      title,
      desc,
      tags: tagArray,
      userId: auth.currentUser ? auth.currentUser.uid : null,
      userEmail: auth.currentUser ? auth.currentUser.email : "guest",
      createdAt: serverTimestamp(),
    });
    alert("Question posted!");
    setTitle(""); setDesc(""); setTags("");
    if (onPost) onPost();
  };

  return (
    <div>
      <input className="input"
             placeholder="Start your question..."
             value={title}
             onChange={e => setTitle(e.target.value)} />
      <textarea className="textarea"
                placeholder="Describe your problem"
                value={desc}
                onChange={e => setDesc(e.target.value)} />
      <input className="input"
             placeholder="Add up to 3 tags, comma separated"
             value={tags}
             onChange={e => setTags(e.target.value)} />
      <button className="btn" onClick={handlePost}>Post</button>
    </div>
  );
};

export default QuestionForm;
