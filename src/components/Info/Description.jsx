import { ArrowDown, ArrowUp } from '@rsuite/icons';
import React from 'react'
import { Panel } from 'rsuite';
import '../Info/Info.css'

class Description extends React.Component {
    constructor(props) {
      super(props);
      this.item_list = props.item_list;
      this.state = { opened: true }
      this.displayItems = this.displayItems.bind(this);
      this.title = props.title;
    }

    displayItems() {
      var panel = document.getElementById(this.title + '-panel');
      this.setState((prevState) => ({
        opened: !prevState.opened
      }))
      if(panel.style.display === 'none') {
        panel.style.display = 'block';
      }
      else {
        panel.style.display = 'none';
      };
    }

  render () {
    const items  = Array.from(
      {length: this.item_list.length},
      (_, i) => (
        <li key={i}> {this.item_list[i]} </li>
      )
    )

    return (
    <div>
      <button className="header" onClick={this.displayItems}>
        <span> 
          {this.state.opened ? <ArrowUp/> : <ArrowDown/>} 
          {this.title}</span>
      </button>

      <Panel id={this.title + '-panel'} className=" description" bordered>
        <ul> {items} </ul>
      </Panel>
      
    </div>)
  };
}

export default Description;