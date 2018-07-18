import React from 'react';
import Loader from './Loader';

/**
 * 
 * @param {*} Component 
 * @desc {*} This funciton will take Component as parameter and returns component with props otherwise return loader
 */
const withLoader = Component => {
    class MyComponent extends React.Component{
            render(){
                console.log(this.props);
                return this.props ? <Component {...this.props } /> : <Loader/>;
            }
    };
    return MyComponent
};

export default withLoader