import React, { Component } from 'react';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => this.setState({ users: json }))
    .catch(error => console.log(error))
  }

  render(){
    console.log(this.state.users)
    return(
      <div>
        <div>
          { this.state.users.map (user => {
            return(
              <div>
              <h1>{user.name}</h1>
              { user.todos.map ( todo =>{
                return(
                  <li>{todo.item}</li>
                )
              })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default App;
