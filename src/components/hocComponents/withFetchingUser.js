import React from 'react';
import Axios from 'axios';

const URL = 'http://127.0.0.1:8848/api/auth/login';
const withFetchingUser = (Component) => {
    class MyComponent extends React.Component {

        constructor() {
            super();
            this.state = {
                user: [],
                isVerified: false
            }
            console.log(this.props.email,this.props.password);
        }
        componentDidMount() {

            Axios.post(URL, {
                email: this.props.email,
                password: this.props.password
            }).then(json => json.data.data.map(user => (
                {
                    access_token: user.accessToken,
                    refresh_token: user.refreshToken,
                    user_id: user.id
                }

            ))).then(newUser => {
                console.log(newUser);
                this.setState({
                    user : newUser,
                    isVerified :true 
                })
            }).catch(errror => console.log(errror));
        }

        render() {
            return (
                <Component datas={this.state.user} isVerified={this.state.isVerified} />
            )
        }
    }
    return MyComponent
}
export default withFetchingUser