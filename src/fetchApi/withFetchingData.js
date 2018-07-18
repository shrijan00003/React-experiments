import React from 'react';
import Axios from 'axios';

const URL = 'http://127.0.0.1:8848/api/todos';
const withFetchingData = (Component) => {
    class MyComponet extends React.Component {

        constructor() {
            super();
            this.state = {
                todos: [],
                todoStore: []
            }
        }

        componentDidMount() {
            Axios.get(URL)
                .then(json => json.data.data.map(todo => (
                    {
                        id: todo.id,
                        title: todo.title,
                        details: todo.details
                    })))
                .then(newTodo => this.setState({ todos: newTodo }))
                .catch(error => console.log(error));
             }
             
            render(){
                console.log(this.state.todos);
                return (
                    <Component todos={this.state.todos} />
                )
            }
        }
    return MyComponet
}
export default withFetchingData