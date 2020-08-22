import { orderBy } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCryptoQuote, setCryptoFilters } from '../actions';

class CryptoDataTable extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			sortParams: {
				column: '',
				direction: undefined,
			},
		};
	}
	componentDidUpdate(prevProps) {
		if (this.props.selectedCryptos !== prevProps.selectedCryptos) {
			this.props.getCryptoQuote(this.props.selectedCryptos.map((x) => x.id));
		}
		if (this.props.cryptoQuotes !== prevProps.cryptoQuotes) {
			this.setState({
				data: this.props.cryptoQuotes,
				sortParams: { column: '', direction: undefined },
			});
		}
	}
	removeData = (id) => (e) => {
		this.props.setCryptoFilters(
			'selectedCryptos',
			this.props.selectedCryptos.filter((x) => x.id !== id)
		);
	};
	sortByColumn = (column) => (e) => {
		const {
			data,
			sortParams: { direction },
		} = this.state;
		const sortDirection = direction === 'desc' ? 'asc' : 'desc';
		const sortedCollection = orderBy(data, [column], [sortDirection]);
		this.setState({
			data: sortedCollection,
			sortParams: {
				column,
				direction: sortDirection,
			},
		});
	};
	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Symbol</th>
							<th>Name</th>
							<th className="sortable" onClick={this.sortByColumn('cmc_rank')}>
								CMC Rank
								{this.state.sortParams.column === 'cmc_rank'
									? this.state.sortParams.direction === 'desc'
										? ' ↓'
										: ' ↑'
									: ''}
							</th>
							<th className="sortable" onClick={this.sortByColumn('price')}>
								Price (USD)
								{this.state.sortParams.column === 'price'
									? this.state.sortParams.direction === 'desc'
										? ' ↓'
										: ' ↑'
									: ''}
							</th>
							<th>Operation</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((x) => {
							const { id, symbol, name, cmc_rank, price } = x;
							return (
								<tr key={id}>
									<td>{id}</td>
									<td>{symbol}</td>
									<td>{name}</td>
									<td>{cmc_rank}</td>
									<td>
										{parseFloat(price).toLocaleString('en-US', {
											style: 'currency',
											currency: 'USD',
										})}
									</td>
									<td className="opration">
										<button
											className="button"
											onClick={this.removeData(id)}
											disabled={this.props.selectedCryptos.length === 1}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				{this.props.error && <div className="error">{this.props.error}</div>}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { selectedCryptos } = state.cryptoFilters;
	const { cryptoQuotes } = state.cryptoQuote;
	const { error } = state.handleError;
	return {
		selectedCryptos,
		cryptoQuotes,
		error,
	};
};

export default connect(mapStateToProps, { getCryptoQuote, setCryptoFilters })(
	CryptoDataTable
);
