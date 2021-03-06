import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { size } from 'lodash'

import { validateEmail } from '../../navigations/utils/helpers'

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")

    const onChange = (e, type) => {
        setFormData ({ ...formData, [type]: e.nativeEvent.text })
    }

    const registerUser = () => {
        if (!validate()) {
            return
        }

        console.log("Siiiiiii")
    }

    const validate =  () => {
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true

        if(!validateEmail(formData.email)) {
            setErrorEmail("Debes Ingresar un Mail válido.")
            isValid = false
        }

        if (size(formData.password) < 6) {
            setErrorPassword("Debes ingresar una contraseña de al menos 6 Carácteres")
            isValid = false
        }

        if (size(formData.confirm) < 6) {
            setErrorConfirm("Debes ingresar una confirmación de contraseña de al menos 6 Carácteres")
            isValid = false
        }

        if (formData.password !== formData.confirm) {
            setErrorPassword("La contraseña y la confirmación no son iguales.")
            setErrorConfirm("La contraseña y la confirmación no son iguales.")
            isValid = false
        }

        return isValid
    }

    return (
        <View
        style={styles.form}
        >
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu email...."
                onChange={(e) => onChange(e,"email")}
                keyboardType="email-address"
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu Contraseña...."
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e,"password")}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                containerStyle={styles.input}
                placeholder="Confirma tu Contraseña...."
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e,"confirm")}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button
                title="Registrar Nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={() => registerUser()}
            />
        </View>
    )
}

const defaultFormValues = () => {
    return { email: "", password: "", confirm: ""}
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30
    },
    input: {
        width: "100%"
    },
    btnContainer: {
        marginTop: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#442484"
    },
    icon: {
        color: "#c1c1c1"
    }
})
