class App extends React.Component {
	constructor(props) {
		super(props);
		// define state
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		console.log(event.target.value);
		this.setState({
			input: event.target.value
		});
	}

	componentDidMount() {
		console.log("componentDidMount");

		const fillWhenLoad = ["# Header",
		"## SubHeader",
		"[Google](https://www.google.com)\n",
		"Inline `code`",
		"```", "var s = \"JavaScript syntax highlighting\";\n\nalert(s);" ,"```",
		"1. List item",
		"> Blockquotes are very handy in email to emulate reply text.",
		"\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")",
		"\nStrong emphasis, aka bold, with **asterisks** or __underscores__."]
		this.setState({
			input: fillWhenLoad.join("\n")
		});
	}

	render() {
		return (
			<div>
				<Header />
				<Editor handleChange={this.handleChange} input={this.state.input} />
				<Preview input={this.state.input}/>
			</div>
			);
	}
}



class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Markdown Previewer</h1>
			</div>
		);
	}
}



class Editor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<textarea id="editor" onChange={this.props.handleChange} value={this.props.input}/>
			);
	}
}



class Preview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rawMarkup = { __html:  marked(this.props.input, {sanitize: true})};
		// todo: fiddle with options and add syntax higlighting

		return (
			<div id="preview" dangerouslySetInnerHTML={rawMarkup}/>
		);
	}
}


// render
ReactDOM.render(<App />,document.getElementById('root'));