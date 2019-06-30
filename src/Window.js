import React from 'react';
import './Window.css';

class Window extends React.Component {

  componentWillMount() {
    this.windowProperties = {
      "title": this.props.title || "Unnamed Window",
      "id": this.props.winId,
      "h": this.props.h || 300,
      "w": this.props.w || 400,
      "x": this.props.x || 200,
      "y": this.props.y || 200,
      "z": this.props.z || 0,
      "dragging": false,
      "shaded": false,
      "opacity": 255
    };
    this.winId = this.props.winId;
    this.tbId = this.winId+"-tb";
    this.tbSh = this.winId+"-sh";
    this.tbCl = this.winId+"-cl";
    console.log("Window "+this.winId+" created");
  }

  shadeWindow = (e) => {
    if(this.windowProperties.shaded == false) {
      this.preShadeHeight = this.windowProperties.h;
      this.windowProperties.h = 24;
      this.windowProperties.shaded = true;
    } else {
      this.windowProperties.h = this.preShadeHeight;
      this.windowProperties.shaded = false;
    }
    console.log(this.windowProperties);
    this.setState({state: this.state});
  }

  toggleDrag = (e) => {
    this.windowProperties.dragging = !this.windowProperties.dragging;
  }

  moveWindow = (e) => {
    if(this.windowProperties.dragging == true) {
      this.windowProperties.x = e.clientX - 100;
      this.windowProperties.y = e.clientY - 15;
      this.setState({state: this.state});
    }
  }

  render() {
    return (
      <div className="win-ctr" id={this.winId} 
        onMouseMove={this.moveWindow}
        style={{
          top: this.windowProperties.y, 
          left: this.windowProperties.x,
          maxHeight: this.windowProperties.h,
          minHeight: this.windowProperties.h,
          minWidth: this.windowProperties.w,
          maxWidth: this.windowProperties.w 
          }}>
        <div className="win-tb">
          <span className="btn-shade" onClick={this.shadeWindow}>&#9712;</span>
          <span className="win-tb-title" onClick={this.toggleDrag}>{this.windowProperties.title}</span>
          <span className="btn-close">&#9746;</span>
        </div>
      </div>
    );
  }
}

export default Window;