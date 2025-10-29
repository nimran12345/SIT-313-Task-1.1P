import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Welcome to DEV@Deakin</h1>
          <p>Your gateway to development resources, tutorials, and community</p>
        </section>
        
        <section className="features-section">
          <div className="feature-card">
            <h3>📚 Articles</h3>
            <p>Read insightful articles from experienced developers</p>
          </div>
          <div className="feature-card">
            <h3>💻 Tutorials</h3>
            <p>Learn through hands-on coding tutorials</p>
          </div>
          <div className="feature-card">
            <h3>🎓 Questions</h3>
            <p>Ask questions and get help from the community</p>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App