import React from 'react';
import UserItem from './UserItem';

export function UserList(props) {
  const { users } = props;

  return (
    <div>
      <h2 className="text-center">Users</h2>
      {users.map((user, index) => {
        return (
          <UserItem
            key={index}
            name={user.name}
            email={user.email}
            username={user.username}
            phone={user.phone}
          />
        );
      })}
    </div>
  );
}
