export function fetchAnime(resource, element, query = '') {
	console.log('fetching Anime from resource: ' + resource)
	console.log(element.state)
	console.log("https://dry-meadow-79382.herokuapp.com/animes" + resource + query)

	return (dispatch) => {
		dispatch({
			loading: true,
			type: 'LOADING_ANIME'
		});
		fetch("https://dry-meadow-79382.herokuapp.com/animes" + resource + query)
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
			type: 'CLEAR_DATA'
		})
		dispatch({
			type: 'CLEAR_QUERY'
		})
	}
}