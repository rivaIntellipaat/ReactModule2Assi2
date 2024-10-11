import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Lifecycle method
  componentDidMount() {
    console.log('Counter component has mounted');
  }

  // Method to increment the counter
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrement the counter
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

 
  render() {
    return (
      <div className="">
              <div className='text-center text-[64px] font-bold mb-9' >Counter App</div>

        <div className='  text-center text-[64px] font-bold mb-5'> {this.state.count}</div>
        <button  className='w-[188px] h-[56px] bg-[#DB4444] font-semibold text-white m-4 ' onClick={this.decrement}>Decrement</button>
        <button className='w-[188px] h-[56px] bg-[#59DB44] font-semibold text-white m-4' onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;