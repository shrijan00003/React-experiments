import React from 'react';
import TodoNavbar from '../navbar';

class Home extends React.Component {
    render() {
        return (
            <div className="main-container">
                <TodoNavbar /><br/>
                <h1>Hello from Home Component</h1>
            </div>
        );
    }
}

export default Home
