import React from 'react';

class NavBarLink extends React.Component{
  render(){
    return (
      <a href={this.props.url}>{this.props.text}</a>
    )
  }
}
export default NavBarLink










  // const NavBarLink = React.createClass({
  //     render: function() {
  //       return (
  //         <a href={this.props.url}>{this.props.text}</a>
  //       );
  //     }
  //   })