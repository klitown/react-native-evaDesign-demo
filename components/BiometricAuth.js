import React from 'react';
import * as LocalAuthentication from 'expo-local-authentication'
import { Button, Text } from '@ui-kitten/components';

export function BiometricAuth() {

    // Check to see if the device has support
    const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

    // Check if hardware supports biometrics
    React.useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    });

    const handleBiometricAuth = async () => {
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics)
            return Alert.alert(
                'Biometric record not found',
                'Please verify your identity with your password',
                'OK',
                () => fallBackToDefaultAuth()
            );
    }

    const authenticate = async () => {
        try {
            const results = await LocalAuthentication.authenticateAsync();

            if (results.success) {
                console.log('Success')
            } else if (results.error === 'unknown') {
                console.log('Disabled')
            } else if (
                results.error === 'user_cancel' ||
                results.error === 'system_cancel' ||
                results.error === 'app_cancel'
            ) {
                console.log('Cancelled')
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <>

            <Text> {isBiometricSupported ? 'Your device is compatible with Biometrics'
                : 'Face or Fingerprint scanner is available on this device'}
            </Text>
            <Button onPress={authenticate}>
                Authenticate
            </Button>

        </>
    )
}