import React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { Divider, Layout, Text } from '@ui-kitten/components';
import { SwipableList } from '../components/Swipeable';
import BackButton from '../components/BackButton';
import tw from 'twrnc';

export const DetailsScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <BackButton title={'Swipable'} navigation={navigation} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h3' style={tw`my-5`}>Asistencias</Text>
                <SwipableList />
            </Layout>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});