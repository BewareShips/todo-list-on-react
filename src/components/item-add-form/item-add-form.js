import React,{Component} from "react"
import './item-add-css.css'

class ItemAddForm extends Component{

  state = {
    label: ''
  }
onLabelChange =(e) =>{
  this.setState({
    label: e.target.value
  })
}

onSubmit = (e) =>{
    e.preventDefault();
  this.props.onItemAdded(this.state.label)
  this.setState({
    label:''
  })

}

  render(){
   const  {onItemAdded}=this.props
    return(
      <form className="item-add-form d-flex" onSubmit = {this.onSubmit}>
        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="What need to do?"
               value={this.state.label}
        />
        <button className="btn btn-outline-dark" >Add item</button>
      </form>
    )
  }
}
export default  ItemAddForm