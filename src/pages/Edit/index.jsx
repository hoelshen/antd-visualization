import React, { Component } from 'react';

import { Link } from 'react-router'
class Edit extends Component {

  componentDidMount(){
    this.props.history.replace('/detail');

    this.props.history.goBack();
  }



  render() {
    return (
      <div>
        edit
        <ul>
            {/* 在应用中用 Link 去链接路由 */}
   
          </ul>
      </div>
    );
  }
}

export default Edit;