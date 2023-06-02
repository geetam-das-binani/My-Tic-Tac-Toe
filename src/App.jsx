import React from "react";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Components/Patterns";
import "./App.css";

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [player, setPlayer] = useState("0");
	const [result, setResult] = useState({ winner: "none", state: "none" });
	useEffect(() => {
		checkWin();
		CheckTie();
		if (player === "X") setPlayer("0");
		if (player === "0") setPlayer("X");
	}, [board]);
	useEffect(() => {
		if (result.state !== "none") {
			alert(`Game Finished: ${result.winner} is winner ! ${result.state}`);
			resetGame();
		}
	}, [result]);
	const checkWin = () => {
		if (board[0] === null) return;
		for (let i = 0; i <= Patterns.length - 1; i++) {
			const [a, b, c] = Patterns[i];
			if (board[a] === board[b] && board[b] === board[c] && board[a] !== null) {
				setResult({ winner: player, state: "Won" });
			}
		}
	};
	const CheckTie = () => {
		if (board[0] === null) return;
		let filled = true;
		board.forEach((value) => {
			if (value === null) {
				filled = false;
			}
		});

		if (filled) {
			setResult({ winner: "None", state: "Match Draw" });
		}
	};
	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setPlayer("0");
	};

	const chooseSquare = (squareIndex) => {
		setBoard(
			board.map((value, index) => {
				if (index === squareIndex && value === null) {
					return player;
				}
				return value;
			})
		);
	};

	return (
		<div className="App">
			<p className="turn"> Turn for {player}</p>
			<div className="board">
				<div className="row">
					<Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
					<Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
					<Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
				</div>
				<div className="row">
					<Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
					<Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
					<Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
				</div>
				<div className="row">
					<Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
					<Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
					<Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
				</div>
			</div>
		</div>
	);
}

export default App;
