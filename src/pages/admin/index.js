import React from 'react'
import { Row, Col } from 'antd'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import NavLeft from '../../components/NavLeft'
import '../../style/common.less'
import './index.less'

export default class Admin extends React.Component{


 componentDidMount(){

  }

  render(){
    return (
      <Row className='container'>
        <Col className='nav-left'>
          <NavLeft/>
        </Col>
        <Col span="22" className='main'>
          <Header/>
          <Row className='content'>
            {this.props.children}
          </Row>     
          <Footer/>
        </Col>
      </Row>
    )
  }
}