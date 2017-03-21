import TodoItem from './TodoItem'
import React from 'react'

export default ({ items, onItemDone }) => (
    <ul>
        { items.map((item, index) =>
            <TodoItem key={index} item={item} onDone={onItemDone.bind(null, index)} />)
        }
    </ul>
)
