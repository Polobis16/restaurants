import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading'

export default function UserGuest() {
    return (
        <View>
            <Text>UserGuest...</Text>
            <Loading
                isVisble={true}
                text="Cargando..."
            />
        </View>
    )
}

const styles = StyleSheet.create({})
