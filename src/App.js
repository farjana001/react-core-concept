import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const clothes = [
    {id: 10, name: 'Long Kurti', item: 'Ladies'},
    {id: 11, name: 'Short Kurti', item: 'Ladies & Gents'},
    {id: 12, name: 'Dhupiyan', item: 'Ladies & Gents'},
    {id: 13, name: 'Tank Top', item: 'Ladies'},
    {id: 14, name: 'T-shirt', item: 'Ladies & Gents'},

  ];

  const catName = ['Mini', 'Minu', 'Pushu', 'Tushu', 'Billi', 'pussy'];

  // const productName = clothes.map(clothes => clothes.name);
  
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            catName.map(cat => <li>{cat}</li>)
          }
        </ul>
        <Counter></Counter>
        <Users></Users>
        <Fashion clothes={clothes[0]}></Fashion>
        <Fashion clothes={clothes[1]}></Fashion>
        <Fashion clothes={clothes[2]}></Fashion>
        <Fashion clothes={clothes[3]}></Fashion>
        
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => {
        if(count > 0){
          setCount(count - 1);
        }
        else{
          alert('not valid');
        }
      }}>Remove</button>
    </div>
  )
}

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users {user.length}</h3>
      <ul>
        {
          user.map(u => <li>{u.name}{u.phone}</li>)
        }
      </ul>
    </div>
  )
}
 
function Fashion(props) {
  const fashionStyle={
    width:'400px',
    border:'2px solid blue',
    borderRadius:'5px',
    backgroundColor:'#36aac3',
    color:'black',
    margin:'5px',
    padding:'10px'
  }
  const {name, id, item} = props.clothes;
  return (
    <div style={fashionStyle}>
      <h3>Item: {name}</h3>
      <p>Id: {id}</p>
      <p>For: {item}</p>
    </div>
  )
}

export default App;
