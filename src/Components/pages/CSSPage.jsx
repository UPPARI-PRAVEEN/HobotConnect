import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// https://students-84i5fjsbb-upparipraveens-projects.vercel.app/
const CSSPage = () => {
  // Colors & Backgrounds
  const [bgColor, setBgColor] = useState('#4CAF50')
  const [textColor, setTextColor] = useState('#ffffff')

  // Typography
  const [fontSize, setFontSize] = useState(16)
  const [fontWeight, setFontWeight] = useState(400)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [textAlign, setTextAlign] = useState('left')

  // Box Model
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(100)
  const [padding, setPadding] = useState(15)
  const [borderWidth, setBorderWidth] = useState(2)
  const [borderColor, setBorderColor] = useState('#333333')
  const [borderRadius, setBorderRadius] = useState(0)
  const [margin, setMargin] = useState(10)

  // Layout
  const [flexDirection, setFlexDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('space-around')
  const [alignItems, setAlignItems] = useState('center')

  // Position
  const [position, setPosition] = useState('static')
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>← Back to Home</Link>
      <h1>CSS - Cascading Style Sheets</h1>
      <p>CSS controls how HTML elements look and feel. Experiment with all the controls below to see how CSS properties work!</p>

      <h2>🎨 Colors & Backgrounds</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{
          width: '250px',
          height: '120px',
          backgroundColor: bgColor,
          color: textColor,
          border: '2px solid #333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          borderRadius: '5px'
        }}>
          Background: {bgColor}<br />
          Text: {textColor}
        </div>
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', minWidth: '300px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Background Color:</strong></label><br />
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              style={{ margin: '5px 0', width: '60px', height: '30px' }}
            />
            <span style={{ marginLeft: '10px' }}>{bgColor}</span>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Text Color:</strong></label><br />
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              style={{ margin: '5px 0', width: '60px', height: '30px' }}
            />
            <span style={{ marginLeft: '10px' }}>{textColor}</span>
          </div>
          <p><strong>CSS Properties:</strong> background-color, color</p>
        </div>
      </div>

      <h2>📝 Typography</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{
          width: '350px',
          padding: '20px',
          border: '1px solid #ccc',
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight,
          lineHeight: lineHeight,
          textAlign: textAlign,
          backgroundColor: '#f9f9f9',
          borderRadius: '5px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: `${fontSize + 4}px` }}>Sample Heading</h3>
          <p>This text demonstrates typography properties. Font size: {fontSize}px, Weight: {fontWeight}, Line height: {lineHeight}</p>
        </div>
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', minWidth: '300px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Font Size: {fontSize}px</strong></label><br />
            <input
              type="range"
              min="12"
              max="48"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Font Weight: {fontWeight}</strong></label><br />
            <select value={fontWeight} onChange={(e) => setFontWeight(e.target.value)} style={{ width: '100%', padding: '5px' }}>
              <option value="100">100 (Thin)</option>
              <option value="300">300 (Light)</option>
              <option value="400">400 (Normal)</option>
              <option value="600">600 (Semi-bold)</option>
              <option value="700">700 (Bold)</option>
              <option value="900">900 (Black)</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Line Height: {lineHeight}</strong></label><br />
            <input
              type="range"
              min="0.8"
              max="3"
              step="0.1"
              value={lineHeight}
              onChange={(e) => setLineHeight(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Text Align:</strong></label><br />
            <select value={textAlign} onChange={(e) => setTextAlign(e.target.value)} style={{ width: '100%', padding: '5px' }}>
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </div>
          <p><strong>CSS Properties:</strong> font-size, font-weight, line-height, text-align</p>
        </div>
      </div>

      <h2>📦 Box Model</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: 'lightblue',
          border: `${borderWidth}px solid ${borderColor}`,
          padding: `${padding}px`,
          margin: `${margin}px`,
          borderRadius: `${borderRadius}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          textAlign: 'center',
          position: 'relative'
        }}>
          Content Area<br />
          {width}×{height}px
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '10px',
            color: '#666'
          }}>
            Margin: {margin}px
          </div>
        </div>
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', minWidth: '300px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Width: {width}px</strong></label><br />
            <input
              type="range"
              min="100"
              max="400"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Height: {height}px</strong></label><br />
            <input
              type="range"
              min="50"
              max="200"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Padding: {padding}px</strong></label><br />
            <input
              type="range"
              min="0"
              max="50"
              value={padding}
              onChange={(e) => setPadding(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Border Width: {borderWidth}px</strong></label><br />
            <input
              type="range"
              min="0"
              max="10"
              value={borderWidth}
              onChange={(e) => setBorderWidth(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Border Color:</strong></label><br />
            <input
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
              style={{ width: '60px', height: '30px' }}
            />
            <span style={{ marginLeft: '10px' }}>{borderColor}</span>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Border Radius: {borderRadius}px</strong></label><br />
            <input
              type="range"
              min="0"
              max="50"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Margin: {margin}px</strong></label><br />
            <input
              type="range"
              min="0"
              max="50"
              value={margin}
              onChange={(e) => setMargin(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <p><strong>CSS Properties:</strong> width, height, padding, border, margin, border-radius</p>
        </div>
      </div>

      <h2>📱 Layout - Flexbox</h2>
      <div style={{ display: 'flex', gap: '30px', margin: '20px 0', alignItems: 'center' }}>
        <div style={{
          width: '400px',
          height: '150px',
          border: '2px solid #333',
          display: 'flex',
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
          backgroundColor: '#f0f0f0',
          padding: '10px',
          borderRadius: '5px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px'
          }}>1</div>
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'green',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px'
          }}>2</div>
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'blue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px'
          }}>3</div>
        </div>
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', minWidth: '300px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Flex Direction:</strong></label><br />
            <select value={flexDirection} onChange={(e) => setFlexDirection(e.target.value)} style={{ width: '100%', padding: '5px' }}>
              <option value="row">Row (horizontal)</option>
              <option value="column">Column (vertical)</option>
              <option value="row-reverse">Row Reverse</option>
              <option value="column-reverse">Column Reverse</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Justify Content:</strong></label><br />
            <select value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)} style={{ width: '100%', padding: '5px' }}>
              <option value="flex-start">Flex Start</option>
              <option value="center">Center</option>
              <option value="flex-end">Flex End</option>
              <option value="space-between">Space Between</option>
              <option value="space-around">Space Around</option>
              <option value="space-evenly">Space Evenly</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Align Items:</strong></label><br />
            <select value={alignItems} onChange={(e) => setAlignItems(e.target.value)} style={{ width: '100%', padding: '5px' }}>
              <option value="stretch">Stretch</option>
              <option value="flex-start">Flex Start</option>
              <option value="center">Center</option>
              <option value="flex-end">Flex End</option>
              <option value="baseline">Baseline</option>
            </select>
          </div>
          <p><strong>CSS Properties:</strong> display: flex, flex-direction, justify-content, align-items</p>
        </div>
      </div>

      <h2>📍 Positioning</h2>
      <div style={{ position: 'relative', height: '200px', border: '2px solid #333', margin: '20px 0', backgroundColor: '#f9f9f9' }}>
        <div style={{
          position: position,
          top: `${top}px`,
          left: `${left}px`,
          width: '80px',
          height: '80px',
          backgroundColor: 'orange',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '5px'
        }}>
          Box
        </div>
        <div style={{ position: 'absolute', bottom: '10px', left: '700px', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <div style={{ marginBottom: '10px' }}>
            <label><strong>Position: {position}</strong></label><br />
            <select value={position} onChange={(e) => setPosition(e.target.value)} style={{ width: '120px', padding: '3px' }}>
              <option value="static">Static</option>
              <option value="relative">Relative</option>
              <option value="absolute">Absolute</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>
          {(position !== 'static') && (
            <>
              <div style={{ marginBottom: '10px' }}>
                <label><strong>Top: {top}px</strong></label><br />
                <input
                  type="range"
                  min="-50"
                  max="100"
                  value={top}
                  onChange={(e) => setTop(e.target.value)}
                  style={{ width: '120px' }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label><strong>Left: {left}px</strong></label><br />
                <input
                  type="range"
                  min="-50"
                  max="200"
                  value={left}
                  onChange={(e) => setLeft(e.target.value)}
                  style={{ width: '120px' }}
                />
              </div>
            </>
          )}
          <p style={{ fontSize: '12px', margin: '5px 0' }}><strong>CSS Properties:</strong> position, top, left</p>
        </div>
      </div>

      <h2>🎯 Selectors</h2>
      <div style={{ margin: '20px 0' }}>
        <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '10px' }}>
          <code style={{ backgroundColor: '#e8e8e8', padding: '2px 5px', borderRadius: '3px' }}>
            h1 &#123; color: red; &#125;
          </code>
          <span style={{ marginLeft: '10px' }}>→ Element selector (targets all h1 elements)</span>
        </div>
        <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '10px' }}>
          <code style={{ backgroundColor: '#e8e8e8', padding: '2px 5px', borderRadius: '3px' }}>
            .myClass &#123; font-size: 20px; &#125;
          </code>
          <span style={{ marginLeft: '10px' }}>→ Class selector (targets elements with class="myClass")</span>
        </div>
        <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '10px' }}>
          <code style={{ backgroundColor: '#e8e8e8', padding: '2px 5px', borderRadius: '3px' }}>
            #myId &#123; background: blue; &#125;
          </code>
          <span style={{ marginLeft: '10px' }}>→ ID selector (targets element with id="myId")</span>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f4fd', borderRadius: '10px' }}>
        <h3>💡 Interactive CSS Playground</h3>
        <p>🎮 <strong>Try it yourself!</strong> Use all the controls above to experiment with CSS properties. Each change updates the visual examples in real-time, helping you understand how CSS properties work together.</p>
        <p>🔄 <strong>Key Concepts:</strong></p>
        <ul>
          <li><strong>Cascade:</strong> Styles can inherit and override each other</li>
          <li><strong>Specificity:</strong> More specific selectors override general ones</li>
          <li><strong>Box Model:</strong> Every element has content, padding, border, and margin</li>
          <li><strong>Responsive:</strong> CSS adapts to different screen sizes</li>
        </ul>
      </div>
    </div>
  )
}

export default CSSPage