import React from 'react';
// import {NavLink} from 'react-router-dom'

class Profile extends React.Component {
    
    render(){
        if(!this.props.user){ 
            this.props.history.push('/log-in') 
        }
        return (
            <div>
            Profile
                <button onClick={() => this.props.logOut(this.props.history)}>Log out</button>
            </div>
        );
    }
}

export default Profile;