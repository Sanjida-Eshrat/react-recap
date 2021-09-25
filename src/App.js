import logo from './logo.svg';
import './App.css';
import { getSuggestedQuery } from '@testing-library/dom';
import { useEffect, useState } from 'react';

function App() {
  const blogs =[
    {heading: 'celebration of 16 december' , author: 'sanjida'},
    {heading: 'celebration of 16 december' , author: 'sanjida'},
    {heading: 'celebration of 16 december' , author: 'sanjida'},
  ]
  return (
    <div className="App">
      <Mobile></Mobile>
      <Article></Article>
      {
        blogs.map( blog=>  <Blog heading={blog.heading} author={blog.author}></Blog>)
      }
      <LoadToDo></LoadToDo>

      {/* <Blog heading="Celebrating Pohela boishakh" author="Sanjida"></Blog>
      <Blog heading="Celebrating Pohela boishakh" author="Sanjida"></Blog>
      <Blog heading="Celebrating Pohela boishakh" author="Sanjida"></Blog> */}
    </div>
  );
}

function Article(){
  const newStyle = {
    border: '1px solid blue',
    display: 'inline-block',
    borderRadius: '5px',
    color: 'white'
  }
  return(
    <div>
      <article className="blog">
        <h1>My Article</h1>
        <h2 style ={newStyle}>By Sanjida</h2>
        <p style={{border: '1px solid blue',borderRadius: '5px', backgroundColor:'wheat',padding:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ex quia in incidunt. Blanditiis beatae repudiandae nihil ducimus magni sequi impedit fugit asperiores laudantium, veniam sint explicabo iure maxime! Reiciendis autem numquam voluptas quia soluta tempore, aliquam corrupti placeat, voluptate alias, quis nobis! Repudiandae iusto pariatur quam neque cumque hic.</p>
      </article>
    </div>
  )
}

function Blog(props){
  const blogStyle={
    display: 'grid',
    gridTemplateColumns: '(3, 1fr)',
    //gridTemplateRows: '1fr 3fr',
  }
  return(
    <div style={blogStyle}>
      <div className ="blog">
        <h2>Name: {props.heading} </h2>
        <h4>Name: {props.author} </h4>
      </div>
    </div>
  )
}

function Mobile(){
  const [charge, setCharge] = useState(100);
  const batteryDown = () => {
    if(charge >=10){
      setCharge(charge - 10)
    }  
  };

  return(
    <div>
      <h3>Battery Percentage:{charge} </h3>
      <button onClick={batteryDown}>Battery Down</button>
    </div>
  )
}

function LoadToDo(){
  const [toDos,setToDo] = useState([]);
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>setToDo(data))
  },[])
  return(
    toDos.map(toDo=> <ToDo title={toDo.title} completed={toDo.completed}></ToDo> )
  )
}

function ToDo(props){
  return(
    <div className='blog'>
      <h3>Task: {props.title}</h3>
      <h5>Completed: {props.completed}</h5>
    </div>
  )
}

export default App;
