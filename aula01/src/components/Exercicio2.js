import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Exercicio2 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return (
    <View style={styles.container}>
      <Button title="incrementar" onPress={increment} />
      <Text>O contador está em: {contador}</Text>
      <Button title="decrementar" onPress={decrement} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 100
  },
});

export default Exercicio2