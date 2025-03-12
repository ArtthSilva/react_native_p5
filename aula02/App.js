import { View, Text } from 'react-native'
import React from 'react'
import CartaoPerfil from './src/components/CartãoPerfil'
 
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CartaoPerfil />
    </View>
  )
}

export default App