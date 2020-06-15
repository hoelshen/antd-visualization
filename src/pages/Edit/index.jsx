import React, { Component } from 'react';

import { Router, Route, Link } from 'react-router-dom'
class Edit extends Component {

  componentDidMount(){
    console.log(this.props.match.params);

    console.log(this.props.history.location.state);

    this.props.history.replace('/detail');

    this.props.history.goBack();
  }



  render() {
    return (
      <div>
        edit
        <ul>
            {/* 在应用中用 Link 去链接路由 */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
      </div>
    );
  }
}

export default Edit;