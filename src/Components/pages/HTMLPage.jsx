import React from 'react'
import { Link } from 'react-router-dom'

const HTMLPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>← Back to Home</Link>
        <h1>HTML - HyperText Markup Language</h1>
        <p>HTML is the standard markup language for creating web pages. It defines the structure and content of web documents using elements and tags.</p>

        <h2>HTML Form Elements</h2>
        <p>Forms allow users to input data. Below is a comprehensive form demonstrating various input types:</p>

        <form style={{ maxWidth: '600px', margin: '20px 0' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="text">Input Type: Text</label><br />
            <input type="text" id="text" name="text" placeholder="Enter text" style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Input type:Email</label><br />
            <input type="email" id="email" name="email" placeholder="Enter email" style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Input Type:Password</label><br />
            <input type="password" id="password" name="password" placeholder="Enter password" style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="number">Input Type: Number</label><br />
            <input type="number" id="number" name="number" min="0" max="100" style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="date">Input Type:Date</label><br />
            <input type="date" id="date" name="date" style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="color">Input Type: Color</label><br />
            <input type="color" id="color" name="color" style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Input Type: Radio </label><br />
            <input type="radio" id="radio1" name="radio" value="option1" />
            <label htmlFor="radio1">Option 1</label><br />
            <input type="radio" id="radio2" name="radio" value="option2" />
            <label htmlFor="radio2">Option 2</label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Input Type: Checkboxes</label><br />
            <input type="checkbox" id="check1" name="check1" value="check1" />
            <label htmlFor="check1">Checkbox 1</label><br />
            <input type="checkbox" id="check2" name="check2" value="check2" />
            <label htmlFor="check2">Checkbox 2</label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="select">Input Type :Select Dropdown:</label><br />
            <select id="select" name="select" style={{ width: '100%', padding: '8px' }}>
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="textarea">Textarea:</label><br />
            <textarea id="textarea" name="textarea" rows="4" cols="50" placeholder="Enter your message" style={{ width: '100%', padding: '8px' }}></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="file">Input Type: File Upload:</label><br />
            <input type="file" id="file" name="file" style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="range">Input Type : Range Slider:</label><br />
            <input type="range" id="range" name="range" min="0" max="100" style={{ width: '100%' }} />
          </div>

          <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>

        <h2>Key HTML Concepts</h2>
        <ul>
          <li><strong>Elements:</strong> Building blocks like &lt;div&gt;, &lt;p&gt;, &lt;input&gt;</li>
          <li><strong>Attributes:</strong> Provide additional information, like id, name, type</li>
          <li><strong>Semantics:</strong> Using meaningful tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;</li>
          <li><strong>Forms:</strong> Collect user input with various input types</li>
        </ul>

        <p><strong>Note:</strong> HTML provides the structure, but for styling and interactivity, we use CSS and JavaScript respectively.</p>
      </div>

      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2>HTML Code Examples</h2>
        <p>Here are the HTML code snippets for the input types shown on the left:</p>

        <h3>Input Type: Text</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="text" id="text" name="text" placeholder="Enter text" />`}</code>
        </pre>

        <h3>Input Type: Email</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="email" id="email" name="email" placeholder="Enter email" />`}</code>
        </pre>

        <h3>Input Type: Password</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="password" id="password" name="password" placeholder="Enter password" />`}</code>
        </pre>

        <h3>Input Type: Number</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="number" id="number" name="number" min="0" max="100" />`}</code>
        </pre>

        <h3>Input Type: Date</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="date" id="date" name="date" />`}</code>
        </pre>

        <h3>Input Type: Color</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="color" id="color" name="color" />`}</code>
        </pre>

        <h3>Input Type: Radio</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="radio" id="radio1" name="radio" value="option1" />
<label for="radio1">Option 1</label>
<input type="radio" id="radio2" name="radio" value="option2" />
<label for="radio2">Option 2</label>`}</code>
        </pre>

        <h3>Input Type: Checkboxes</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="checkbox" id="check1" name="check1" value="check1" />
<label for="check1">Checkbox 1</label>
<input type="checkbox" id="check2" name="check2" value="check2" />
<label for="check2">Checkbox 2</label>`}</code>
        </pre>

        <h3>Select Dropdown</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<select id="select" name="select">
  <option value="">Choose an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>`}</code>
        </pre>

        <h3>Textarea</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<textarea id="textarea" name="textarea" rows="4" cols="50" placeholder="Enter your message"></textarea>`}</code>
        </pre>

        <h3>File Upload</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="file" id="file" name="file" />`}</code>
        </pre>

        <h3>Range Slider</h3>
        <pre style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '4px', fontSize: '14px' }}>
          <code>{`<input type="range" id="range" name="range" min="0" max="100" />`}</code>
        </pre>
      </div>
    </div>
  )
}

export default HTMLPage