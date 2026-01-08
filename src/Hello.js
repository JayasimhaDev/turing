import React from 'react';

function Hello() {
	// const [text, setText] = useState('good morning');
	function helloclick() {
		alert('very good morning');
	}
	return (
		<div>
			<form>
				<button type="submit" onSubmit={helloclick}>
					hello click me
				</button>
			</form>
		</div>
	);
}
export default Hello;
