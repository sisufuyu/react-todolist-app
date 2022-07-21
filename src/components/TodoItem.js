import React from 'react'
import { itemClass } from '../util'
import './TodoItem.css'

const TodoItem = ({ item, hanldeClickItem }) => {
  return (
    <div className={`todo-item ${itemClass(item.status)}`} onClick={hanldeClickItem}>
      <p className="item-title">{item.title}</p>
      <p className="item-deadline">Deadline: {item.deadline}</p>
    </div>
  )
}

export default TodoItem