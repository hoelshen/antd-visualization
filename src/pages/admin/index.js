import React from 'react'
import { Row, Col, Layout } from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import NavLeft from '../../components/NavLeft'
import '../../style/common.less'
import './index.less'
const { Sider, Content } = Layout;

export default class Admin extends React.Component{
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(){
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header/>
        <Layout className="site-layout">
          <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
            <NavLeft toggle={this.toggle} collapsed={this.state.collapsed}/>
          </Sider>
          <Content>
            <Row className='content'>
                {this.props.children}
            </Row>  
          </Content>
        </Layout>
      </Layout>
    )
  }
}