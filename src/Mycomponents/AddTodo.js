import React, { useState } from 'react';


export default function AddTodo(props) {
    const submit = (e) => {
        e.preventDefault();
        if(!title && ! desc)
        {
            alert("Description and title cant be blank!");
        }
        else if(!title)
        {
            alert("Title cant be blank!");
        }
        else if(!desc)
        {
            alert("Description cant be blank!");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return (
        <form className='container my-5' onSubmit={submit}>
            <h3 className='my-5'>Add a Todo</h3>
            <div className="mb-3">
                <label htmlFor="title"className="form-label"><em><big>Todo Title :</big></em></label>
                <input type="text" className="form-control" style={props.mode==='dark'?{backgroundColor:'black',color:'white'}:{backgroundColor:'#fcfafa',color:'black'}} value={title} onChange={(e) => setTitle(e.target.value)}  id="title" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="descr" className="form-label"><em><big>Todo Description :</big></em></label>
                <textarea rows="5" style={props.mode==='dark'?{backgroundColor:'black',color:'white'}:{backgroundColor:'#fcfafa',color:'black'}}className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="descr"></textarea>
            </div>
            <button type="submit" className="btn btn-success my-3">Add Todo</button>
        </form>
    )
}
