import { View, Text } from 'react-native'
import React from 'react'
import Greet from './Greet'
import ComponentA from './ComponentA'
import Naya from './Naya'


function New() {
  return (
    <View>
      <ComponentA />
      <Greet />
      <Naya />
    </View>
  )
}

export default New