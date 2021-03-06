import React from 'react';
import list from './TableData';
import './css-component/table.css';

const Person = ({ name, gender, company }) => (
	<tr>
		<td>{name}</td>
		<td>{gender}</td>
		<td>{company}</td>
	</tr>
);

class SearchData extends React.Component {
	constructor() {
		super();
		this.state = {
			val: '',
			page: list.length,
			pageSize: 5,
			currentPage: 1,
			pageNumbers: []
		};
		// this.handleEvent = this.handleEvent.bind(this);
		// this.renderPageNumber = this.renderPageNumber(this);
		// this.pushInPageArray = this.pushInPageArray(this);
	}

	// handleEvent(e,type){
	//     const value =  e.target.value;
	//     if(type === 'search'){
	//         this.setState({
	//             val : value
	//         });
	//     }else if (type === 'page'){
	//         this.setState({
	//             page
	//         });
	//     }
	// }

	// renderPageNumber = (num) => (
	// 	<li key={num} id={num} onClick={(e) => this.setState({ currentPage: e.target.val })}>
	// 		{num}
	// 	</li>
	// );

	pushInPageArray = ({ i }) => {
		// this.setState({
		//     pageNumbers : [...this.state.pageNumbers,i]
		// });
	};

	render() {
		const { pageSize, currentPage } = this.state;

		const indexOfLastData = currentPage * pageSize;
		const indexOfFirstData = indexOfLastData - pageSize;

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(list.length / pageSize); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumber = pageNumbers.map((num) => {
			return (
				<li key={num} id={num} onClick={(e) => this.setState({ currentPage: Number(e.target.id) })}>
					{num}
				</li>
			);
		});

		return (
			<div>
				<div className="searchDiv">
					<span>Search :</span> <input type="text" onChange={(e) => this.setState({ val: e.target.value })} />
					<span>Page Size :</span>
					<input
						type="text"
						onBlur={(e) =>
							( e.target.value !== '' || e.target.value <= 0 )
								? this.setState({ pageSize: e.target.value })
								: this.setState({ pageSize: list.length })}
					/>
				</div>

				<div className="tabularData">
					<table className="dataTable">
						<thead>
							<tr>
								<th>Name</th>
								<th>Gender</th>
								<th>Company</th>
							</tr>
						</thead>
						<tbody>
							{list
								.filter(
									(data) =>
										data.name.toLowerCase().includes(this.state.val.toLowerCase()) ||
										data.gender.toLowerCase().includes(this.state.val.toLowerCase()) ||
										data.company.toLowerCase().includes(this.state.val.toLowerCase())
								)
								.slice(indexOfFirstData, indexOfLastData)
								.map((person, index) => <Person key={index} {...person} />)}
						</tbody>
					</table>
					<button className="pagination">{renderPageNumber}</button>
				</div>
			</div>
		);
	}
}
export default SearchData;
