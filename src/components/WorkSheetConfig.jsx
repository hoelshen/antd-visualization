import React, { Component } from "react";
import "./dragElement.css";
import { Menu } from "antd";
import axios from "../axios/index";
import { DownOutlined, UpOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
export class WorkSheetConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["sub1"],
      isDown: true,
      project_id: props.project_id,
      workList:[]
    };
  }
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps){
    const { project_id } = nextProps;
    if (this.props.project_id !== project_id){
      if (project_id){
        axios.ajax({
          url: "vis/worksheet/getByProjectId",
          data: {
            params: {
              project_id
            }
          },
        })
        .then((res) => {
          this.setState({
            workList:res
          })
        });
      }
    }
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys, isDown: false });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
        isDown: true,
      });
    }
  };

  handleWork = (item) => {
    axios.ajax({
      url: `vis/worksheet/${item.worksheet_id}`,
      data: {
        params: {
        }
      },
    })
    .then((res) => {
      console.log('res: ', res);
     
    });
    axios.ajax({
      url: `vis/worksheet/chart/${item.worksheet_id}`,
      data: {
        params: {
        }
      },
    })
    .then((res) => {
      console.log('res: ', res.chart_json);
      const obj = JSON.parse(res.chart_json)
      console.log('obj: ', obj);
    });
  }
  deleteHandle = (item)=>{
    axios.ajax({
      url: `vis/worksheet/${item.worksheet_id}`,
      method: 'delete',
    })
    .then((res) => {
      console.log('res: ', res);
      //todo 
      //1.刷新获取表格
      //2.删除样式
      //3.解决冒泡
    });
  }

  render() {
    const { isDown, workList } = this.state;
    const daymicIcon = isDown ? <UpOutlined /> : <DownOutlined />;
    return (
      <div style={{ margin: "10px 10px" }}>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu
            style={{ "text-align": "center" }}
            key="sub1"
            arrow={false}
            title={
              <span>
                <PlusOutlined />
              </span>
            }
          >
          { workList.map(item=>{
            return <Menu.Item key={item.worksheet_id} onClick={this.handleWork.bind(this, item)}>
                <div style={{}}>
                {item.worksheet_nm}
                <CloseOutlined onClick={this.deleteHandle.bind(this, item)}/>
                </div> 
              </Menu.Item>
            })
          }
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default WorkSheetConfig;
