import React, { Component } from 'react';
import CryptoFilters from './CryptoFilters';
import CryptoDataTable from './CryptoDataTable';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>StackAdapt Cryptos</h1>
				<CryptoFilters />
				<CryptoDataTable />
			</div>
		);
	}
}
