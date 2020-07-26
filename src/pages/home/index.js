import React from 'react';

import ChartSettingBoard from '../../components/ChartSettingBoard'
import axios from '../../axios/index';

import { Button } from 'antd';

import './index.less'
export default class Life extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      project_id: '',
      data_id: ''
    }
  }

  async componentDidMount(){
    let value = await axios.ajax({
      url: '/pjt/project/list',
      data:{
        params:{
        }
      }
    })

    this.setState({
      project_id: value[0].project_id
    })
    let value2 = await axios.ajax({
      url: '/dta/dataFile/tree',
      data:{
        params:{
          project_id:  value[0].project_id
        }
      }
    })

    const data_id = value2.children[0].data_id
    this.setState({
      data_id
    })
    let value3 = await  axios.ajax({
        url:`/dta/dataFile/fields/${data_id}`,
    })
  }

  render(){
    const { project_id, data_id } = this.state;
    return <div className={'vStyle'}>
        <ChartSettingBoard  project_id={project_id} data_id={data_id}/>
    </div>
  }
}