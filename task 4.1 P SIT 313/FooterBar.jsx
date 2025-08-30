import React from "react";

function FooterBar() {
  return (
    <footer style={{ background: "#222", color: "white", padding: "1rem", marginTop: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        
        {/* Explore */}
        <div>
          <h4>Explore</h4>
          <p>Home | Questions | Articles | Tutorials</p>
        </div>

        {/* Support */}
        <div>
          <h4>Support</h4>
          <p>FAQs | Help | Contact Us</p>
        </div>

        {/* Social */}
        <div>
          <h4>Stay connected</h4>
          <p>🌐 🐦 📸</p>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem" }}>
        DEV@Deakin 2022 • Privacy Policy • Terms • Code of Conduct
      </p>
    </footer>
  );
}

export default FooterBar;
