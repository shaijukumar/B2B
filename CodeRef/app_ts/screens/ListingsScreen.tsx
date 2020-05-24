import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";


const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: "https://images.dog.ceo/breeds/setter-english/n02100735_4540.jpg",
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2737.jpg",
    },
    {
        id: 3,
        title: "Red jacket for sale",
        price: 100,
        image: "https://images.dog.ceo/breeds/beagle/n02088364_12973.jpg",
    },
    {
        id: 4,
        title: "Couch in great condition",
        price: 1000,
        image: "https://images.dog.ceo/breeds/hound-plott/hhh-23456.jpeg",
    },
];

const ListingsScreen: React.FC<{}> = () => {



    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.image}
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

export default ListingsScreen;
