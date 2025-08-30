import React from "react";

const tutorials = [
  {
    id: 1,
    title: "React Router Basics",
    excerpt: "Learn routing in React step by step.",
    author: "Sam Wilson",
    rating: "⭐ 5",
    image: "https://picsum.photos/id/1025/600/400",
  },
  {
    id: 2,
    title: "Express.js Crash Course",
    excerpt: "Backend fundamentals with Express.",
    author: "Lee Wong",
    rating: "⭐ 4.9",
    image: "https://picsum.photos/id/1020/600/400",
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    excerpt: "Master the building blocks of JS.",
    author: "Emma Brown",
    rating: "⭐ 5",
    image: "https://picsum.photos/id/1019/600/400",
  },
];

function TutorialSection() {
  return (
    <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
      <h2>Featured Tutorials</h2>

      {/* Card Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1100px",
          margin: "2rem auto",
        }}
      >
        {tutorials.map((t) => (
          <div
            key={t.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={t.image}
              alt={t.title}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0 0 .5rem" }}>{t.title}</h3>
              <p style={{ fontSize: ".9rem", color: "#555" }}>{t.excerpt}</p>
              <small style={{ color: "#777" }}>
                {t.rating} • {t.author}
              </small>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        style={{
          padding: "0.6rem 1.2rem",
          fontSize: "1rem",
          fontWeight: "600",
          background: "#2c7be5",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        See all tutorials
      </button>
    </section>
  );
}

export default TutorialSection;
