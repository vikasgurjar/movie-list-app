import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';

export default function CustomText({ type, children, style = {} }) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_400Regular
    });

    return (
        <View style={{ ...style }}>
            {type === "thin" ?
                <Text style={{ fontFamily: 'Inter_400Regular' }}>{children}</Text>
                :
                <Text style={{ fontFamily: 'Inter_900Black' }}>{children}</Text>
            }
        </View>
    )
}