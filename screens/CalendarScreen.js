import React from 'react';
import { SafeAreaView } from 'react-native';
import { Calendar } from '../components/Calendar';
import { androidStatusBar } from '../utils/styles/SafeAreaAndroid';

export function CalendarScreen() {
    return (
        <SafeAreaView style={['flex: 1', androidStatusBar.AndroidSafeArea]}>
            <Calendar />
        </SafeAreaView>
    );
}