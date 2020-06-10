import React, { Component } from 'react';

import { Router, Route, Link } from 'react-router'
class Edit extends Component {

  componentDidMount(){
    console.log(this.props.match.params);

    console.log(this.props.history.location.state);

    this.props.history.replace('/detail');

    this.props.history.goBack();
  }

  const User = React.createClass({
    componentDidMount() {
      this.setState({
        // 路由应该通过有用的信息来呈现，例如 URL 的参数
        user: findUserById(this.props.params.userId)
      })
    },
  
    render() {
      return (
        <div>
          <h2>{this.state.user.name}</h2>
          {/* 等等。 */}
        </div>
      )
    }
  })

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