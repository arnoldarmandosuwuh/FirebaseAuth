import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../utils'
import { ILLogo } from '../../assets'
import { Fire } from '../../config'

const Splash = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('Home')
        } else {
          navigation.replace('GetStarted')
        }
      }, 3000)
    })

    return () => unsubscribe()
  }, [navigation])

  return (
    <View style={styles.page}>
      <Image source={ILLogo} style={styles.imageIcon} />
      <Text style={styles.title}>Firebase Auth</Text>
      <Text style={styles.desc}>By Arnold Armando Suwuh</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  imageIcon: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginTop: 20,
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginTop: 10,
  },
})
