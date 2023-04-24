import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { UserScreen } from '../user/UserScreen'
import { LoginScreen } from '../login/LoginScreen'

export const PerfilScreen = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      {currentUser
        ? (
          <UserScreen />
          )
        : (
          <LoginScreen />
          )}
    </>

  )
}