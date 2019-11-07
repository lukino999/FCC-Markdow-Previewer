class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<Editor />
				<Preview />
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
				<h1> Test </h1>
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
			<textarea id="editor" />
			);
	}
}



class Preview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="preview"></div>
		);
	}
}



ReactDOM.render(<App />,document.getElementById('root'));