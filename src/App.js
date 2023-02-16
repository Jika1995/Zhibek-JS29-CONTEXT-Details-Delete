import React from 'react';
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';
import CounterContextProvider from './counterContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Counter2 from './components/Counter2/Counter2';
// users
import AddForm from './components/AddForm/AddForm';
import EditForm from './components/EditForm/EditForm';
import Details from './components/Details/Details';
import UsersList from './components/UsersList/UsersList';
import  UsersContextProvider  from './userContext';

const App = () => {
  return (
    <UsersContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/counter' element={<Counter />}/>
            <Route path='/counter2' element={<Counter2 />}/>

            {/* users road */}
            <Route path='/users' element={<><AddForm /> <UsersList /></>}/>
            <Route path='/details/:id' element={<Details />}/>
            <Route path='/edit/:id' element={<EditForm />}/>

          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </UsersContextProvider>
      
  )
}

export default App

      {/* <Button text={'Register'}/>
      <Button text={'Product List'}/> */}
      {/* <Button>Register</Button>
      <Button>Product List</Button> */}