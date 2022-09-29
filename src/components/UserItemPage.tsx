import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../types/types';

interface UserItemPageParams {
	id: string
}

const UserItemPage: React.FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams();

	const navigate = useNavigate()

	useEffect(() => {
		fetchUser();
	}, []);

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>(
				'https://jsonplaceholder.typicode.com/users/' + params.id,
			);
			setUser(response.data);
		} catch (error) {
			alert(error);
		}
	}
	return (
		<div>
			<button onClick={() => navigate('/users')}>back</button>
			<h1>Страница пользователя {user?.name}</h1>
			<div>{user?.email}</div>
			<div>
				{user?.address.city} {user?.address.street} {user?.address.zipcode}
			</div>
		</div>
	);
};

export default UserItemPage;
