import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TapGestureHandler } from 'react-native-gesture-handler';

import colors from "../config/colors";



const ListItem: React.FC<{
    title: any,
    subTitle?: string,
    imageUrl?: string,
    IconComponent?: any,
    onPress?: any,
    renderRightActions?: any
}>
    = ({ title,
        subTitle,
        imageUrl,
        IconComponent,
        onPress,
        renderRightActions
    }) => {


        return (
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                    <View style={styles.container}>
                        {IconComponent}
                        {imageUrl &&
                            <Image
                                source={{ uri: imageUrl }}
                                style={styles.image}
                            />
                        }
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        )
    }

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
    },
});

export default ListItem;
