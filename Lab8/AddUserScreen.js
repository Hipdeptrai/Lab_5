import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createUser } from './api';

const AddUserScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleCreate = async () => {
        const newUser = { name, email };
        const success = await createUser(newUser);
        if (success) {
            alert("Thêm người dùng thành công!");
            navigation.goBack();
        }
    };

    return (
        <View>
            <TextInput placeholder="Nhập tên" value={name} onChangeText={setName} />
            <TextInput placeholder="Nhập email" value={email} onChangeText={setEmail} />
            <Button title="Thêm" onPress={handleCreate} />
        </View>
    );
};

export default AddUserScreen;
