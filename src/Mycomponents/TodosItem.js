import React from 'react'

export default function TodosItem({element,onDelete}) {
  return (
    <div className='my-4'>
        <h4>{element.title}</h4>
        <h5>{element.description}</h5>
        <button className='btn btn-danger my-3 btn-sm' onClick={()=>onDelete(element)}>Delete task</button><hr/>
    </div>
  )
}
