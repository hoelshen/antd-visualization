import React from "react";

import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

import './index.less'

import { Menu, Layout, Button } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import MenuConfig from "../../config/menuConfig";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

class NavLeft extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentKey:'',
      collapsed: props.Collapsed,
    }
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

  handle = () => {
    console.log(1);

    this.props.toggle()
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
        <Menu.Item title={item.title} key={item.key} icon={<PieChartOutlined />}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.props.toggle} style={{ marginBottom: 16 }}>
          {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
          <Menu
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
          >
          { this.state.menuTreeNode }
          </Menu>
      </div>
    );
  }
}
export default connect()(NavLeft);