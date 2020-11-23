import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconEditProfile, IconLogout, IconNext } from '../../../assets'
import { colors } from '../../../utils'

const List = ({ profile, name, desc, type, onPress, icon }) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />
    }

    if (icon === 'logout') {
      return <IconLogout />
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
})
