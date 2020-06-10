import React, { Component } from 'react';

class index extends Component {



  onClickBtn(){
    this.props.history.push('edit');
    this.props.history.push({
      pathname: '/edit',
      state: {
          id: 3
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickBtn}>home</button>
      </div>
    );
  }
}

export default index;