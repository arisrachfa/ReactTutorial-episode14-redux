import React from 'react'
import {useDispatch, useSelector} from 'react-redux'



export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username)


  return (
    <h1>Home Page of: {username}</h1>
  )
}
