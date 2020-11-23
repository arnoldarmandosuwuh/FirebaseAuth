import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button, Gap, Header, Input } from '../../components'
import { colors, useForm, storeData, showError } from '../../utils'
import { Fire } from '../../config'

const Register = ({ navigation }) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const onContinue = () => {
    dispatch({ type: 'SET_LOADING', value: true })
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        dispatch({ type: 'SET_LOADING', value: false })
        setForm('reset')
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        }
        Fire.database().ref(`users/${success.user.uid}/`).set(data)
        storeData('user', data)
        navigation.replace('Home')
      })
      .catch((error) => {
        dispatch({ type: 'SET_LOADING', value: false })
        showError(error.message)
      })
  }

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={(value) => setForm('profession', value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
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
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
})
