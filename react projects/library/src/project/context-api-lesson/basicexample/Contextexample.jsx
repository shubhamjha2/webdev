import React from 'react'
import Login from './Login'
import Showing from './Showing'
import { UserContextProvider } from '../../../context/usercontextprovider'
function Contextexample() {
  return (
    <UserContextProvider>
    <Login/>
    <Showing/>
    </UserContextProvider>
  )
}

export default Contextexample