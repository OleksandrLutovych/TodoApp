import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../Store/slice";

interface MyComponentProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export class CounterByClass extends React.Component<MyComponentProps> {    
  render(): React.ReactNode {
    return (
      <div className="counter-box">
        <p>Number: {this.props.count}</p>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Reduce</button>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  count: state.counter.value,
});

export default connect(mapStateToProps, {increment, decrement})(CounterByClass);
