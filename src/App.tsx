import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import axios from 'axios'
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import { Link } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';


function App() {
  


  return (
    // <div className="App">
    //   <EventsExample/>
    //   <Card variant={CardVariant.outlined} width='200px' height='200px' onClick={() => console.log('click')}>
    //     <button>button</button>
    //   </Card>
    //   {/* <UserList users={users}/> */}
      
      
    // </div>
    <BrowserRouter>
      <div>
        <div>
          <Link to='/users'>Список пользователей</Link>
          <Link to='/todos'>Список дел</Link>
        </div>
        <Routes>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/todos' element={<TodosPage/>}/>
          <Route path='/users/:id' element={<UserItemPage/>}/>
          <Route path='/todos/:id' element={<TodoItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
