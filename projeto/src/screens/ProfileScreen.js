import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>👤 Meu Perfil</Text>
      <Text>Nome: arthur testes</Text>
      <Text>Email: testando69@gmail.com</Text>
      <Button title="Sair" onPress={() => navigation.replace('Login')} />
    </View>
  )
}

export default ProfileScreen