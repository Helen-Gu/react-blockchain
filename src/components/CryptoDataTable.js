import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCryptoQuote, setCryptoFilters } from '../actions';

class CryptoDataTable extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.selectedCryptos !== prevProps.selectedCryptos) {
			this.props.getCryptoQuote(this.props.selectedCryptos.map((x) => x.id));
		}
	}
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Symbol</th>
						<th>Name</th>
						<th>CMC rank</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{this.props.cryptoQuotes.map((x) => {
						const { id, symbol, name, cmc_rank, quote } = x;
						return (
							<tr key={id}>
								<td>{symbol}</td>
								<td>{name}</td>
								<td>{cmc_rank}</td>
								<td>
									{parseFloat(quote.USD.price).toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = (state) => {
	const { selectedCryptos } = state.manageCryptoFilters;
	const { cryptoQuotes } = state.cryptoQuote;
	return {
		selectedCryptos,
		cryptoQuotes,
	};
};

export default connect(mapStateToProps, { getCryptoQuote, setCryptoFilters })(
	CryptoDataTable
);
