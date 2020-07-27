import React from 'react'
import { Row,Col } from "antd"
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
import { connect } from 'react-redux';
class Header extends React.Component{
    state={}
    componentWillMount(){
        this.setState({
            userName:'sjh'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
    }
    render(){
        const menuType = this.props.menuType;
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="6" className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <span>MPai可视化分析平台 </span>
                    </Col>
                    <Col span={18}>
                        <span>数据分析平台</span>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuName:state.menuName
    }
}
export default connect(mapStateToProps)(Header);