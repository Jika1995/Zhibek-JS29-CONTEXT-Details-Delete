import React, {useContext, useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; //хук, помогает перемещаться по компонентам
import { usersContext } from '../../userContext';

const UsersList = () => {

  const { getUsers, users, deleteUser } = useContext(usersContext);
  // console.log(users);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
  }, []);


  return (
    <div>
      {users.map(item => ( // { } ---> нужен return! () ---> не нужен! 
        <div key={item.id}>
          Name: {item.name};
          Email: {item.email};
          Age: {item.age}

          <button onClick={() => deleteUser(item.id)}>Delete</button>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
          <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
        </div>
      ))}
    </div>
  )
}

export default UsersList