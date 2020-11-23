import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Gap, Profile, List } from '../../components'
import { colors, getData, showError } from '../../utils'
import { ILNullPhoto } from '../../assets'
import { Fire } from '../../config'

const Home = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
  })

  useEffect(() => {
    getData('user').then((res) => {
      const data = res
      console.log(data)
      setProfile(data)
    })
  }, [])

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted')
      })
      .catch((error) => {
        showError(error.message)
      })
  }
  return (
    <View style={styles.page}>
      <Gap height={10} />
      <Profile
        name={profile.fullName}
        desc={profile.profession}
        photo={ILNullPhoto}
      />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Edit your profile"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Sign Out"
        desc="Sign out your account"
        type="next"
        icon="logout"
        onPress={signOut}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
})
