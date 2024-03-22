import React,{useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';

function Home({arr}) {
 
    const [blogs,setBlogs]=useState([]);
    const [name,setName]=useState('');
    const [content,setContent]=useState('');

    useEffect(()=>{
        setBlogs(arr);
    },[])
    const handleDelete=(id)=>{
        
        setBlogs(blogs.filter((ele)=>ele.id!==id));
    }
    const handleAdd=()=>{
        // console.log(name);
        // console.log(content);
        setBlogs([...blogs,{id:uuidv4(),name:name,content:content}])
        setContent('');
        setName('');
    }
  return (
    <div>
        <div>
            <Link to='/'>Go To Dashboard</Link>
            <h1>Add New Blog! </h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id='name' />
                <br/>

                <label htmlFor="content">Content:</label>
                <input value={content} onChange={(e)=>setContent(e.target.value)} type="text" id='content' />
                <br/>

                <button onClick={handleAdd} type='sumbit'>Add+</button>

            </div>
        </div>
        <hr/>
        {blogs.map((ele)=>(
            <div key={ele.id}>
                <h1>{ele.name}</h1>
                <p>{ele.content}</p>
                <button onClick={()=>handleDelete(ele.id)}>Delete</button>
                <hr/>
            </div>
        ))}
    </div>
  )
}

export default Home