import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

export default class AppleStyleSwipeableRow extends Component {

    renderLeftActions = () => {
        return (
            <RectButton style={styles.leftAction} onPress={this.close}>
                <Animated.Text
                    style={[
                        styles.actionText
                    ]}
                >
                    Archive
                </Animated.Text>
            </RectButton>
        );
    };

    renderRightAction = (text, color) => {

        const pressHandler = () => {
            this.close();
            alert(text);
        };

        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    renderRightActions = () => (
        <View style={{ width: 192, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
            {this.renderRightAction('More', '#C8C7CD')}
            {this.renderRightAction('Flag', '#ffab00')}
            {this.renderRightAction('More', '#dd2c00')}
        </View>
    );

    updateRef = ref => {
        this._swipeableRow = ref;
    };

    close = () => {
        this._swipeableRow.close();
    };

    render() {
        const { children } = this.props;
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                leftThreshold={30}
                rightThreshold={40}
                renderLeftActions={this.renderLeftActions}
                renderRightActions={this.renderRightActions}>
                {children}
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
