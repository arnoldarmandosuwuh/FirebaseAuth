import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { colors, getData, storeData, showError } from '../../utils'
import { Header, Profile, Input, Button, Gap } from '../../components'
import { Fire } from '../../config'
import { ILNullPhoto } from '../../assets'

const UpdateProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  })

  useEffect(() => {
    getData('user').then((res) => {
      setProfile(res)
    })
  }, [])

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karakter')
      } else {
        updatePassword()
        updateProfileData()
        navigation.replace('Home')
      }
    } else {
      updateProfileData()
      navigation.replace('Home')
    }
  }

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((error) => {
          showError(error.message)
        })
      }
    })
  }

  const updateProfileData = () => {
    Fire.database()
      .ref(`users/${profile.uid}`)
      .update(profile)
      .then(() => {
        storeData('user', profile)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    })
  }
  const [password, setPassword] = useState('')
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile photo={ILNullPhoto} />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={profile.email}
            editable
            selectTextOnFocus
            onChangeText={(value) => changeText('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  )
}

export default UpdateProfile

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
