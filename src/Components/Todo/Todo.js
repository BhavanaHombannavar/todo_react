import React from 'react';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  handleCurrentList = (e) => {
    alert(e);
  }
  render(){
    console.log(this.props.currentItem)
    return (
        <li key={this.props.currentItem.id}>
        {this.props.currentItem.text}
        {this.props.currentItem.completed ? 'done' : ''}
        <button onClick={this.handleCurrentList}>complete</button>
        <button>delete</button>
        </li>
    )
  }
}
