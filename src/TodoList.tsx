import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return ( 
        <ul className="task-list">
            {todos.length === 0 && "No Todos yet"}
            {todos.map(todo => {
                return (
                    <TodoItem 
                    id={todo.id} 
                    title={todo.title} 
                    completed={todo.completed}
                    key={todo.id} toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo}/>
                )
            })}
        </ul>
    )
}