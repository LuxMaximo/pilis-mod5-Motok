import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './LoginScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { getUsers } from '../../api/user.service'
import { UserContext } from '../../context/UserContext'
import { useNavigation } from '@react-navigation/native'
//import { AdminContext } from '../../context/AdminContext'
//import { getAdmin } from '../../api/admin.service'

export const LoginScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  //const { setCurrentAdmin } = useContext(AdminContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handleLogin = ({ username, password }) => {
    getUsers() 
      .then(users => {
        const user = users
        user.forEach(e => {
          console.log(`lo del for usuario : ${e.username}`)
          if (username === e.username && password === e.password) {
            setCurrentUser({ username, password })
            navigation.navigate('Home')
          }else{
            if(username === "admin" && password === "1234"){
              setCurrentUser({ username, password })
              navigation.navigate('AdminScreen')
            }
          }
        });

      })
      .catch(err => console.warn(err))
  }
/*
  const handleLoginAdmin = ({ username, password }) => {
    getAdmin()
      .then(admin => {
        const ad = admin
        ad.forEach(e => {
          console.log(`lo del for admin : ${e.username}`)
          if (username === e.username && password === e.password) {
            setCurrentAdmin({ username, password })
            navigation.navigate('ConfigProducts')
          }
        });

      })
      .catch(err => console.warn(err))
  }*/

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Nombre de usuario'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='username'
        rules={{ required: 'El nombre de usuario es requerido' }}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name='password'
        rules={{ required: 'La constraseña es requerida' }}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin || handleLoginAdmin)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
