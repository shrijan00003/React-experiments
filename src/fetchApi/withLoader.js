import React from 'react'
import Loader from '../Loader';

const withLoader = (Component) => {
    class MyComponent extends React.Component{
        render(){
            console.log(this.props.todos);
            return this.props.todos
            ?this.props.todos.map((todo, index) => <Component key={index} {...todo} />)
            : <Loader/>
        }
    }
    return MyComponent
}

export default withLoader