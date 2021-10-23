import './App.css';

import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from './actions/usersActions'
import UserList from './components/usersList.js'


class App extends Component {
 
  componentDidMount() {
    console.log('component mounted...')
		this.props.fetchUsers();
  }
  
  render() {

    console.log('rendering...')
    console.log(this.props)
    return (
      <div class='shows'>
        <UserList userNames={this.props.users} theme={this.props.theme}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
	return {
		users: state.users,
		loading: state.loading,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
