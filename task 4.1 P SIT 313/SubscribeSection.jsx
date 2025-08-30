import React from "react";

function SubscribeSection() {
  return (
    <section style={{ padding: "2rem", background: "#333", textAlign: "center", color: "white" }}>
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <div style={{ marginTop: "1rem" }}>
        <input type="email" placeholder="Enter your email" style={{ padding: "0.5rem" }} />
        <button style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>Subscribe</button>
      </div>
    </section>
  );
}

export default SubscribeSection;
