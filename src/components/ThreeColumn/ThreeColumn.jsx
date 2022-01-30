import React from 'react';
import cardData from '../../utills/CardData';
import Card from '../Card/Card';
import './ThreeColumn.scss';
export default function ThreeColumn() {
	return (
		<>
			<main>
				<div className="container">
					<div className="card-component">
						{cardData.map((data) => (
							<Card title={data.title} icon={data.icon} text={data.text} color={data.color} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}
