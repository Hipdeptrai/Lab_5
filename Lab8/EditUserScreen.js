import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { updateUser } from './api';

const EditUserScreen = ({ route, navigation }) => {
    const { user } = route.params;
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleUpdate = async () => {
        const success = await updateUser(user.id, { name, email });
        if (success) {
            alert("Cập nhật thành công!");
            navigation.goBack();
        }
    };

    return (
        <View>
            <TextInput value={name} onChangeText={setName} />
            <TextInput value={email} onChangeText={setEmail} />
            <Button title="Lưu" onPress={handleUpdate} />
        </View>
    );
};

export default EditUserScreen;
