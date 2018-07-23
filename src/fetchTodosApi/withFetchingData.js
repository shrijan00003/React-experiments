import React from 'react';
import Axios from 'axios';

const URL = 'http://127.0.0.1:8848/api/todos';
const withFetchingData = (Component) => {
    class MyComponet extends React.Component {

        constructor() {
            super();
            this.state = {
                todos: [],
                todoStore: [],
                isLoaded: false
            }
        }

        componentDidMount() {
            Axios.get(this.props.url)
                .then(json => json.data.data.map(todo => (
                    {
                        id: todo.id,
                        title: todo.title,
                        details: todo.details
                    })))
                .then(newTodo => this.setState({
                    todos: newTodo,
                    todoStore: newTodo,
                    isLoaded: true
                }))
                .catch(error => console.log(error));
        }
        componentWillReceiveProps(nextProps) {
            console.log(nextProps);
                Axios.get(this.props.url, {
                    params: {
                        title: nextProps.query,
                        category_id : nextProps.category,
                        page_size : nextProps.pageSize
                    }
                }).then(json => json.data.data.map(todo => (
                    {
                        id: todo.id,
                        title: todo.title,
                        details: todo.details
                    }
                ))).then(newTodo => this.setState({
                    todos: newTodo,
                    todoStore: newTodo,
                    isLoaded: true
                })).catch(error => console.log(error));

            }

        render() {
            return (
                <Component datas={this.state.todos} isLoaded={this.state.isLoaded} />
            )
        }
    }
    return MyComponet
}
export default withFetchingData