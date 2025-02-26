import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { getUsers, deleteUser } from './api';
import { useNavigation } from '@react-navigation/native';

const UserListScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    const handleDelete = async (id) => {
        const success = await deleteUser(id);
        if (success) {
            alert("Xóa thành công!");
            fetchUsers();
        }
    };



    const UserListScreen = () => {
        const navigation = useNavigation();
        return (
            <Button title="Go to Details" onPress={() => navigation.navigate("DetailsScreen")} />
        );
    };


    return (
        <View>
            <Button title="Thêm người dùng" onPress={() => navigation.navigate('AddUser')} />
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name} - {item.email}</Text>
                        <Button title="Sửa" onPress={() => navigation.navigate('EditUser', { user: item })} />
                        <Button title="Xóa" onPress={() => handleDelete(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default UserListScreen;
