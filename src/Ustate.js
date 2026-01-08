import React, { useState } from 'react';
import App from './App';

function Ustate() {
	const [text, setText] = useState('jayasimha');
	const [values, setValue] = useState('student');
	function clickme() {
		if (text === 'jayasimha') {
			setText('simha');
		} else if (text === 'simha') {
			setText('hari');
		} else {
			setText('jayasimha');
		}
	}
	return (
		<div>
			<h1>{text}</h1>
			<button type="button" onClick={clickme}>
				get more
			</button>
		</div>
	);
}

<p>
	https://googleads.g.doubleclick.net/pagead/viewthroughconversion/663311095/?random=1659681034425&cv=9&fst=1659681034425&num=1&bg=ffffff&guid=ON&resp=GooglemKTybQhCsO&eid=376635470&u_h=900&u_w=1600&u_ah=900&u_aw=1600&u_cd=24&u_his=1&u_tz=330&u_java=false&u_nplug=5&u_nmime=2&gtm=2oa830&sendb=1&ig=1&data=event%3DHeadlights%3Belabel%3DClick&frm=0&url=https%3A%2F%2Fwww.toyotabharat.com%2Fvirtual-showroom%2Furbancruiserhyryder.html&ref=https%3A%2F%2Fwww.toyotabharat.com%2Fvirtual-showroom%2F&tiba=Toyota%20India%20%7C%20HYRYDER-360&hn=www.googleadservices.com&async=1&rfmt=3&fmt=4
</p>;
 export default Ustate;
