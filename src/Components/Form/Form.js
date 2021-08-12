import React from 'react';
import PropTypes from 'prop-types';

// export default class Form extends React.component {

export default class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      currentList: []
    }
    // this.setInputText = this.setInputText.bind (this);
  }
  /*setInputText(e){
    this.setState ({currentInput: e.target.value});
      console.log(this.state.currentInput)
  }*/
  setInputText = (e) => {
    this.setState ({currentInput: e.target.value});
    this.props.setCurrentInput(this.state.currentInput)
  }

  submitCurrentInput = (e) => {
    // console.log(this.state.currentList)
    let newList = [...this.props.currentList, {text:this.state.currentInput, id:Date. now(), completed:false}]
    this.props.setCurrentList(newList);
    this.props.setCurrentInput('')
    this.setState ({currentInput: ''});
  }

  filterList = (e) => {

    this.props.setStatus(e.target.value)

  }

  render() {
    return (
      <div className="d-flex">
        <input
        type="text"
        autoComplete="off"
        name="to_do_name"
        onChange={this.setInputText}
        value={this.state.currentInput}
        className="todo_input"
        />
        {/*<input type="submit" value="add"/>*/}
        <button type="submit"  onClick={this.submitCurrentInput} className="addButton"><i className="fas fa-plus"></i></button>
        <select name="current_status" onChange={this.filterList} className="currentStatus_selector">
          <option>All</option>
          <option>Completed</option>
          <option>Not Completed</option>
        </select>
      </div>
    );
  }
}
