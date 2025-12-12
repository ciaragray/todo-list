import TodoListItem from TodoListItem.jsx; 

function TodoList({ todos }) {
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
