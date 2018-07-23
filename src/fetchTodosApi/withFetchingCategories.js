import React from 'react';
import Axios from 'axios';

const withFetchingCategories = Component =>{
    class MyComponent extends React.Component{
        constructor(){
            super();
            this.state ={
                data : '',
                isLoaded : false
            }
        }
        componentDidMount(){
            fetch(this.props.url)
            .then(response => {
                return response.json()
            })
            .then((dataParam) => {
                this.setState({
                    data : dataParam.data,
                    isLoaded : true
                })
            })
        }
        render(){
            return(
               <Component datas = {this.state.data} isLoaded = {this.state.isLoaded} />
            )
        }
    }
    return MyComponent
}

export default withFetchingCategories