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

	render() {
		return (
			<div>
				<Header />
				<Editor handleChange={this.handleChange}/>
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
			<textarea id="editor" onChange={this.props.handleChange} />
			);
	}
}



class Preview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rawMarkup = { __html:  marked(this.props.input, {sanitize: true})};

		return (
			<div id="preview" dangerouslySetInnerHTML={rawMarkup}/>
		);
	}
}


// render
ReactDOM.render(<App />,document.getElementById('root'));