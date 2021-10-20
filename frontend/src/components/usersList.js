import React, { Component } from 'react';
export default class UserList extends Component {
	render() {
		console.log(this.props.users);
		const users = this.props.users.map((user) => (
            <div>{user}</div>
		));
		return <div>{users}</div>;
	}
}
