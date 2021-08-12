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
    // console.log(completedList);
    this.props.setCurrentList(completedList);
  }

  render(){
    // console.log(this.props.currentItem)
    let done_class = this.props.currentItem.completed ? 'done_class' : '';
    return (
        <li key={this.props.currentItem.id} className={done_class}>
        <span >{this.props.index+1+'. '+this.props.currentItem.text}</span>
        <button onClick={this.deleteCurrentItem}><i className="fas fa-times"></i></button>
        <button onClick={this.handleCurrentList} className="completed_todo"><i className="fas fa-check"></i></button>
        </li>
    )
  }
}
