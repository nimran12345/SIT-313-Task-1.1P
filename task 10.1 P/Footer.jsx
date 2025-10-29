import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>DEV@Deakin</h3>
          <p>Your trusted platform for development resources and community</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <a href="#">Articles</a>
          <a href="#">Tutorials</a>
          <a href="#">Questions</a>
          <a href="#">Events</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DEV@Deakin. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer