import { Text, StyleSheet, View } from 'react-native';
function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text> <Text style={styles.welcomeText}>''Welcome''</Text> To React-Native</Text>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        // alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontWeight: '900',
        color: 'red'
    }

});