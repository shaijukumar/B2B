import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";



const AppText: React.FC<{ children: any, style: any }> = ({ children, style }) => {
    return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
});

export default AppText;
