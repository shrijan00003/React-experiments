import React from 'react';
import withFetchingData from './withFetchingData';
import withLoader from './withLoader';
import Todo from './Todo';
import '../css-component/table.css';

const TodoWithFechingData = withFetchingData(withLoader(Todo));

class Index extends React.Component {
    render() {
        return (
            <div className="api-data-container">
                <div className="data-wrapper">

                <div className = "search-box-wrapper">
                    <input type = "text" />
                    <input type = "text" />
                    <input type = "text" />
                    <input type = "text" />
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
                            <TodoWithFechingData />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Index