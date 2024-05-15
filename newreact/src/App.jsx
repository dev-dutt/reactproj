import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let useinfo = {
    name:"Rohit",
    age:22
  }

  let users = [
    { name: 'Rohit', age: 21 ,text:'hello'},
    { name: 'Anjali', age: 22 ,text:'click'},
    { name: 'Suresh', age: 20 ,text:'hello'}
  ];

  

  return (
    <>
      <h1 className="text-black bg-green-400 p-4 rounded-xl mb-4">Dev Test CSS</h1>
      {users.map((user) => (
        <Card key={user.age} userinfo={user}/>
      ))}

    </>
  )
}

export default App
