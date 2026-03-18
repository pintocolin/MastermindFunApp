import { type GameStep } from '../types';

export const HistoryList = ({history}: {history: GameStep[]}) => {
    return (
        <div className ="history-list">
            <h3>Guess History</h3>
            {history.length == 0 && <p className= "muted">No guesses yet. Start playing!</p>}
            {history.map((step, index) => (
                <div key={index} className="history-item">
                    <span className = "guess-text" > Guess: <strong>{step.guesses}</strong></span>
                    <span className = "hint-badge"> {step.hints} || "No matches"    </span>
                </div>
            ))}
        </div>
    )
}