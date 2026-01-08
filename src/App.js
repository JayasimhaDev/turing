import React, { useState } from 'react';
import Com from './Com';
import Popup from './Popup';
import Book from './Book';
import From from './From';
import Ustate from './Ustate';
import Hello from './Hello';
import UseEffect from './UseEffect';

function App() {
	// const text = 'microdeggre';
	const [num, setNum] = useState(0);
	const [pop, setPop] = useState(false);
	const car = { brand: 'maruthi', model: 'toyota', year: '2021' };
	const logo = { a: 'ab', b: 'bc', c: 'cd' };
	const kids = { name: 'ravi', age: '35y', location: 'blr' };
	const java = { x: 'a', y: 'b', z: 'c' };
	const kello = {
		ab: 'king',
		bc: 'kings',
		cd: 'kingss',
		p: 'this is a book from jsgdjsg sdfdfds fdsfdsf sfhjfhsdjf sfgsfsdf sdfdsfsdf sdgdgdg',
	};
	const arr = [
		{
			id: 'image01',
			title: 'homelane01',
			src: 'https://super.homelane.com/KRI133426_srp-1509888466_1_crockery-cabinet-2400-1.jpg',
		},
		{
			id: 'image02',
			title: 'homelane02',
			src: 'https://super.homelane.com/products/07dec18/entertainment_unit/2.jpg',
		},
		{
			id: 'image03',
			title: 'homelane03',
			src: 'https://super.homelane.com/products/07dec18/entertainment_unit/5.jpg',
		},
	];

	const student = [
		{
			name: 'ramesh',
			age: '25y',
			course: 'bcom',
		},
		{
			name: 'ravi',
			age: '25y',
			course: 'mcom',
		},
		{
			name: 'paramesh',
			age: '25y',
			course: 'mca',
		},
	];
	const book = [
		{
			title: 'sbm',
			author: 'gk',
		},
		{
			title: 'cbk',
			author: 'sk',
		},
	];
	const form = [
		{
			name: 'hhk',
			title: 'some1',
			logo: 'gkm',
		},
		{
			name: 'hhk',
			title: 'some1',
			logo: 'gkm',
		},
		{
			name: 'hhk',
			title: 'some1',
			logo: 'gkm',
		},
	];
	return (
		<div>
			<React.Fragment>
				{pop === false ? (
					<Com
						car={car}
						logo={logo}
						kids={kids}
						java={java}
						kello={kello}
						arr={arr}
						setNum={setNum}
						setPop={setPop}
						student={student}
					>
						<h3>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate aliquid architecto animi! Eos nulla voluptatem esse
							doloremque possimus sit repellendus aspernatur? Consectetur
							corporis architecto dolores. Earum minima quaerat nemo quisquam.
						</h3>
						<h1>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Voluptatem sed possimus, qui sit repellendus ab tempore libero
							placeat, pariatur atque, architecto aliquid incidunt quasi illum
							modi ipsum! Quidem, iste aut!
						</h1>
					</Com>
				) : (
					<Popup arr={arr} num={num} setPop={setPop}></Popup>
				)}
				<Book book={book} />
				<From form={form} />
				<Ustate />
				<Hello />
				<UseEffect />
			</React.Fragment>
		</div>
	);
}

export default App;
