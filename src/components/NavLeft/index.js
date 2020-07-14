import React from "react";

import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'

import './index.less'

import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import MenuConfig from "../../config/menuConfig";

const { SubMenu } = Menu;

class NavLeft extends React.Component {
  state = {
      currentKey:''
  }
  handleClick = ({ item ,key})=>{
    const menuTreeNode = this.renderMenu(MenuConfig);
    let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
    this.setState({
        currentKey,
        menuTreeNode
    })
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({ menuTreeNode });
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
      <div className="logo">
          <h1>MPai可视化分析平台</h1>
      </div>
      <Menu
          onClick={this.handleClick}
          selectedKeys={this.state.currentKey}
          theme="dark"
      >
          { this.state.menuTreeNode }
      </Menu>
  </div>
    );
  }
}
export default connect()(NavLeft);