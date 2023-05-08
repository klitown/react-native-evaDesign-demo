import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Text, Button, Input, Select, SelectItem } from '@ui-kitten/components';
import BackButton from '../components/BackButton';
import { useForm, Controller } from "react-hook-form";
import tw from 'twrnc';
import { androidStatusBar } from '../utils/styles/SafeAreaAndroid'

export default function RegisterScreen({ navigation }) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            time: ''
        }
    });
    const onSubmit = data => alert(JSON.stringify(data));
    const timeUnitOptions = ['Days', 'Hours', 'Weeks'];

    return (
        <>
            <SafeAreaView style={[tw`flex-1`, androidStatusBar.AndroidSafeArea]}>
                <BackButton title={'Formularios'} navigation={navigation} />
                <ScrollView style={tw`p-5 bg-white`}>
                    <Text category='h3' style={tw`mb-5`}> Registro de usuario </Text>

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        name="firstName"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                status={errors.firstName && 'danger'}
                                placeholder='Nombre'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={tw`bg-white mb-4`}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        name="lastName"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                status={errors.lastName && 'danger'}
                                placeholder='Apellido'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={tw`bg-white mb-4`}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <Select
                                placeholder='Seleccionar opción'
                                value={value}
                                selectedIndex={0}
                                onSelect={(index) => {
                                    onChange(timeUnitOptions[index.row]);
                                }}
                            >
                                <SelectItem title='Days' />
                                <SelectItem title='Weeks' />
                                <SelectItem title='Hours' />
                            </Select>


                        )}
                        name="time"
                    />

                    <Button style={tw`mt-5`} onPress={handleSubmit(onSubmit)}>
                        Registrar
                    </Button>
                </ScrollView>

            </SafeAreaView>
        </>
    );
}