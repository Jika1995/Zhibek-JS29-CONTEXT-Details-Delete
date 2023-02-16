import React, {useState} from 'react';
import axios from 'axios'

export const usersContext = React.createContext();

const UsersContextProvider = ({children}) => {

    const API = 'http://localhost:8000/users';

    const [users, setUsers] = useState([]); //если поставить null, то все время надо будет условная отрисовка
    const [oneUser, setOneUser] = useState(null);

    async function getUsers () {
        let res = await axios(API); //под капотом get запрос - можно не писать в axios
        // console.log(res); 
        setUsers(res.data)
    };

    async function createUser (newUser) {
        await axios.post(API, newUser);
        getUsers(); //отрисовывает заново наших юзеров
    };

    async function getOneUser(id) {
        let res = await axios(`${API}/${id}`);
        setOneUser(res.data);
        console.log(res);
    };

    async function updateUser(id, editedUser) {
        await axios.patch(`${API}/${id}`, editedUser) //куда и на что поменять
        getUsers()
    };

    async function deleteUser(id) {
        await axios.delete(`${API}/${id}`);
        getUsers()
    }

    return (
        <usersContext.Provider value={{
            users,
            oneUser,

            getUsers,
            createUser,
            getOneUser,
            updateUser,
            deleteUser
        }}>
            {children}
        </usersContext.Provider>
    )
}

export default UsersContextProvider