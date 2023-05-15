import {useState} from 'react'
import { login, logout } from '../store';
import {useDispatch, useSelector} from 'react-redux'

export const Login = () => {

  // state
  const [newUsername, setNewUsername] = useState<string>("");

  // func
  const dispacth = useDispatch();
  const username = useSelector((state: any) => state.user.value.username)

  // useDispatch  digunakan untuk mengirimkan sebuah action yang dihasilkan oleh Redux ke Reducer dan kemudian
  // mengirimkannya ke store redux

  // useSelector digunakan untuk mendapatkan state value pada store redux

  return (
    <>
      <h1>Ini Halaman Login</h1>
      <h1>Hello: {username}</h1>
      <hr />
      <input onChange={(e) => {
        setNewUsername(e.target.value);
      }} />
      <button onClick={() => 
        dispacth(login(
          {username: newUsername}
        )
      )}>Login</button>

      <button onClick={() => dispacth(logout())}>Logout</button>
    </>
  )
}
