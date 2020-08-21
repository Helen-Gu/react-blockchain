import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import * as actions from '../actions';

class ManageFiltters extends Component {
	render() {
		const { selectedCryptos, selectCryptosOptions, setManageCryptoFilters } = this.props;
		return (
			<div>
				<Select
					name="selectCryptosOptions"
					value={selectedCryptos}
					options={selectCryptosOptions}
					onChange={(newVal) =>
						setManageCryptoFilters('selectedCryptos', newVal)
					}
					multi
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { selectedCryptos, selectCryptosOptions } = state;
	return {
		selectedCryptos,
		selectCryptosOptions,
	};
};

export default connect(mapStateToProps, actions)(ManageFiltters);
