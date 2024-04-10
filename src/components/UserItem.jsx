import React from 'react';
import Button from 'react-bootstrap/Button';

function UserItem(props) {
  const { name, email, username, phone, id, removeUser } = props;

  function handleRemoveUser() {
    removeUser(id);
  }
  
  return (
    <div className='rounded background-custom p-3 mb-3'>
      <h3 className='text-center'>{name}</h3>
      <p className='text-center'>{email}</p>
      <p className='text-center'>{username}</p>
      <p className='text-center'>{phone}</p>
      <Button onClick={handleRemoveUser} variant="danger">Delete user</Button>
    </div>
  );
}

export default UserItem;
