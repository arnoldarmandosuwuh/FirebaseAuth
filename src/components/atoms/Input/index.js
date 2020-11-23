import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils'

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  editable,
  selectTextOnFocus,
}) => {
  const [border, setBorder] = useState(colors.border)
  const onFocusForm = () => {
    setBorder(colors.tertiary)
  }
  const onBlurForm = () => {
    setBorder(colors.border)
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!editable}
        selectTextOnFocus={!selectTextOnFocus}
        style={styles.input(border)}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontWeight: '400',
  },
})
