import React from 'react'


const ErrorMessage =()=>{
        console.log('Error occured in With saving user')
}
const withSavingUser = (Component) => {
    class MyComponent extends React.Component{
        render(){
            return this.props.isVerified ?
            this.props.datas.map((data, index) => <Component key={index} {...data} />) :
            <ErrorMessage />
        }
    }
    return MyComponent
}

export default withSavingUser