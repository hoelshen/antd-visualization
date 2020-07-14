import React from 'react';

import Child from './Child'

import ChartSettingBoard from '../../components/ChartSettingBoard'

import { Button } from 'antd';

import './index.less'
export default class Life extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  render(){

    return <div className={'vStyle'}>
        <ChartSettingBoard />
    </div>
  }
}