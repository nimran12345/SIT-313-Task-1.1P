const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Send welcome email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to DEV@Deakin Newsletter! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .button {
              display: inline-block;
              padding: 12px 30px;
              background-color: #667eea;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 20px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Welcome to DEV@Deakin! 🎉</h1>
          </div>
          <div class="content">
            <h2>Thank You for Subscribing!</h2>
            <p>Hi there,</p>
            <p>We're thrilled to have you join our community of developers and learners!</p>
            <p>You'll now receive:</p>
            <ul>
              <li>📚 Daily articles and tutorials</li>
              <li>💻 Coding tips and best practices</li>
              <li>🎓 Community highlights and Q&A</li>
              <li>🚀 Latest development trends</li>
            </ul>
            <p>Get ready to level up your development skills!</p>
            <a href="http://localhost:5173" class="button">Explore DEV@Deakin</a>
          </div>
          <div class="footer">
            <p>&copy; 2024 DEV@Deakin. All rights reserved.</p>
            <p>You're receiving this email because you subscribed to our newsletter.</p>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    
    console.log(`Newsletter subscription email sent to: ${email}`);
    res.status(200).json({ 
      message: 'Successfully subscribed! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Subscription failed. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});