import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";



const Icon: React.FC<{ name: any, size?: number, backgroundColor?: string, iconColor?: string }>
    = ({ name, size, backgroundColor, iconColor }) => {

        if (!size)
            size = 40

        if (!backgroundColor)
            backgroundColor = colors.black

        if (!iconColor)
            iconColor = colors.white

        return (
            <View
                style={{
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
            </View>
        )
    }

export default Icon;
