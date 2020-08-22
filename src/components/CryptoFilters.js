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
					styles={selectedCryptos.length === 1 ? customStyles : ''} // hide delete button when only 1 is selected
					name="selectCryptosOptions"
					value={selectedCryptos}
					options={selectCryptosOptions}
					onChange={(newVal) => setCryptoFilters('selectedCryptos', newVal)}
					isMulti
					isClearable={false}
					closeMenuOnSelect={false}
				/>
			</div>
		);
	}
}

const customStyles = {
	multiValueRemove: (base) => ({ ...base, display: 'none' }),
};

const mapStateToProps = (state) => {
	const { selectedCryptos, selectCryptosOptions } = state.cryptoFilters;
	return {
		selectedCryptos,
		selectCryptosOptions,
	};
};

export default connect(mapStateToProps, { getCryptos, setCryptoFilters })(
	CryptoFilters
);
