import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TransitionsPage = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>← Back to Home</Link>
      <h1>CSS Transitions</h1>
      <p>CSS transitions provide smooth changes between different states of an element.</p>

      <h2>🎨 Color Transition</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div
            style={{
              width: '200px',
              height: '100px',
              backgroundColor: isHovered ? 'red' : 'blue',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.5s ease, transform 0.3s ease',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              borderRadius: '5px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Hover Me!
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h4>Transition Properties:</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li><strong>transition-property:</strong> background-color, transform</li>
            <li><strong>transition-duration:</strong> 0.5s, 0.3s</li>
            <li><strong>transition-timing-function:</strong> ease</li>
            <li><strong>Trigger:</strong> :hover pseudo-class</li>
          </ul>
          <h4>CSS Code:</h4>
          <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px', fontSize: '12px' }}>
{`transition: background-color 0.5s ease,
            transform 0.3s ease;`}
          </pre>
        </div>
      </div>

      <h2>🔄 Transform Transition</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div
            style={{
              width: '200px',
              height: '100px',
              backgroundColor: isClicked ? 'green' : 'orange',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              transform: isClicked ? 'rotate(360deg)' : 'rotate(0deg)',
              borderRadius: isClicked ? '50%' : '0%',
              border: '3px solid white'
            }}
            onClick={() => setIsClicked(!isClicked)}
          >
            Click Me!
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h4>Transition Properties:</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li><strong>transition-property:</strong> all</li>
            <li><strong>transition-duration:</strong> 0.8s</li>
            <li><strong>transition-timing-function:</strong> cubic-bezier(...)</li>
            <li><strong>Trigger:</strong> JavaScript click event</li>
          </ul>
          <h4>CSS Code:</h4>
          <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px', fontSize: '12px' }}>
{`transition: all 0.8s
           cubic-bezier(0.68, -0.55, 0.265, 1.55);`}
          </pre>
        </div>
      </div>

      <h2>📏 Size Transition</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'purple',
                transition: 'width 1s ease-in-out',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '5px'
              }}
              onMouseEnter={(e) => e.target.style.width = '200px'}
              onMouseLeave={(e) => e.target.style.width = '100px'}
            >
              Width
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'pink',
                transition: 'height 1s ease-in-out',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '5px'
              }}
              onMouseEnter={(e) => e.target.style.height = '200px'}
              onMouseLeave={(e) => e.target.style.height = '100px'}
            >
              Height
            </div>
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h4>Transition Properties:</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li><strong>transition-property:</strong> width, height</li>
            <li><strong>transition-duration:</strong> 1s</li>
            <li><strong>transition-timing-function:</strong> ease-in-out</li>
            <li><strong>Trigger:</strong> :hover pseudo-class</li>
          </ul>
          <h4>CSS Code:</h4>
          <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px', fontSize: '12px' }}>
{`transition: width 1s ease-in-out;
transition: height 1s ease-in-out;`}
          </pre>
        </div>
      </div>

      <h2>⌨️ Form Focus Transition</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <form style={{ maxWidth: '300px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label
                htmlFor="transition-input"
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease'
                }}
              >
                Focus on Input:
              </label>
              <input
                type="text"
                id="transition-input"
                name="transition-input"
                placeholder="Click here to focus"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '2px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'blue';
                  e.target.style.boxShadow = '0 0 5px rgba(0, 0, 255, 0.5)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ccc';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </form>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h4>Transition Properties:</h4>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li><strong>transition-property:</strong> border-color, box-shadow</li>
            <li><strong>transition-duration:</strong> 0.3s</li>
            <li><strong>transition-timing-function:</strong> ease</li>
            <li><strong>Trigger:</strong> :focus pseudo-class</li>
          </ul>
          <h4>CSS Code:</h4>
          <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px', fontSize: '12px' }}>
{`transition: border-color 0.3s ease,
            box-shadow 0.3s ease;`}
          </pre>
        </div>
      </div>

      <h2>⚡ Transition Shorthand</h2>
      <div style={{ backgroundColor: '#e8f4fd', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
        <p>You can combine all transition properties into one shorthand:</p>
        <code style={{ backgroundColor: '#d4edda', padding: '10px', display: 'block', borderRadius: '5px', margin: '10px 0' }}>
          transition: background-color 0.5s ease 0.1s;
        </code>
        <p><strong>Order:</strong> property | duration | timing-function | delay</p>
      </div>

      <h2>🎯 Key Transition Concepts</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '20px 0' }}>
        <div style={{ backgroundColor: '#fff3cd', padding: '15px', borderRadius: '5px' }}>
          <h4>Transition Properties</h4>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li>property: Which CSS property to animate</li>
            <li>duration: How long the transition takes</li>
            <li>timing-function: Speed curve</li>
            <li>delay: Wait before starting</li>
          </ul>
        </div>
        <div style={{ backgroundColor: '#d1ecf1', padding: '15px', borderRadius: '5px' }}>
          <h4>Timing Functions</h4>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li><strong>ease:</strong> Slow start, fast middle, slow end</li>
            <li><strong>linear:</strong> Constant speed</li>
            <li><strong>ease-in:</strong> Slow start</li>
            <li><strong>ease-out:</strong> Slow end</li>
            <li><strong>cubic-bezier:</strong> Custom curve</li>
          </ul>
        </div>
        <div style={{ backgroundColor: '#d4edda', padding: '15px', borderRadius: '5px' }}>
          <h4>vs Animations</h4>
          <p>Transitions are triggered by state changes (:hover, :focus, etc.) and are simpler. Animations can run automatically and are more complex.</p>
        </div>
      </div>

      <h2>🚀 Best Practices</h2>
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li><strong>Performance:</strong> Use transform and opacity for smooth animations</li>
          <li><strong>Triggers:</strong> Use :hover, :focus, :active pseudo-classes</li>
          <li><strong>Duration:</strong> Keep transitions between 0.2s - 0.5s for good UX</li>
          <li><strong>Consistency:</strong> Use consistent timing functions across your site</li>
        </ul>
      </div>
    </div>
  )
}

export default TransitionsPage