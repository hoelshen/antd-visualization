import React, { Component } from 'react'
import './dragElement.css'
import { Menu } from 'antd';
import axios from '../axios/index'
import { DownOutlined, UpOutlined, PlusOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
export class WorkSheetConfig extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
      openKeys: ['sub1'],
      isDown: true
    };
  
    componentDidMount(){
      console.log(23)
      axios.ajax({
        url: 'vis/worksheet/getByProjectId',
        data:{
          params: {
            project_id: '642516560904192'
          }
        }
      }).then((res)=>{
        console.log('res: ', res);

      })
    }


    onOpenChange = openKeys => {
      console.log('openKeys: ', openKeys);
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys, isDown: false });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [],
          isDown: true
        });
      }
    };


    render() {
      const { isDown } = this.state;
        const daymicIcon = isDown ?   <UpOutlined /> : <DownOutlined /> 
        return (
          <div style={{margin: "10px 10px"}}>
              <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: 256 }}
            >
              <SubMenu
                style={{"text-align": 'center'}}
                key="sub1"
                arrow={false}
                title={
                  <span >
                    <PlusOutlined/>
                  </span>
                }
              >   
                  <Menu.Item key="4">工作表</Menu.Item>
              </SubMenu>
              </Menu>
          </div>
        )
    }
}


export default WorkSheetConfig
