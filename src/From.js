import React, { useState } from 'react';

const From = (props) => {
	const [text, setText] = useState('Microdeggre');
	function handleClick() {
		setText('jayasimha');
		console.log('jaysimha');
	}
	return (
		<div>
			{props.form.map((form) => {
				return (
					<div>
						<p>
							{form.name}
							{form.title}
							{form.logo}
						</p>
						<p>{text}</p>
						<button type="button" onClick={handleClick}>
							change click
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default From;
