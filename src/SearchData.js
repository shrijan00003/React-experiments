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
            currentPage : 1
		};
		// this.handleEvent = this.handleEvent.bind(this);
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

	render() {
        const { page, currentPage } =   this.state;
        
		return (
            <div>
				<div className="searchDiv">
					<span>Search :</span> <input type="text" onChange={(e) => this.setState({ val: e.target.value })} />
					<span>Page Size :</span>
					<input
						type="text"
						onChange={(e) =>
							e.target.value !== ''
								? this.setState({ page: e.target.value })
								: this.setState({ page: list.length })}
					/>
				</div>

				<div className="tabluarData">
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
								.splice(0, this.state.page)
								.map((person, index) => <Person key={index} {...person} />)}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default SearchData;
