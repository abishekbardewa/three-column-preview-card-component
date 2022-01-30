import React, { useState } from 'react';

const Card = ({ title, icon, text, color }) => {
	const [hover, setHover] = useState(false);
	const veryLightGray = 'hsl(0, 0%, 95%)';
	const bgColor = {
		backgroundColor: color,
	};
	const btnStyle = {
		cursor: hover ? 'pointer' : '',
		color: hover ? veryLightGray : color,
		backgroundColor: hover ? color : veryLightGray,
	};
	const hoverHandle = () => {
		setHover(!hover);
	};
	return (
		<>
			<div className="card" style={bgColor}>
				<img src={icon} alt="" />

				<h1>{title.toUpperCase()}</h1>
				<p>{text}</p>

				<div className="card-btn">
					<button type="button" className="btn" style={btnStyle} onMouseLeave={hoverHandle} onMouseEnter={hoverHandle}>
						Learn More
					</button>
				</div>
			</div>
		</>
	);
};

export default Card;
