import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { ILLogo } from '../../assets'
import { colors, showError, storeData, useForm } from '../../utils'
import { Button, Gap, Input, Link } from '../../components'
import { Fire } from '../../config'

const Login = ({ navigation }) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const login = () => {
    dispatch({ type: 'SET_LOADING', value: true })
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        dispatch({ type: 'SET_LOADING', value: false })
        Fire.database()
          .ref(`users/${success.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val())
              navigation.replace('Home')
            }
          })
      })
      .catch((error) => {
        dispatch({ type: 'SET_LOADING', value: false })
        showError(error.message)
      })
  }

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <Image source={ILLogo} style={styles.imageLogo} />
        <Text style={styles.title}>Silahkan Masuk</Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          secureTextEntry
          label="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: colors.white,
  },
  imageLogo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
})
