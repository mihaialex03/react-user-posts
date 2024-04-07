import React from 'react';
import {PostItem} from './PostItem';


function PostList(props) {
  const {posts} = props;

  return (
      <div>
        <h2 className="text-center">Posts</h2>
          {posts.map((post) => {
              return <PostItem key={post.id} title={post.title} body={post.body} />;
          })}
      </div>
  );
}

export default PostList;
