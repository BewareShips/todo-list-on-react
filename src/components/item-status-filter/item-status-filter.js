import React,{Component} from 'react';

import './item-status-filter.css';


class ItemStatusFilter extends Component{

  render(){
    const buttonsData = [{name:'all',label:'All'},
                         {name:'active',label:'Active'},
                         {name:'done',label:'Done'},]
    const button = buttonsData.map(({name,label})=>{
      const isActive = name === this.props.filter
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return <button type="button"
                     className={`btn ${clazz}`}
                     key={name} onClick={() => this.props.onButtonChange(name)}
                     >{label}</button>

    })
    return (
      <div className="btn-group">
        {button}
      </div>
    );
  }
}


export default ItemStatusFilter;
