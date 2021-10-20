export const fetchUsers = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_CATS' });
		fetch('http://localhost:3000/users')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				dispatch({
					type: 'ADD_USERS',
					users: data.images,
				});
			});
	};
};
