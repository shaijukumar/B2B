import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Image, Text } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import * as Yup from "yup";
import axios from "axios";

import { Form, FormField, SubmitButton } from "../common/components";
import AppButton from "../common/components/AppButton";
import Screen from "../common/components/Screen";
import AppText from "../common/components/AppText";
import colors from "../config/colors";
import { setToken, deleteToken } from "../common/CommonFunctions/token";

axios.defaults.baseURL = "http://192.168.1.105:5000/api";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});



export interface myProps extends NavigationStackScreenProps { }

const LoginScreen: React.FC<myProps> = ({ navigation }) => {

    const [errorMessage, setErrorMessage] = useState(" ");


    const onLoginSubmit = (values) => {
        debugger;

        //Get user details ans store in context
        let res = axios
            .post("/user/login", values)
            .then((responseBody) => {
                debugger;
                setToken(responseBody.data.token);
                navigation.navigate("AccountScreen");
            })
            .catch((ex) => {
                setErrorMessage("Invlaid login");
                deleteToken();
            });
    };


    useEffect(() => {
        // let id = navigation.getParam("itemId");
        // console.log("itemId : " + id);       
    })

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />

            <Form
                initialValues={{ email: "admin@test.com", password: "Pa$$w0rd" }}
                onSubmit={onLoginSubmit}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                {errorMessage && <AppText>{errorMessage}</AppText>}
                <SubmitButton title="Login" />
                <AppButton
                    title="Back"
                    //onPress={onLoginSubmit}
                    onPress={() => navigation.navigate("Home")}
                />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;