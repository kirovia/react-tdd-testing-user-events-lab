import { useState } from 'react'

function App() {

  const [checkStates, setCheckStates] = useState({science: false, politics: false, art: false})
  const handleCheck = e => setCheckStates({...checkStates, [e.target.id]: e.target.checked})

  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const handleFormChange = e => e.target.placeholder === 'Your name' ? setFormName(e.target.value) : setFormEmail(e.target.value)

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormSubmit = e => {
    e.preventDefault()
    setIsFormSubmitted(true)
  }

  return (
    <main>
      <h1>Hi, I'm Jojo</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" height="100px" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {isFormSubmitted ? <p>Thank you for signing up, {formName}.</p> :
        <form onSubmit={handleFormSubmit}>
          <h3>Sign up for my newsletter</h3>
          <input type='text' placeholder='Your name' value={formName} onChange={handleFormChange}/>
          <input type='text' placeholder='Your email' value={formEmail} onChange={handleFormChange}/>
          <div>
            <h4>Please select your interests</h4>
            <label htmlFor='science'>Science</label>
            <input type='checkbox' id='science' checked={checkStates[0]} aria-checked={checkStates[0]} onChange={handleCheck}/>
            <br/>
            <label htmlFor='politics'>Politics</label>
            <input type='checkbox' id='politics' checked={checkStates[1]} aria-checked={checkStates[1]} onChange={handleCheck}/>
            <br/>
            <label htmlFor='art'>Art</label>
            <input type='checkbox' id='art' checked={checkStates[2]} aria-checked={checkStates[2]} onChange={handleCheck}/>
          </div>
          <button type='submit'>Submit</button>
        </form>
      }

    </main>
  );
}

export default App;
