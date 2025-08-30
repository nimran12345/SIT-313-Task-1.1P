import React from "react";

function IntroBanner() {
  return (
    <section
      style={{
        padding: "5rem 1rem",
        backgroundImage:
          "url('https://picsum.photos/1600/600?blur=3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Welcome to DEV@Deakin
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Explore articles, tutorials, and student projects all in one place.
      </p>
      <button
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          backgroundColor: "#2c7be5",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}

export default IntroBanner;
