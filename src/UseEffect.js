import React, { useState, useEffect } from 'react';
import App from './App.css';

function UseEffect() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('call useEffect');
	});
	function increaseValue() {
		setCount(count + 1);
	}
	return (
		<div className="div-positon">
			<h1>{count}</h1>
			<button type="button" onClick={increaseValue}>
				clickme
			</button>
		</div>
	);
}
export default UseEffect;
