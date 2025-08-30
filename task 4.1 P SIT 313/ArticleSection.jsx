import React from "react";

const articles = [
  {
    id: 1,
    title: "Understanding React Components",
    excerpt: "Reusable UI blocks explained with simple examples.",
    author: "Alex Morgan",
    rating: "⭐ 5",
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    id: 2,
    title: "State vs Props — When to Use What",
    excerpt: "Managing data flow in your React app.",
    author: "Priya Shah",
    rating: "⭐ 5",
    image: "https://picsum.photos/id/1016/600/400",
  },
  {
    id: 3,
    title: "Secure Frontends: 7 Quick Wins",
    excerpt: "Tips to harden your UI against threats.",
    author: "Jordan Lee",
    rating: "⭐ 5",
    image: "https://picsum.photos/id/1018/600/400",
  },
];

function ArticleSection() {
  return (
    <section style={{ padding: "3rem 1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Featured Articles
      </h2>

      {/* Card grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {articles.map((a) => (
          <div
            key={a.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              background: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={a.image}
              alt={a.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{a.title}</h3>
              <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#555" }}>
                {a.excerpt}
              </p>
              <p style={{ fontSize: "0.85rem", color: "#777" }}>
                By {a.author} • {a.rating}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.6rem 1.2rem",
            fontSize: "1rem",
            fontWeight: "600",
            background: "#2c7be5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          See all articles
        </button>
      </div>
    </section>
  );
}

export default ArticleSection;
