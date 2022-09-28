import React from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
	user: IUser
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
	return (
		<div>
			<div style={{padding: 15, border: '1px solid gray'}}>
					{user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
				</div>
		</div>
	)
}

export default UserItem