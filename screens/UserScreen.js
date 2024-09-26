import { Text, View, StyleSheet, Button } from 'react-native';
import VIPPressable from '../components/VipPressable';

function UserScreen({ navigation }) {

    // functions
    function openDrwaerHandler() {
        // console.log('pressed!')
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.container}>
            <Text>
                You are very prectigious <Text style={styles.welcomeText}>User</Text>
            </Text>
            <VIPPressable title="Click Me!" onPress={openDrwaerHandler}/>
        </View>
    )
};


export default UserScreen;


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        // alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    welcomeText: {
        fontWeight: '900',
        color: 'red',
        // marginTop:50

    }
});