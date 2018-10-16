import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    
     this.state = {
      timesClicked: 0,
    };
  }
  
   handleClick = () => {
    this.setState({
      timesClicked: this.props.timesClicked + 1
    }, () => console.log(this.state.timesClicked))
  }
  
   render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click here to increase the number of times clicked from ${this.props.timeClicked}.</button>
      </div>
    );
  }
}

 export default DigitalClicker;