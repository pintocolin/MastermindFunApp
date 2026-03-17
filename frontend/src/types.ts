// frontend/src/types.ts

export interface GameStep {
    guesses: string;
    hints: string;
}

export interface GameState{
    secretCode: string;
    attempts: GameStep[];
    isGameOver: boolean;
    hasWon:boolean;
}

export interface HintResponse {
    hint: string;
    error?: string;
}