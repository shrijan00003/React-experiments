import React from 'react'
import Loader from '../Loader';

const withLoader = (Component) => {
    class MyComponent extends React.Component{
        render(){
            return this.props.isLoaded ?
            this.props.datas.map((data, index) => <Component key={index} {...data} />) :
            <Loader/>
        }
    }
    return MyComponent
}

export default withLoader