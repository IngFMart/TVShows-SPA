import React from 'react';
import './ListItem.css';

export const ListItem = ({id, name, image}) => {
	return (
		<li key={id}>
			<img alt="randomImg" src={image.medium}></img>
			<p>{name}</p>
			<input type="checkbox"></input>
		</li>
	);
};
