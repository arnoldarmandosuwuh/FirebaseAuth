import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../../utils'

const Profile = ({ name, desc, photo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={photo} style={styles.avatar} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{desc}</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})
