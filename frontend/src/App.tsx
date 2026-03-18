import { useEffect, useState } from 'react'
import { GuessInput } from './components/GuessInput'
import { HistoryList } from './components/HistoryList'
import { type GameStep } from './types'
import './App.css'


function App() {
  const [secret, setSecret] = useState<string>(''); // This will be set by the backend in a real implementation 
  const [guess,setGuess] = useState<string>('');
  const [history, setHistory] = useState<GameStep[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('Enter 4 digits (1-6)');

  // initialize game 
  useEffect(() => {
      // Initialize the game by fetch the secret from the backend
      fetch('/api/StartGame')
        .then(response => response.json())
        .then(data => {
          setSecret(data.secret);
          setLoading(false);
          setMessage("Enter 4 digits (1-6)");
        });
  }, [])

  const handleGuesses = async () => {
    // This will connect to the Azure Function 
    const response = await fetch('/api/GetHint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ secret, guess })
    });

    const data = await response.json();
    console.log('Guess submitted:', data);

    // add new guess ti the top of the history list
    setHistory([{guesses: guess, hints: data.hints}, ...history]);
    setGuess('');
  };

  return(

    <div className ="container">
      <h1>Mastermind Cloud</h1>
      <p className="status">{message}</p>

      <GuessInput
        guess={guess}
        setGuess={setGuess}
        onSubmit={handleGuesses}
        disabled={loading}
      />
      <hr />
      <HistoryList history={history} />
    </div>
  )
} 
export default App;