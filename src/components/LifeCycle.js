import React, { Component } from "react";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "Allan",
    };
    this.changeName = this.changeName.bind(this);
  }
  componentDidMount() {
    document.title = this.state.date;
  }
  componentDidUpdate() {
   document.title = this.state.date
  }
  


  

  changeName(){
      this.setState({date:" Kenya"})
  }


  render() {
      console.log("updated")
    return (
      <div>
       
        <button onClick={this.changeName}>Click me</button>
      </div>
    );
  }
}

export default LifeCycle;
