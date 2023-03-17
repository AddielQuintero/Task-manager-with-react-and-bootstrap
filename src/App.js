import React from 'react'
import { Container } from 'react-bootstrap'
import logo from './logo.svg'

function App() {
  return (
    <React.Fragment>
      <Container className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Container>
    </React.Fragment>
  )
}

export default App
