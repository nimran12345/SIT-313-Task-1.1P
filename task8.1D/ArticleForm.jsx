import React, { useState } from "react";
import "./NewPost.css";
import { db, auth } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ArticleForm = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Convert image to Base64 Data URL when selected
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result); // Base64 data
      setImagePreview(reader.result); // For preview
    };
    reader.readAsDataURL(selectedFile); // Convert to Base64
  };

  // Handle post submission
  const handlePost = async () => {
    if (!title.trim() || !text.trim()) {
      alert("Please provide at least a title and article text.");
      return;
    }

    const tagArray = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 3);

    setUploading(true);

    try {
      await addDoc(collection(db, "articles"), {
        title,
        abstract,
        text,
        tags: tagArray,
        imageUrl: file || "", // store Base64 string instead of Firebase Storage URL
        userId: auth.currentUser ? auth.currentUser.uid : null,
        userEmail: auth.currentUser ? auth.currentUser.email : "guest",
        createdAt: serverTimestamp(),
      });

      alert(" Article posted!");
      setTitle("");
      setAbstract("");
      setText("");
      setTags("");
      setFile(null);
      setImagePreview(null);
    } catch (e) {
      console.error("Error posting article:", e);
      alert("Failed to post article.");
    }

    setUploading(false);
    if (onPost) onPost();
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="input"
        placeholder="Enter 1-paragraph abstract"
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Enter full article text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="input"
        placeholder="Add up to 3 tags, comma separated"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      {/*  Image Upload and Preview */}
      <input type="file" accept="image/*" className="input" onChange={handleFileChange} />

      {imagePreview && (
        <div style={{ marginTop: "10px" }}>
          <p>📸 Image Preview:</p>
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: "200px", borderRadius: "8px", marginTop: "5px" }}
          />
        </div>
      )}

      <button className="btn" onClick={handlePost} disabled={uploading}>
        {uploading ? "Posting…" : "Post"}
      </button>
    </div>
  );
};

export default ArticleForm;
