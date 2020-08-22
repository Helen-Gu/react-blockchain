import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import { getCryptos, setCryptoFilters } from '../actions';

class CryptoFilters extends Component {
	componentDidMount() {
		const { getCryptos } = this.props;
		getCryptos();
	}
	render() {
		const {
			selectedCryptos,
			selectCryptosOptions,
			setCryptoFilters,
		} = this.props;
		return (
			<div>
				<Select
					name="selectCryptosOptions"
					value={selectedCryptos}
					options={selectCryptosOptions}
					onChange={(newVal) => setCryptoFilters('selectedCryptos', newVal)}
					isMulti
					clearable="false"
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { selectedCryptos, selectCryptosOptions } = state.manageCryptoFilters;
	return {
		selectedCryptos,
		selectCryptosOptions,
	};
};

export default connect(mapStateToProps, { getCryptos, setCryptoFilters })(
	CryptoFilters
);
