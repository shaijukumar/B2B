import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";


const ListItemSeparator: React.FC<{ title: string, subTitle: string, imageUrl: string }> = ({ title, subTitle, imageUrl }) => {
    
    return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
    separator: {
      width: "100%",
      height: 1,
      backgroundColor: colors.light,
    },
  });

export default ListItemSeparator;
