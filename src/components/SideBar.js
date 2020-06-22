import React, {Component} from 'react';
import {connect} from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Layer from './layers/Layer';

class SideBar extends Component {

	renderNewLayer() {
		let uid = (new Date().getTime() + Math.random()).toString(36);
		return (
			<Layer key={uid} data-id="new-layer" ukey={uid} layer={undefined} sendData={this.sendData}
				   driver={this.props.driver}/>
		);
	};



	render() {
		console.log(this.props)
		return (
			<Accordion>
				<button onClick={() => console.table(this.props)} />
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
