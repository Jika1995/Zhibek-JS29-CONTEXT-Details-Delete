import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usersContext } from '../../userContext';

const EditForm = () => {

  const {oneUser, getOneUser, updateUser} = useContext(usersContext);
  const {id} = useParams();
  
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  useEffect (() => {
    getOneUser(id)
  }, []);

  useEffect (() => {
      if (oneUser) {
        setName(oneUser.name);
        setEmail(oneUser.email);
        setAge(oneUser.age)
      }
  }, [oneUser, ]) //следит за тем лежит ли там объект и инпуты поменяются

  function saveChanges () {
    let editedUser = {
      name,
      email,
      age
    };

    updateUser(id, editedUser);

    navigate('/users');
    
  }

  return oneUser ? (
    <div>
      <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)}/>
      <input type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type="text" placeholder='age' value={age} onChange={e => setAge(e.target.value)}/>

      <button onClick={saveChanges}>Save</button>
    </div>
  ) : (
    <h2>Loading</h2>
  )
}

export default EditForm