import React, {useEffect, useState} from 'react';
import {ListItem} from './ListItem';

import './List.css';

export const List = () => {
	const showsUrl = 'http://api.tvmaze.com/shows';

	const [shows, setShows] = useState([]);

	useEffect(() => {
		fetch(showsUrl)
			.then((data) => data.json())
			.then((result) => {
				setShows(result);
			})
			.catch((error) => {
				console.log("There was an error and the data couldn't be fetched.");
			});
	}, []);

	return (
		<ul>
			{shows.map((tvshw) => {
				return (
					<ListItem key={tvshw.id} name={tvshw.name} image={tvshw.image} />
				);
			})}
		</ul>
	);
};
