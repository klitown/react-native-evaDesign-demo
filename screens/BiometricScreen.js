import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text, } from '@ui-kitten/components';
import BackButton from '../components/BackButton';
import { BiometricAuth } from '../components/BiometricAuth';
import tw from 'twrnc';

export const BiometricScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <BackButton title={'Biometric Auth'} navigation={navigation} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h3' style={tw`my-5`}>Biometric Auth</Text>
                <BiometricAuth />
            </Layout>
        </SafeAreaView>
    );
};