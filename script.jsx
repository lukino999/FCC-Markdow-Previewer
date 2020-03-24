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
		"```javascript", "var s = \"JavaScript syntax highlighting\";\nalert(s);" ,"```",
		"1. List item",
		"\n\n> Blockquotes are very handy in email to emulate reply text.",
		"\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")",
		"\nStrong emphasis, aka bold, with **asterisks** or __underscores__."]
		this.setState({
			input: fillWhenLoad.join("\n")
		});
	}


	///////////////////////
	render() {
		return (
			<div className="w-100 h-100">
				<Header />
				<nav className="navbar navbar-expand-lg navbar-light bg-primary">
					<div className="container">
						<h1>Markdown previewer</h1>
					</div>
				</nav>
				<div className="row w-100 h-75">
					<Editor handleChange={this.handleChange} input={this.state.input}/>
					<Preview input={this.state.input}/>
				</div>
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
			<nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
				<div className="container">
					<h1>Markdown previewer</h1>
				</div>
			</nav>
			);
	}
}











class Editor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<textarea className="col" id="editor" onChange={this.props.handleChange} value={this.props.input}/>
			);
	}
}



class Preview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// markdown options
		marked.setOptions({
			sanitise: true,
			gfm: true,
			bullshit: true,
			breaks: true,
			highlight: function(code, language) {
				// const hljs = require('highlight.js');
				const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
				return hljs.highlight(validLanguage, code).value;
			}
		});
		const rawMarkup = { __html:  marked(this.props.input)};

		// todo: fiddle with options and add syntax higlighting

		return (
			<div 
				className="col "
				id="preview"
				dangerouslySetInnerHTML={rawMarkup}
				/>
			);
	}
}


// render
ReactDOM.render(<App />,document.getElementById('root'));