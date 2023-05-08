import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Text, } from '@ui-kitten/components';
import Play from '../components/Play';
import tw from 'twrnc';
import BackButton from '../components/BackButton';
import { androidStatusBar } from '../utils/styles/SafeAreaAndroid';

export const ReproductorScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={[tw`flex-1 bg-white`, androidStatusBar.AndroidSafeArea]}>
            <BackButton title={'Reproductor'} navigation={navigation} />
            <Divider />

            <Text category='h3' style={tw`my-5 bg-white text-center`}>VentuRadio</Text>

            <Play />

        </SafeAreaView>
    );
};