import { useState } from 'react';

export const Inventory = () => {
	const [inventory, setinventory] = useState({
		books: Math.floor(Math.random() * 100),
		notebooks: Math.floor(Math.random() * 100),
		pens: Math.floor(Math.random() * 100),
		inkpens: Math.floor(Math.random() * 100),
	});
	
	if (inventory.books < 0) {
		inventory.books = 0;
	}
	if (inventory.notebooks < 0) {
		inventory.notebooks = 0;
	}
	if (inventory.pens < 0) {
		inventory.pens = 0;
	}
	if (inventory.inkpens < 0) {
		inventory.inkpens = 0;
	}
	function ChangeBook(value) {
		return setinventory({
			books: inventory.books + value,
			notebooks: inventory.notebooks,
			pens: inventory.pens,
			inkpens: inventory.inkpens,
		});
	}
	function ChangeNote(value) {
		return setinventory({
			books: inventory.books,
			notebooks: inventory.notebooks + value,
			pens: inventory.pens,
			inkpens: inventory.inkpens,
		});
	}
	function ChangePen(value) {
		return setinventory({
			books: inventory.books,
			notebooks: inventory.notebooks,
			pens: inventory.pens + value,
			inkpens: inventory.inkpens,
		});
	}
	function Changeink(value) {
		return setinventory({
			books: inventory.books,
			notebooks: inventory.notebooks,
			pens: inventory.pens,
			inkpens: inventory.inkpens + value,
		});
	}

	return (
		<div
			style={{
				border: '1px solid black',
				borderRadius: '3px',
				padding: '10px',
				display: 'flex',
				flexDirection: 'column',
				width: '700px',
				height: '400px'
			}}
		>
			<div className="items">
				<span>Books: </span>
				<button
					className="circlularButton"
					onClick={() => {
						ChangeBook(1);
					}}
				>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => {
						ChangeBook(-1);
					}}
				>
					-
				</button>
				<span>{inventory.books}</span>
			</div>
			<div className="items">
				<span>Notebooks: </span>
				<button
					className="circlularButton"
					onClick={() => {
						ChangeNote(1);
					}}
				>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => {
						ChangeNote(-1);
					}}
				>
					-
				</button>
				<span>{inventory.notebooks}</span>
			</div>
			<div className="items">
				<span>Pen: </span>
				<button
					className="circlularButton"
					onClick={() => {
						ChangePen(1);
					}}
				>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => {
						ChangePen(-1);
					}}
				>
					-
				</button>
				<span>{inventory.pens}</span>
			</div>
			<div className="items">
				<span>Ink Pens: </span>
				<button
					className="circlularButton"
					onClick={() => {
						Changeink(1);
					}}
				>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => {
						Changeink(-1);
					}}
				>
					-
				</button>
				<span>{inventory.inkpens}</span>
			</div>
			total: {inventory.books + inventory.notebooks + inventory.pens + inventory.inkpens}
		</div>
	);
};
