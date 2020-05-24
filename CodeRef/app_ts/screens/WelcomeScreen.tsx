import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";



const WelcomeScreen: React.FC<{}> = () => {
        let imgBackground = require("../assets/background.jpg");
        let imgLogo = require("../assets/logo-red.png");


        return (
            <ImageBackground
                blurRadius={10}
                style={styles.background}
                source={imgBackground}
            >
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={imgLogo} />
                    <Text style={styles.tagline}>Sell What You Need</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <AppButton title="Login" />
                    <AppButton title="Register" color={colors.secondary} />
                </View>
            </ImageBackground>
        )
    }

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;
