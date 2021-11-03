export function fetchAnime(resource, element) {
	console.log('fetching Anime from resource: ' + resource)
	console.log(element.state)
	return (dispatch) => {
		dispatch({
			loading: true,
			type: 'LOADING_ANIME'
		});
		fetch("http://localhost:3000/animes" + resource)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				dispatch({
					type: 'ADD_ANIME',
					anime: data,
				})
				dispatch({
					type: 'LOADING_ANIME',
					loading: false
				})
				element.setState({
					data: data
				})
			});
	};
}

export function clearAnimeData() {
	return (dispatch) => {
		dispatch({
			type:'CLEAR_DATA'
		})
	}
}