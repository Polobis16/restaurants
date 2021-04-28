import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'


export default function UserGuest() {
    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text 
                style={styles.title}
            >
                Consulta tu Perfil en Restaurants
            </Text>
            <Text
                style={styles.description}
            >
                ¿Cómo describirías tu mejor Restaurante? Busca y visualiza los mejos Restaurants de forma sencilla, vota cúal te ha gustado más y comenta cómo ha sido tu experencia.
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Ver tu perfil"
                onPress={() => console.log("Click")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10,
        textAling: "center"
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description: {
        textAlign: "justify",
        marginBottom: 20,
        color: "#a65273"
    },
    button: {
        backgroundColor: "#442484"
    }
})