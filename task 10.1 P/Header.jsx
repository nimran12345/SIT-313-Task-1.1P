import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>DEV@Deakin</h2>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Articles</a>
          <a href="#" className="nav-link">Tutorials</a>
          <a href="#" className="nav-link">Questions</a>
          <button className="login-btn">Login</button>
        </nav>
      </div>
    </header>
  )
}

export default Header