import React from 'react';
import Todo from './../../Components/Todo/Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    return (
      <ul>
      {this.props.currentList.map(el =>
        <Todo currentItem={el} key={el.id}
        currentList={this.props.currentList}
        setCurrentList={this.props.setCurrentList}
        currentItem={el}/>
      )}
      </ul>
    )
  }
}
