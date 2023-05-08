import React from 'react';
import { View, SafeAreaView } from 'react-native'
// Navigation stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ui kitten
import { Divider, Text, Button } from '@ui-kitten/components';
// styles
import tw from 'twrnc';
// Context to manage user state
import { AuthContext } from '../utils/context/AuthContext';
// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { ReproductorScreen } from '../screens/ReproductorScreen';
import { BiometricScreen } from '../screens/BiometricScreen';
import { CameraScreen } from '../screens/CameraScreen';
import { CalendarScreen } from '../screens/CalendarScreen';

// NAVIGATOR STACK
const { Navigator, Screen } = createNativeStackNavigator();

function SignIn() {
    const { signIn } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={tw`flex-1 justify-center items-center`}>
            <Text category='h6'> Acá se simula el login a la APP </Text>
            <Text category='p1' style={tw`px-3 my-1`}>
                Desde esta pantalla, no se puede acceder a las demas pantallas (Home, Form, etc..)
            </Text>
            <Text category='p1' style={tw`px-3 my-1`}>
                Se utiliza el Context para manejar el estado del user
            </Text>
            <Divider />
            <Button style={tw`mt-4`} onPress={() => signIn({ username: 'test', password: '13213' })}>
                Ingresar
            </Button>
        </SafeAreaView>
    );
}

function SplashScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Text>Loading...</Text>
        </View>
    );
}

export const AppNavigator = () => {

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                // Restore token stored in `SecureStore` or any other encrypted storage
                // userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async (data) => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    {state.isLoading ? (
                        // We haven't finished checking for the token yet
                        <Screen name="Splash" component={SplashScreen} />
                    ) : state.userToken == null ? (
                        // No token found, user isn't signed in
                        <Screen
                            name="SignIn"
                            component={SignIn}
                            options={{
                                title: 'Sign in',
                                // When logging out, a pop animation feels intuitive
                                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                            }}
                        />
                    ) : (
                        // User is signed in
                        <>
                            <Screen name='Home' component={HomeScreen} />
                            <Screen name='Register' component={RegisterScreen} />
                            <Screen name='Details' component={DetailsScreen} />
                            <Screen name='Reproductor' component={ReproductorScreen} />
                            <Screen name='Biometric' component={BiometricScreen} options={{
                                presentation: 'modal'
                            }} />
                            <Screen name='Camera' component={CameraScreen} />
                            <Screen name='Calendar' component={CalendarScreen} />
                        </>
                    )}
                </Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
};