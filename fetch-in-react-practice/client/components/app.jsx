import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }))
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then(response => response.json())
      .then(data => this.setState(state => ({
        todos: this.state.todos.concat(data)
      })))
  }

  toggleCompleted(todoId) {
    let todoIndex = this.state.todos.findIndex(element => element.todoId === todoId)
    let completedValue = this.state.todos[todoIndex].isCompleted
    let newCompletedValue = !completedValue
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({isCompleted: newCompletedValue}),
    })
      .then(response => {
        response.json()
        let todoCopy = this.state.todos.slice()
        todoCopy[todoIndex].isCompleted = newCompletedValue
        this.setState({ todos: todoCopy })
      })


    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Then when you get the response, make a copy of the todos array
     * use the index from before to replace the todo with the todo returned
     * from the server then use the copied array to update state.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
