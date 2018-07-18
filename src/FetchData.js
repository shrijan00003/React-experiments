import React from 'react';
import withLoader from './withLoader';
// import Axios from 'axios';

const Todo = ({ id}) =>{
    console.log(id);
    return (
        <div>
            {id}
            {title}
            {details}
        </div>
    )
}


// const ListTodosWithLoader = withLoader(Todo);

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}
    
	render() {
		return (
			<div className="todosWrapper">
				<ListTodosWithLoader {...this.state.todos} />
			</div>
		);
	}
}

export default FetchData;

// const url = 'http://127.0.0.1:8848/api/todos';
// let data;

// const Display = ({ title, details }) => (
// 	<div> <span style = {{ color : 'blue'}}> {title} </span> <span> {details} </span> </div>
// );
// class FetchData extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             loaded : false
//         }
//     }
//     componentDidMount(){
//         fetch(url)
//         .then((response) => response.json())
//         .then((dataParam) => {
//             data = dataParam;

//             console.log(dataParam);

//             this.setState({
//                 loaded : true
//             })
//         }  );
//     }

//     render(){
//         const { loaded } = this.state;
//         return (
//             <div>
//                 {   (loaded)
//                     ?
//                     data.data.map((val,index) => <Display key={index} {...val} /> )
//                     : <Loader />
//                 }
//             </div>
//         )
//     }
// }

// export default FetchData
