import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => {
      console.log("Error fetching message", err);
      
    })
  }, [])

  return (
    <>
      <section id="center">
        <h2>Welcome to Tech with Varun</h2>
        <p>Data {message}</p>
      </section>
    </>
  )
}

export default App
