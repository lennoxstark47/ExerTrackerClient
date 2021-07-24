import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
		};
	}

	onUsernameChange = (event) => {
		this.setState({
			username: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const newUser = {
			username: this.state.username,
		};
		console.log(newUser);
		axios
			.post(
				'https://warm-beyond-25693.herokuapp.com/users/add',
				newUser
			)
			.then((response) =>
				console.log(response.data)
			);
		this.setState({
			username: '',
		});
	};

	render() {
		return (
			<div>
				<h3>Create new user</h3>
				<form onSubmit={this.handleSubmit}>
					<div className='form-group'>
						<label>Username: </label>
						<input
							type='text'
							required
							className='form-control'
							onChange={this.onUsernameChange}
							value={this.state.username}
						/>
					</div>
					<div className='form-group'>
						<input
							type='submit'
							className='btn btn-primary'
							value='Create User'
						/>
					</div>
				</form>
			</div>
		);
	}
}
