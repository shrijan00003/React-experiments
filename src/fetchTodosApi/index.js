import React from 'react';
import withFetchingData from './withFetchingData';
import withLoader from './withLoader';
import Todo from './Todo';
import '../css-component/table.css';
import SelectBox from './components/SelectBox';
import withFetchingCategories from './withFetchingCategories';
import Select from './components/Select';


const TodoWithFechingData = withFetchingData(withLoader(Todo));
const TodoWithCategories = withFetchingCategories(withLoader(Select));

class Index extends React.Component {
    constructor() {

        super();
        this.state = {
            url :'http://127.0.0.1:8848/api/',
            query: '',
            category: '',
            pageSize: '',

            //this is for select box only
            select: {
                selectClass: 'pageSizeSelectBox',
                values: [10, 20, 30, 40, 50]
            }
        }
    }

    componentDidMount() {
        //this will render once the componet is rendered
    }

    render() {
        return (
            <div className="api-data-container">
                <div className="data-wrapper">

                    <div className="search-box-wrapper">

                        <select className="pageSizeSelectBox" name="category" onChange={(e) => this.setState({ category: e.target.value })}>
                            <option value = ''>All</option>
                            <TodoWithCategories url = {`${this.state.url}categories`} />
                        </select>

                        {/* <SelectBox selectClass={this.state.select.selectClass} values={this.state.select.values} onChange={(e) => this.setState({ pageSize: e.target.value })} /> */}

                        <select className = "pageSizeSelectBox" onChange={(e) => this.setState({ pageSize: e.target.value })} >
                            <option value = ''>Page Size</option>
                            <option value = '2'>2</option>
                            <option value = '4'>4</option>
                            <option value = '7'>7</option>
                        </select>

                        <input type="text" onChange = {(e) => this.setState({ query : e.target.value })}/>

                        <button style ={{ padding: "10px", backgroundColor: "lightblue", marginLeft : "5px" }} onClick ={(e) => this.setState({
                            query : '',
                            category : '',
                            pageSize : ''
                        }) }> Reset Search </button>

                    </div>

                    <table className="dataTable">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TodoWithFechingData url= { `${this.state.url}todos` } query ={this.state.query} category = { this.state.category } pageSize = {this.state.pageSize}/>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Index