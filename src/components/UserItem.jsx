import React from 'react';

function UserItem(props) {
  const { name, email } = props;
  
  return (
    <div className='rounded background-custom p-3 mb-3'>
      <h3 className='text-center'>{name}</h3>
      <p className='text-center'>{email}</p>
    </div>
  );
}

export default UserItem;
