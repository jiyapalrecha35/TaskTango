import React from 'react'
import TodosItem from './TodosItem'

export default function Todos(props) {
  return (
    <div className='container my-4' style={{minHeight:"100vh"}}>
        <h3 className='my-5'>Effortless To-Dos with TaskTango</h3>
       {props.todo.length===0?<h5>Nothing to display in Todos List</h5>:
       props.todo.map((Todo)=>{
           return <TodosItem element={Todo} key={Todo.sno} onDelete={props.onDelete}/>
       })
       }

        

    </div>
  )
}

