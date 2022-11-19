import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../constants/color'

const NotFound = () => {
    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            
            <Text style={{
                color: colors.INFO,
                fontSize: 20,
                marginTop: 20,
                textTransform: "uppercase"
            }}>Result not found</Text>
        </View>
    )
}

export default NotFound

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.5,
        zIndex: -1,
    },
})