import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

const AppTextInput: React.FC<{
    icon?: string,
    width?: string,
    onBlur?: any,
    onChangeText?: any,
    autoCapitalize?: any,
    autoCorrect?: boolean,
    keyboardType?: any,
    placeholder?: string,
    textContentType?: any,
    secureTextEntry?: boolean
}>
    = ({
        icon,
        width = "100%",
        onBlur,
        onChangeText,
        autoCapitalize = "none",
        autoCorrect = true,
        keyboardType = "default",
        placeholder = "",
        textContentType = "none",
        secureTextEntry = true
    }) => {
        return (

            //x:string = autoCapitalize ? autoCapitalize : "none";

            <View style={[styles.container, { width }]}>
                {icon && (
                    <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon}
                    />
                )}
                <TextInput
                    placeholderTextColor={defaultStyles.colors.medium}
                    style={defaultStyles.text}
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    textContentType={textContentType}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default AppTextInput;
