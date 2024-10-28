import React, { useReducer } from "react";
import Board from "./board.js";
import Styles from "../../css/styles.js";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from "react-router-dom";


// reducer function
const reducer = (state, action) => {
    switch(action.type){
        case 'MOVE': return {
            ...state,
            history: state.history.concat(
                {squares: action.payload.squares}
            ),
            // change the state
            xIsNext: !state.xIsNext,
        }
        case 'NEW GAME': return {
            xIsNext: true,
            history: [{squares: Array(9).fill(null)}]
        }
        default:
            return state;
    }
}

const winController = (squares) => {
    let winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let isDraw = true;
    for(let i=0; i < winningLines.length; i++) {
        let [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]){
            return squares[a]
        }  
        if (!squares[a] || !squares[b] || !squares[c]){
            isDraw= false;
        }
    }
    if (isDraw){
        return 'D'
    }
    return null;
}

function Game (){
    const navigate = useNavigate();
    
    const [state, dispatch] = useReducer(reducer, {
        xIsNext: true,
        history: [{squares: Array(9).fill(null)}]

    })
    const {xIsNext, history} = state;

    // handle squares click
    const handleClick = (i) => {
        // get the last item in the history
        let current = history[history.length-1];
        let squares = current.squares.slice();
        let winner = winController(squares);
        // when the square is already occupied return nothing
        if ( winner || squares[i]){
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O' ;
        //console.log('Square: ', squares[i]);
        // get the last clicked square
        dispatch({
            type: 'MOVE',
            payload: {squares}
        });
    }

    // start new game
    const handleStartNewGame = () => {
        dispatch({
            type: 'NEW GAME',
            payload: {history}
        })
    }

    
    let current = history[history.length-1]
    // check for win 
    const winner = winController(current.squares);
    const playreStatus = winner ? winner === 'D' ? 'Draw' :  winner + ' Wins!' : 'Next Player is ' + (xIsNext ? 'X' : 'O');
    let StartButton = Styles().startBtn;
    let BackButton = Styles().backBtn;
    //console.log(current.squares);
    let moveLog = history.map((step, move) => {
        //console.log('Step: ', step);
        let log = move ? 'Go to step ' + move : 'Waiting for player to make the move..' 
        return(
                <li key={move}>
                    <StartButton>{log}</StartButton>
                </li>
            )   
        }
    )
    return(
        <div>
            <div className="back-btn">
                <BackButton onClick={() => navigate(-1)} startDecorator={<KeyboardArrowLeft />} >
                    Back
                </BackButton>
            </div>
        <div className={winner?"game disabled":"game"}>
            <div className="game-board">
                <Board 
                    onClick={(i) => handleClick(i)} 
                    squares={current.squares}
                >
                </Board>
                <div className="start-btn">
                    <StartButton onClick={() => handleStartNewGame()}>Start New Game</StartButton>
            </div>
            </div>
            <div className="game-info">
                <div>{playreStatus}</div>
                <ul>
                    {moveLog}
                </ul>
            </div>
        </div>
        </div>
        
    )
}

export default Game;