import * as React from 'react';
import { Text } from 'react-native';
import CustomText from '../components/Text'
export default function Header({ value }) {
    return <CustomText style={{ width: "100%" }}>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>{value}</Text>
    </CustomText>
}