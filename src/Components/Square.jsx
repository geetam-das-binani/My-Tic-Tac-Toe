import React from "react";

export default function Square({ value, chooseSquare }) {
	return (
		<div onClick={chooseSquare} className="square">
			{value}
		</div>
	);
}
