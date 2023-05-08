import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Play() {

    const nicolas = `
    <div style="display: flex; flex-direction: column; justify-content: center; 
        align-items: center; background-color: white; height: 100%;" > 
        <audio id="player" style="background-color: white; height: 80%; width: 100%">
            <source src="http://radio.hostingparaguay.net:8015/stream" type="audio/aac">
        </audio>
        <div style="display: flex; flex-direction: row; justify-content: center; 
        align-items: center; background-color: white; color: 'white'; height: 100%;" > 
            <button style="height:200px; width:200px; border-radius: 3rem; font-size: 2rem" onclick="document.getElementById('player').play()">Play</button> 
            <button style="height:200px; width:200px; border-radius: 3rem; margin-left: 5rem; font-size: 2rem" onclick="document.getElementById('player').pause()">Pause</button> 
        </div>
    </div>
`;

    return (
        <WebView
            style={styles.container}
            originWhitelist={['*']}
            source={{ uri: 'https://venturadio-vite.vercel.app' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
});
