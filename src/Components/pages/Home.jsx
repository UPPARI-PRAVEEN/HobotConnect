import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Web Development Concepts Tutorial</h1>
      <p>This application demonstrates the core concepts of web development: HTML, CSS, Animations, Transitions, and JavaScript.</p>
      <p>Navigate through the sections to learn about each concept with interactive examples.</p>

      <h2>Navigation</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <Link to="/html" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
              HTML - Structure and Forms
            </Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/css" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
              CSS - Styling and Layout
            </Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/animations" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
              Animations - CSS Animations
            </Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/transitions" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
              Transitions - Smooth Changes
            </Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/js" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
              JavaScript - Interactivity and Logic
            </Link>
          </li>
        </ul>
      </nav>

      <h2>Key Differences</h2>
      <div style={{ marginTop: '20px' }}>
        <h3>HTML vs CSS vs JavaScript</h3>
        <ul>
          <li><strong>HTML:</strong> Defines the structure and content of web pages using elements like headings, paragraphs, forms, etc.</li>
          <li><strong>CSS:</strong> Controls the presentation and styling of HTML elements, including colors, fonts, layouts, and positioning.</li>
          <li><strong>JavaScript:</strong> Adds interactivity and dynamic behavior to web pages, allowing manipulation of HTML and CSS.</li>
        </ul>

        <h3>Animations vs Transitions</h3>
        <ul>
          <li><strong>Transitions:</strong> Smooth changes between two states, triggered by user interactions or state changes.</li>
          <li><strong>Animations:</strong> More complex sequences of changes that can run automatically or be controlled programmatically.</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
