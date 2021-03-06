import React, { Component } from "react";

import "./App.css";
import ToDoList from "./Components/ToDoList";
import ToDoInput from "./Components/ToDoInput";



class App extends Component {
  state = {
    list: [],
    item: ""
  }


AddItem = (e) => {
  e.preventDefault();


  this.setState(({ list, item }) => ({
    list: [...list, { item }],
    item: ""
  }));
};

handleChange = e => {
  this.setState(
    { item: e.target.value }
    )
}

DeleteItem = deletetask =>{
  
  const listitem = this.state.list.filter(e=>{
  return e.item !== deletetask
  })
  this.setState({list:listitem})
}

 

  render()
   {
    return (
      <div>
       
        <ToDoInput
          item={this.state.item}
          AddItem={this.AddItem}
          handleChange={this.handleChange}
        />

        {this.state.list.map((task , key) => (
          <ToDoList
            
            task={task.item}
            id ={key}
            deletetask ={this.DeleteItem}
          />
        ))}
      </div>
    )
  
}
}

export default App;
