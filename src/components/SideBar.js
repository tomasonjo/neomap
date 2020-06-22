import React, {Component} from 'react';
import {connect} from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Layer from './layers/Layer';

class SideBar extends Component {

	constructor(props) {
		super(props);
		this.props.ui.selectedItem = [];

	}

	renderNewLayer() {
		let uid = "polyline-layer";
		return (
			<Layer key={uid} data-id="new-layer" ukey={uid} layer={undefined} sendData={this.sendData}
				   driver={this.props.driver} selectedItem={this.props.ui.selectedItem}/>
		);
	};



	render() {
		return (
			<Accordion>
				<h2>Menu</h2>
				<h4>Selected monuments</h4>
				{!this.props.ui.selectedItem.length ? <div>Nothing has been selected </div> : 
				                              <div>{this.props.ui.selectedItem.map((item) => <p>{item}</p>)}</div>}
				{this.renderNewLayer()}
			</Accordion>
		);
	};
}


const mapStateToProps = (state, ownProps) => {
	return {
		ui: state.ui,
		...ownProps
	}
};


export default connect(mapStateToProps)(SideBar);
