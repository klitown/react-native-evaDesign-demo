import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackButton = ({ title, navigation }) => {

    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    return (
        <TopNavigation title={title} alignment='center' accessoryLeft={BackAction} />
    );
}

export default BackButton;