class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem("count");
      const count = parseInt(stringCount, 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  increment() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  decrement() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }

  reset() {
    this.setState(prevState => {
      return { count: 0 };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
