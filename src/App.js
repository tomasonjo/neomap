import React, {Component} from "react";
import "./App.css";
import Map from "./components/Map";
import SideBar from "./components/SideBar";
import neo4jService from './services/neo4jService'
import {connect} from "react-redux";
import {setLayers} from "./actions";


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			ready: false
		};

	};

	getDriver() {
		return neo4jService.getNeo4jDriver();
	}

	componentDidMount() {
		this.getDriver().then( result => {
			this.driver = result;
		}).then( () => {
			console.log(this.driver)
			this.setState({
				ready: true,
			});
		});
	};

	renderUI() {
		return (
			<div id="wrapper" className="row">
				<div id="sidebar" className="col-md-4">
					<SideBar
						key="sidebar"
						ref="sidebar"
						driver = {this.driver}
					/>
				</div>
				<div id="app-maparea" className="col-md-8">
					<Map
						key="map"
						driver = {this.driver}
					/>
				</div>
			</div>
		);
	};


	render() {
		// wait until driver is ready...
		return this.state.ready ? this.renderUI() : (
			<span>Loading...</span>
		)
	};
}


const mapStateToProps = (state, ownProps) => {
	return {
		layers: state.layers,
		...ownProps
	}
};

export default connect(mapStateToProps)(App);
