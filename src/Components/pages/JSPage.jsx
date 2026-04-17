import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const JSPage = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const showAlertMessage = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  useEffect(() => {
    if (count === 10) {
      alert('Count reached 10!')
    }
  }, [count])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>← Back to Home</Link>
      <h1>JavaScript - Programming Language</h1>
      <p>JavaScript is a programming language that adds interactivity to web pages. It can manipulate HTML and CSS, handle events, and perform calculations.</p>

      <h2>Interactive Counter</h2>
      <div style={{ margin: '20px 0' }}>
        <h2>Count: {count}</h2>
        <button
          onClick={handleIncrement}
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          style={{
            padding: '10px 20px',
            margin: '0 10px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
      </div>

      <h2>Form Interaction</h2>
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '300px',
            marginRight: '10px',
            border: '2px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <p>You typed: <strong>{inputValue}</strong></p>
        <p>Character count: <strong>{inputValue.length}</strong></p>
      </div>

      <h2>Todo List Application</h2>
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '250px',
            marginRight: '10px',
            border: '2px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Add Todo
        </button>

        <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li
              key={todo.id}
              style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: todo.completed ? '#d4edda' : '#f8f9fa',
                border: '1px solid #ddd',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer'
                }}
                onClick={() => handleToggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h2>Event Handling</h2>
      <button
        onClick={showAlertMessage}
        style={{
          padding: '10px 20px',
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px 0'
        }}
      >
        Show Alert
      </button>
      {showAlert && (
        <div style={{
          padding: '10px',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '5px',
          margin: '10px 0'
        }}>
          This is a JavaScript alert message that appears for 3 seconds!
        </div>
      )}

      <h2>Key JavaScript Concepts</h2>
      <ul>
        <li><strong>Variables:</strong> Store data (let, const, var)</li>
        <li><strong>Functions:</strong> Reusable blocks of code</li>
        <li><strong>Events:</strong> User interactions (clicks, hovers, etc.)</li>
        <li><strong>DOM Manipulation:</strong> Changing HTML/CSS with JavaScript</li>
        <li><strong>Conditional Logic:</strong> if/else statements</li>
        <li><strong>Loops:</strong> Repeating actions</li>
        <li><strong>Arrays & Objects:</strong> Data structures</li>
      </ul>

      <p><strong>Difference from HTML/CSS:</strong> While HTML provides structure and CSS provides styling, JavaScript adds behavior and interactivity to make web pages dynamic.</p>
    </div>
  )
}

export default JSPage