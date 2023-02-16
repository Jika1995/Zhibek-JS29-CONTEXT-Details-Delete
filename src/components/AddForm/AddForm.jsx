import {React, useContext, useState} from 'react';
import { usersContext } from '../../userContext';

const AddForm = () => {

    const { createUser } = useContext(usersContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    function registerUser () {

        let newUser = {
            name,
            email,
            age
        };

        for (let key in newUser) { //потому что перебираем объект
            if(!newUser[key]) { //берет значение каждого ключа
                alert('Some inputs are empty!');
                return
            };
        };

        createUser(newUser);

        setName('');
        setEmail('');
        setAge('');

    };

  return (
    <div>
        <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" placeholder='age' value={age} onChange={e => setAge(e.target.value)}/>

        <button onClick={registerUser}>Register</button>
    </div>
  )
}

export default AddForm