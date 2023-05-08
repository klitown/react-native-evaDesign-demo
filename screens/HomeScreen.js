import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Platform, StatusBar } from 'react-native';
import { Layout, TopNavigation, Card, Text, Button, Divider, Icon } from '@ui-kitten/components';
import { AuthContext } from '../utils/context/AuthContext';
import tw from 'twrnc';

export const HomeScreen = ({ navigation }) => {

    const StarIcon = (props) => (
        <Icon {...props} name='star' />
    );


    const navigateDetails = (screenName) => {
        navigation.navigate(screenName);
    };

    const { signOut } = React.useContext(AuthContext);


    return (
        <SafeAreaView style={[tw`flex-1 bg-white`, styles.AndroidSafeArea]}>
            <TopNavigation title='Inicio - Demo Enterprise' alignment='center' style={tw`bg-white`} />
            <ScrollView>
                <Layout style={{ flex: 1, marginBottom: 50 }}>
                    <Text category='h2' style={tw`ml-4 mt-5`}>
                        Bienvenido, Admin 👋🏻
                    </Text>

                    <View style={tw`flex justify-center items-center my-4 mr-2`}>
                        <Button style={tw`w-32`} onPress={signOut} appearance='outline' status='danger' size='small'>
                            Cerrar Sesión
                        </Button>
                    </View>

                    <Divider />

                    <Text category='p1' style={tw`ml-1 p-3 mt-4 text-blue-700 font-bold`}>
                        Selecciona una opción para empezar
                    </Text>
                    <Layout style={tw`items-center`}>

                        <Button onPress={() => navigateDetails('Details')} status='success'
                            accessoryLeft={StarIcon} style={tw`mt-5`}>
                            Asistencias
                        </Button>

                        <Button onPress={() => navigateDetails('Register')} status='success'
                            accessoryLeft={StarIcon} style={tw`mt-5`}>
                            Registro
                        </Button>

                        <Button onPress={() => navigateDetails('Reproductor')} status='success'
                            accessoryLeft={StarIcon} style={tw`mt-5`}>
                            Radio Demo
                        </Button>

                        <Button onPress={() => navigateDetails('Biometric')} status='success'
                            accessoryLeft={StarIcon} style={tw`mt-5`}>
                            Biometric
                        </Button>

                        <Button onPress={() => navigateDetails('Camera')} status='success'
                            accessoryLeft={StarIcon} style={tw`mt-5`}>
                            Cámara
                        </Button>

                        <Button onPress={() => navigateDetails('Calendar')} status='success'
                            accessoryLeft={StarIcon} style={tw`mt-5`}>
                            Calendario
                        </Button>

                    </Layout>
                </Layout>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});