import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const VIPPressable = ({ title, onPress, style }) => {
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: 'white' }}
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
                style,
            ]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6200EE', // Primary color
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 24,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonPressed: {
        opacity: 0.7,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default VIPPressable;
