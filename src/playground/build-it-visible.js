class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide Details" : "Show Details"}
        </button>
        {this.state.isVisible ? <p>Show me the details</p> : null}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
