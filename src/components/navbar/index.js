import React from 'react';
import Data from './Data';
import NavBar from './Navbar';
import  "./style.css";

class NavbarIndex extends React.Component{
    render(){
        console.log(Data);
        return(
            <NavBar items={Data} />
        )
    }
}
export default NavbarIndex