import axios from "axios";

const API_URL = "https://localhost:3000/users";

// lấy danh sách người dùng

export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Lỗi lấy dũ liệu người dùng", error); // Xuất lý dụng error
        return [];
    }
}

// xoá người dùng theo id

export const deleteUserByID = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Lỗi xóa người dùng", error);
        return false;
    }
}

// thêm người dùng

export const addUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user);
        return response;
    } catch (error) {
        console.error("Lỗi thêm người dùng", error);
        return null;
    }
}

// cap nhật người dùng

export const updateUserByID = async (id, user) => {
    try {
        await axios.put(`${API_URL}/${id}`, user);
        return true;
    } catch (error) {
        console.error("Lỗi cap nhật người dùng", error);
        return false;
    }
}