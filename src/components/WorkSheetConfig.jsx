import React, { Component } from 'react'
import './dragElement.css'
import { Menu } from 'antd';
import axios from '../axios/index'
import { MailOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
export class WorkSheetConfig extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
      openKeys: ['sub1'],
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
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
      }
    };

    render() {
        return (
          <div className='dragElement'>
              <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: 256 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                  </span>
                }
              >   
                  <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              </Menu>
          </div>
        )
    }
}


export default WorkSheetConfig
