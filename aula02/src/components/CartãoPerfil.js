import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'


const CartaoPerfil = () => {
    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false)
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/113397588?v=4' }}
                style={styles.imagemPerfil}
            />

            <Text style={styles.nome}>Arthur</Text>
            <Text style={styles.ocupacao}>Dev</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => setDetalhesVisiveis(!detalhesVisiveis)}
            >
                <Text style={styles.textoBotao}>
                    {detalhesVisiveis ? 'Ver Menos' : 'Ver Mais'}
                </Text>
            </TouchableOpacity>

            {detalhesVisiveis &&
                (<View style={styles.detalhes}>
                    <Text style={styles.textoDetalhe}>João Pessoa</Text>
                </View>
                )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },

    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },

    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },

    ocupacao: {
        fontSize: 16,
        color: '#777',
        marginBottom: 10,
    },

    botao: {
        backgroundColor: '#0077b5',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },

    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    detalhes: {
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        width: '100%',
    },

    textoDetalhe: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
        textAlign: 'center',
    },
})

export default CartaoPerfil
