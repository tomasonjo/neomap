import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Layer from './layers/Layer';
import {connect} from 'react-redux';

class SideBar extends Component {

	renderNewLayer() {
		let uid = (new Date().getTime() + Math.random()).toString(36);
		return (
			<Layer key={uid} data-id="new-layer" ukey={uid} layer={undefined} sendData={this.sendData}
				   driver={this.props.driver}/>
		);
	};

	render() {
		return (
			<Accordion>
				{this.renderNewLayer()}
			</Accordion>
		);
	};
}


export default SideBar;
