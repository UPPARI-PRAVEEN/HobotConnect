import React from 'react'
import { Link } from 'react-router-dom'

const AnimationsPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>← Back to Home</Link>
      <h1>CSS Animations</h1>
      <p>CSS animations allow you to create complex sequences of changes over time without JavaScript.</p>

      <h2>🎯 Bounce Animation</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            animation: 'bounce 2s infinite',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Bounce
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h4>Animation Properties:</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li><strong>animation-name:</strong> bounce</li>
            <li><strong>animation-duration:</strong> 2s</li>
            <li><strong>animation-iteration-count:</strong> infinite</li>
            <li><strong>animation-timing-function:</strong> ease (default)</li>
          </ul>
          <h4>@keyframes Definition:</h4>
          <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px', fontSize: '12px' }}>
{`@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}`}
          </pre>
        </div>
      </div>

      <h2>↔️ Slide Animation</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{
            width: '300px',
            height: '60px',
            backgroundColor: 'blue',
            animation: 'slide 3s ease-in-out infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px'
          }}>
            Sliding Text
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h4>Animation Properties:</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li><strong>animation-name:</strong> slide</li>
            <li><strong>animation-duration:</strong> 3s</li>
            <li><strong>animation-iteration-count:</strong> infinite</li>
            <li><strong>animation-timing-function:</strong> ease-in-out</li>
          </ul>
          <h4>@keyframes Definition:</h4>
          <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px', fontSize: '12px' }}>
{`@keyframes slide {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}`}
          </pre>
        </div>
      </div>

      <h2>🔄 Rotate Animation</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{
            width: '120px',
            height: '120px',
            backgroundColor: 'green',
            animation: 'rotate 4s linear infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '50%'
          }}>
            Rotate
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h4>Animation Properties:</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li><strong>animation-name:</strong> rotate</li>
            <li><strong>animation-duration:</strong> 4s</li>
            <li><strong>animation-iteration-count:</strong> infinite</li>
            <li><strong>animation-timing-function:</strong> linear</li>
          </ul>
          <h4>@keyframes Definition:</h4>
          <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px', fontSize: '12px' }}>
{`@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`}
          </pre>
        </div>
      </div>

      <h2>🎨 Pulse Animation</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'purple',
            animation: 'pulse 2s ease-in-out infinite',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Pulse
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h4>Animation Properties:</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li><strong>animation-name:</strong> pulse</li>
            <li><strong>animation-duration:</strong> 2s</li>
            <li><strong>animation-iteration-count:</strong> infinite</li>
            <li><strong>animation-timing-function:</strong> ease-in-out</li>
          </ul>
          <h4>@keyframes Definition:</h4>
          <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px', fontSize: '12px' }}>
{`@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`}
          </pre>
        </div>
      </div>

      <h2>⚡ Animation Shorthand</h2>
      <div style={{ backgroundColor: '#e8f4fd', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
        <p>You can combine all animation properties into one shorthand:</p>
        <code style={{ backgroundColor: '#d4edda', padding: '10px', display: 'block', borderRadius: '5px', margin: '10px 0' }}>
          animation: bounce 2s infinite ease;
        </code>
        <p><strong>Order:</strong> name | duration | iteration-count | timing-function</p>
      </div>

      <h2>🎯 Key Animation Concepts</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '20px 0' }}>
        <div style={{ backgroundColor: '#fff3cd', padding: '15px', borderRadius: '5px' }}>
          <h4>@keyframes</h4>
          <p>Defines the animation sequence with percentage points (0%, 50%, 100%) or from/to keywords.</p>
        </div>
        <div style={{ backgroundColor: '#d1ecf1', padding: '15px', borderRadius: '5px' }}>
          <h4>Animation Properties</h4>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li>name: Links to @keyframes</li>
            <li>duration: How long it takes</li>
            <li>timing-function: Speed curve</li>
            <li>iteration-count: Repeat count</li>
          </ul>
        </div>
        <div style={{ backgroundColor: '#d4edda', padding: '15px', borderRadius: '5px' }}>
          <h4>vs Transitions</h4>
          <p>Animations run automatically and can be complex. Transitions are triggered by state changes and are simpler.</p>
        </div>
      </div>

      <style>
{`
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

@keyframes slide {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
`}
      </style>
    </div>
  )
}

export default AnimationsPage