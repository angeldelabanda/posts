import React from 'react'
import { useGetPosts } from '../post.hooks';

const PostList = () => {
    const { data, isLoading, isError, error } = useGetPosts();

    if (isLoading) return <p>Loading...</p> 
    if (isError) return <p>{error.message}</p> 

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default PostList