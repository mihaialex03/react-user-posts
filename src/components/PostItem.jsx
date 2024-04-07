import React from 'react';

export function PostItem(props) {
  const {title, body} = props;
  return (
      <div className="rounded background-custom p-3 mb-3">
          <h1>{title}</h1>
          <p>{body}</p>
      </div>
  );
}
