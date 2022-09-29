import React, { useRef, useState } from 'react';

const EventsExample = () => {
	const [value, setValue] = useState('');
	const [isDrag, setIsDrag] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		
		
	};

	const clickHandler = (e: React.MouseEvent) => {
		// console.log(value);
		console.log(inputRef.current?.value);
	};

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('drag');
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
		console.log('drop');
		
	}

	const leaveHandker = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}

	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}

	return (
		<div>
			<input type='text' value={value} onChange={changeHandler} placeholder='управляемый'/>
			<input ref={inputRef} type='text'  placeholder='неуправляемый'/>
			<button onClick={clickHandler}>button</button>
			<div
				onDrag={dragHandler}
				draggable
				style={{ width: 200, height: 200, background: 'red' }}></div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandker}
				onDragOver={dragWithPreventHandler}
				style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}></div>
		</div>
	);
};

export default EventsExample;
