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

class SearchTabularData extends React.Component {
	constructor() {
		super();
		this.state = {
			searchQuery: '',
			pageSize: 10,
            currentPage: 1,
            pages : Array.from(new Array(Math.ceil(list.length / 10)), (val,index) => index +1 ),
            currentList : list.splice(0,10)
		};
		// this.handleEvent = this.handleEvent.bind(this);
		// this.renderPageNumber = this.renderPageNumber(this);
		// this.pushInPageArray = this.pushInPageArray(this);
    }

    dataWithCount = (count) => {
        let indexOfFirstData = 0,
            indexOfLastData  = 0,
            currentList = [],
            currentPage = this.state.currentPage,
            inputCount = (count) ? parseInt( count.target.value ) : this.state.pageSize,

            pages = Array.from(new Array(Math.ceil(list.length / inputCount)),(val,index) => index + 1);

        
            indexOfFirstData =  (currentPage -1 )* inputCount;
            indexOfLastData = indexOfFirstData + inputCount ;

            currentList =  list.slice( indexOfFirstData , indexOfLastData );

            this.setState({
                pages,
                currentList,
                pageSize : inputCount
            });


    }
    
    setSearchQuery = (q) => {
        this.setState({
            searchQuery : q.target.value
        })
    }


     updatePage = async(page) => {

        let $elem =  document.getElementById(this.state.currentPage);
            if($elem) $elem.classList.remove("active");

        await this.setState({
            currentPage : page
        })

        $elem =  document.getElementById(page);
        $elem.classList.add("active");
    }
    
    filterData = (list) =>{
        //need to complete this for filtering
        let _list =  Object.assign({},list)
    }



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
						onChange={(e) =>
							e.target.value !== ''
								? this.setState({ page: e.target.value })
								: this.setState({ page: list.length })}
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
								.splice(indexOfFirstData, indexOfLastData)
								.map((person, index) => <Person key={index} {...person} />)}
						</tbody>
					</table>
					<button className="pagination">{renderPageNumber}</button>
				</div>
			</div>
		);
	}
}
export default SearchTabularData;
