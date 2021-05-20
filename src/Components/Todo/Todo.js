import React from 'react';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteCurrentItem = (e) => {
    let elementRemovedList = this.props.currentList.filter ( (el) => el.id !== this.props.currentItem.id );
    this.props.setCurrentList(elementRemovedList);
  }

  handleCurrentList = (e) => {
    let completedList = this.props.currentList.map( item => {
      if(item.id === this.props.currentItem.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    })
    console.log(completedList);
    this.props.setCurrentList(completedList);
  }

  render(){
    console.log(this.props.currentItem)
    return (
        <li key={this.props.currentItem.id}>
        {this.props.currentItem.text}
        {this.props.currentItem.completed ? 'done' : ''}
        <button onClick={this.handleCurrentList}>complete</button>
        <button onClick={this.deleteCurrentItem}>delete</button>
        </li>
    )
  }
}
