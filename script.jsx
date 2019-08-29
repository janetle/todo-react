
class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : [],
      warning: "normal"
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(){

    var todo = this.state.word
    if(todo.length > 1 & todo.length < 200){
      this.state.list.push(todo)
      this.setState({word: "", list: this.state.list, warning: "normal"})

    } else {
      this.setState({word: "", list: this.state.list, warning: "wrong"})
    }
  }

  changeHandler(){

      this.setState({word: event.target.value})
  }

  deleteItem(event) {
    let index = event.target.dataset.index;
    this.state.list.splice(index,1)
    this.setState({list: this.state.list})
  
  }

  render() {
    
      const listItem = this.state.list.map((item,index)=> {
        
      return (
        <li  key = {index} >
          
          <button data-index= {index} onClick = {this.deleteItem} >[X]</button>

          {item} <span>   </span>{moment().format('YYYY MM DD')}
        </li>)
      
    })

      console.log("rendering");
      return (
        <div className="list">
          <h3>Todo List</h3>
          <div className = {this.state.warning}> Input must be longer than 1 character and less than 200 characters</div>
          <input autoComplete ="off" onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.addItem}>add item</button>
          <ul> {listItem}</ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

