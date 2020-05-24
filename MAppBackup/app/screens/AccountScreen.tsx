import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import axios from "axios";

import { ListItem, ListItemSeparator } from "../common/lists";
import Icon from "../common/components/Icon";
import Screen from "../common/components/Screen";

import colors from "../config/colors";
import { deleteToken, getToken } from "../common/CommonFunctions/token";

import { NavigationStackScreenProps } from "react-navigation-stack";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        screen: "ListingsScreen",
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        screen: "MessagesScreen",
    },
];

export interface myProps extends NavigationStackScreenProps { }

const AccountScreen: React.FC<myProps> = ({ navigation }) => {

    const [userDetails, setUserDetails] = useState({ hits: [] });


    const updateUserDetails = () => {

    };

    useEffect(() => {
        getToken().then((token) => {
            if (token) {
                axios
                    .get("/user", {
                        headers: { Authorization: `Bearer ${token}` },
                    })
                    .then((responseBody) => {
                        //debugger;
                        setUserDetails(responseBody.data);
                    })
                    .catch((ex) => {
                        navigation.navigate("LoginScreen");
                        console.log(ex);
                    });
            }
        });
    }, [setUserDetails]);

    const onLogout = (values) => {
        //debugger;
        deleteToken().then((token) => {
            navigation.navigate("Home");
        });
    };

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="11" //{userDetails.displayName}
                    subTitle="-" //{userDetails.email} //{userDetails.email}
                    image={require("../assets/user-dummy-200x200.png")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() => navigation.navigate(item.screen)}
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                onPress={onLogout}
            />

            <ListItem
                title="updateUserDetails"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                onPress={updateUserDetails}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;
