import React, { useState, useEffect } from 'react';
import { View, Divider, Text, StyleSheet } from "react-native";
import CustomText from '../components/Text'

export default function Category(props) {
    return (
        <View >
            <View style={styles.container}>
                <View style={{ marginRight: 10 }}>
                    <CustomText>
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>{props.title}</Text>
                    </CustomText>
                </View>
                <View style={{ flex: 0.3, height: 1, backgroundColor: 'gray' }} />
            </View>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center' }
});