import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../Theme/theme";

export default function CategoryHeader(props){
    return(
        <View>
            <Text style={styles.categorytitle}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    categorytitle:{
        fontSize: theme.fontsize.medium,
        color:theme.colors.white,
        paddingHorizontal:theme.padd.large,
        fontWeight:'800',
        paddingVertical:theme.padd.large
    }
})