import { useState } from 'react'
import './App.css'
import { type GameStep } from './types'

function App() {
  const [guess,setGuess] = useState<string>('');
  const [history, setHistory] = useState<GameStep[]>([]);
  const [message, setMessage] = useState<string>('Enter 4 digits (1-6)');

  const handleGuesses = async () => {
    // This will connect to the Azure Function 
    console.log('Guess submitted:', guess);

    // Temp local mock for testing the UI without backend
    const mockHint= '++--';
    setHistory([...history, {guesses: guess, hints: mockHint}]);
    setGuess('');
    setMessage('---'); // Placeholder for feedback message from backend
  };
  return(

    <div className ="container">
      <h1>Mastermind Cloud</h1>
      <p>{message}</p>
      <div className="input-section">
        <input 
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={4}
          placeholder="Enter your guess"
        />
        <button onClick={handleGuesses}>Submit Guess</button>
      </div>

      <p className="status-msg">{message}</p>
      <div className ="history-list">
        {history.map((step, index) => (
          <div key={index} className="history-item">
            <span className="guess">{step.guesses}</span>
            <span className="hint">{step.hints}</span>
          </div>
        ))} 
      </div>

    </div>
  )
} 
export default App;