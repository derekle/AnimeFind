export const fetchUsers = () => {
    console.log('fetching Users...')
	return (dispatch) => {
		dispatch({ type: 'LOADING_USERS' });
		fetch('http://localhost:3000/users')
			.then((response) => {
				return response.json();
			})
            .then((data) => {
                console.log(data)
				dispatch({
					type: 'ADD_USERS',
					users: data,
				});
			});
	};
};
