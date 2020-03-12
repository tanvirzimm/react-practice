import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 
  const products = [
    {name:'photoshop',price:'69$'},
    {name:'illustrator',price:'81$'},
    {name:'Adobe Reader',price:'100$'}
  ]

  


  return (
    <div className="App">
      <header className="App-header">

      {products.map((pd,index) => <ProductsList key={index} singleitem={pd}></ProductsList>)}
      <Counter></Counter>
      <Users></Users>
      </header>
    </div>
  );
}


function Users(){

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers(json))
  },[]);

  console.log(users);
  

  return(
    <div>
      <h1>Users list : {users.length}</h1>
      <ul>
        {
          users.map(user => <li>Name : {user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(3);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}




function ProductsList(props){

  const setStyle = {
    border:'2px solid yellow',
    padding:'10px',
    backgroundColor:'crimson',
    marginBottom:'10px',
    margin:'10px 10px',
    width:'30%',
    float:'left'
  }

const {name,price} = props.singleitem;

  return (
    <div style={setStyle}>
      <h1>Name:{name} </h1>
      <h2> Price :{price}</h2>
    </div>
  )
}

export default App;
