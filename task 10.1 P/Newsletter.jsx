import { useState } from 'react'
import axios from 'axios'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })

  const handleSubscribe = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setMessage({ text: 'Please enter your email address', type: 'error' })
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' })
      return
    }

    setLoading(true)
    setMessage({ text: '', type: '' })

    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', {
        email: email
      })

      setMessage({ text: response.data.message, type: 'success' })
      setEmail('')
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.message || 'Failed to subscribe. Please try again.', 
        type: 'error' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>📧 Subscribe to Our Daily Newsletter</h2>
          <p>Get the latest articles, tutorials, and updates delivered to your inbox</p>
          
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              disabled={loading}
            />
            <button 
              type="submit" 
              className="newsletter-btn"
              disabled={loading}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter