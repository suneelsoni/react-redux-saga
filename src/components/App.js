import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
	table: {
		width: '100%',
		border: '1px solid #000'
	}
}

class App extends Component {
	constructor(){
		super();
		this.state = {
			fetching: ''
		}
	}
	componentDidMount(){
		//this.props.dispatch({type: 'FETCH_USERS'})
	}

	fetchUser = () => {
		this.props.dispatch({
			type: 'FETCH_USERS'
		});
		this.setState({
			fetching: 'Fetching...'
		})
	}
  render() {
		const { users } = this.props;
		if(users.status === 'success'){
			console.log(users.status)
		}
    return (
			<div>
				<button onClick={this.fetchUser}>Fetch User</button>
				{users.status === 'success' ? 
				<table style={styles.table}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Company</th>
						</tr>
					</thead>
					<tbody>
					{users.user.map((n, i) => 
						<tr key={i}>
							<td>{n.name}</td>
							<td>{n.email}</td>
							<td>{n.phone}</td>
							<td>{n.company.name}</td>
						</tr>	
					)}
					</tbody>
				</table>
				: this.state.fetching}
			</div>
    )
  }
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, null)(App);
