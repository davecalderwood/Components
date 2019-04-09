import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';
 
/* if you using webpack, should not apply identity to this css */
import 'react-drawer/lib/react-drawer.css';
 
export default class Drawer extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      position: 'left', // Default position
      noOverlay: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
  }
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }
  setPosition(e) {
    this.setState({position: e.target.value});
  }
  setNoOverlay(e) {
    this.setState({noOverlay: e.target.checked});
  }

  render() {
    return (
      <div className="reactDrawer">
        <div style={{margin: 200}}>
          <div style={{margin: 20}}>
            <label>Position</label>
            <select value={this.state.position} onChange={this.setPosition}>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
          <div style={{margin: 20}}>
            <input type="checkbox"
              checked={this.state.noOverlay}
              onChange={this.setNoOverlay}
            />
            <label>No overlay</label>
            <small>(The overlay lets you close the drawer on click)</small>
          </div>
          <button
            style={{margin: 20}}
            onClick={this.toggleDrawer}
            disabled={this.state.open && !this.state.noOverlay}
            >
            {!this.state.open ? <span>Open Navigation</span>: <span>Close Navigation</span>}
          </button>
        </div>
        <ReactDrawer 
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
          noOverlay={this.state.noOverlay}>
          <i onClick={this.closeDrawer} className="drawer"></i>
          <h2>What a nice drawer !</h2>
          <ul id="menu">
            <a href="/"><li>Item 1</li></a>
            <a href="/item2"><li>Item 2</li></a>
            <a href="/item3"><li>Item 3</li></a>
            <a href="/item4"><li>Item 4</li></a>
            </ul>
        </ReactDrawer>
      </div>
    );
  }
}