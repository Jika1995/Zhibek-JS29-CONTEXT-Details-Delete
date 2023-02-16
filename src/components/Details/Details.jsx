import React, {useContext, useEffect} from 'react';
import { usersContext } from '../../userContext';
import { useParams } from 'react-router-dom';

const Details = () => {

  const { oneUser, getOneUser } = useContext(usersContext);

  const { id } = useParams()

  useEffect(() => {
    getOneUser(id)
  }, []);

  return (
    <div className='container'>
    {oneUser? (
      <>
      <h2>Details</h2>
      <h4>Name: {oneUser.name}</h4>
      <p>Email: {oneUser.email}</p>
      <p>Age: {oneUser.age}</p>
      </>
    ) : (<h1>Loading...</h1>)}
    </div>

  )
}

export default Details