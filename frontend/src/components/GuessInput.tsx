interface GuessInputProps {
    guess: string;
    setGuess: (value:string) => void;
    onSubmit: () => void;
    disabled: boolean;
}

export const GuessInput = ({guess, setGuess, onSubmit, disabled}: GuessInputProps )=> {
    return (
        <div>  
            <div className = "input-section">
                <input
                    type = "text"
                    value = {guess}
                    onChange = {((e) => setGuess(e.target.value))}
                    disabled = {disabled}
                    maxLength = {4}
                    placeholder = "Enter your guess"
                />
            </div>

            <button onClick={onSubmit} disabled={disabled}>
                Submit Guess
            </button>
        </div>

    )
}