import React from 'react';

function UserItem(props) {
  const { name, email, marketValueTrend, isNew } = props;
  let marketValueBadge;

  if (marketValueTrend === 'same') {
    marketValueBadge = 'Cota de piata constanta';
  } else if (marketValueTrend === 'up') {
    marketValueBadge = 'Cota de piata in crestere';
  } else if (marketValueTrend === 'down') {
    marketValueBadge = 'Cota de piata in scadere';
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      {isNew && <p>Jucator nou</p>}
      {marketValueBadge}
    </div>
  );
}

export default UserItem;
