import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <Image source={ILLogo} style={styles.logo} />
        <Text style={styles.title}>Selamat Datang</Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
    fontWeight: '600',
  },
  logo: {
    width: 100,
    height: 100,
  },
})
