import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import Grid from "./components/Grid";
import {BOX_SIZE, GRID_SIZE, height, POSITIONS, width} from "./components/utils/contants";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const App = () => {
    console.log(`width: ${width}, height: ${height}, GRID_SIZE: ${GRID_SIZE}, BOX_SIZE: ${BOX_SIZE}, POSITIONS: ${POSITIONS}`)
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto"/>
                <Grid/>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1faee',
    },
});

export default App;
