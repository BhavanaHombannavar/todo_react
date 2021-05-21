import React from 'react';
import Todo from './../../Components/Todo/Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    // {this.props.currentList.map(el =>

    return (
      <ul>
      {this.props.filteredList.map(el =>
        <Todo currentItem={el} key={el.id}
        currentList={this.props.currentList}
        setCurrentList={this.props.setCurrentList}
        currentItem={el}/>
      )}
      </ul>
    )
  }
}
