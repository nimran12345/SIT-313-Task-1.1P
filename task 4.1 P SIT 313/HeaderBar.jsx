import React from "react";

function HeaderBar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1.5rem",
        background: "#f5f5f5",
        borderBottom: "1px solid #ccc",
        boxSizing: "border-box",
      }}
    >
      {/* Left - Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.2rem", marginRight: "1rem" }}>
        DEV@Deakin
      </div>

      {/* Center - Search */}
      <div style={{ flex: 1, padding: "0 1rem", maxWidth: "500px" }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "100%",
            padding: "0.4rem 0.75rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Right - Links */}
      <nav style={{ display: "flex", gap: "1rem", marginLeft: "1rem" }}>
        <a href="#" style={{ textDecoration: "none", fontWeight: "600", color: "#333" }}>
          Post
        </a>
        <a href="#" style={{ textDecoration: "none", fontWeight: "600", color: "#333" }}>
          Login
        </a>
      </nav>
    </header>
  );
}

export default HeaderBar;
