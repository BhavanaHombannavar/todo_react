import React from 'react';
import Todo from './../../Components/Todo/Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    // {this.props.currentList.map(el =>

    return (
      <>
      <h3>To Do List</h3>
      <ul className="list_style">
      {this.props.filteredList.map((el, index) =>
        <Todo currentItem={el} key={el.id}
        currentList={this.props.currentList}
        setCurrentList={this.props.setCurrentList}
        currentItem={el}
        index={index}/>
      )}
      </ul>
      </>
    )
  }
}
