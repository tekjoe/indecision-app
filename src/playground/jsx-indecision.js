console.log("App.js is running!");

// const app = {
//   title: "Indecision App",
//   subtitle: "Put your life in the hands of a computer",
//   options: []
// };

// const onFormSubmit = e => {
//   e.preventDefault();
//   const option = e.target.elements.option.value;
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = "";
//     renderTemplate();
//   }
// };

// const removeOptions = () => {
//   app.options = [];
//   renderTemplate();
// };

// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// };

// // JSX - JavaScript XML

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>{app.options.length ? "Here are your options" : "No options"}</p>
//       <button disabled={app.options.length === 0} onClick={onMakeDecision}>
//         What should I do?
//       </button>
//       <button onClick={removeOptions}>Remove all</button>
//       <ol>
//         {app.options.map(option => (
//           <li key={option}>{option}</li>
//         ))}
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" placeholder="Option..." name="option" />
//         <button>Add Option</button>
//       </form>
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("app"));
// };

// renderTemplate();

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of a computer",
      options: []
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
      this.state.options.push(option);
      e.target.elements.option.value = "";
    }
  }

  removeOptions() {
    this.setState({ options: [] });
    // this.state.options = [];
  }

  onMakeDecision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {this.state.subtitle && <p>{this.state.subtitle}</p>}
        <p>
          {this.state.options.length ? "Here are your options" : "No options"}
        </p>
        <button
          disabled={this.state.options.length === 0}
          onClick={this.onMakeDecision}
        >
          What should I do?
        </button>
        <button onClick={this.removeOptions}>Remove all</button>
        <ol>
          {this.state.options.map(option => (
            <li key={option}>{option}</li>
          ))}
        </ol>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Option..." name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
