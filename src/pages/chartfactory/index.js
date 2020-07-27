import React from 'react'
import { Row, Col, Tree, Input } from 'antd'
import axios from '../../axios/index';

const { Search } = Input
export default class ChartFactory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        project_id: props.project_id,
        data_id: props.data_id,
        activeId: '',
        treeData: []
      }
    }

    async componentDidMount(){
      let value = await axios.ajax({
        url: '/dta/dataFile/tree',
        data:{
          params:{
            project_id:  642516428783616
          }
        }
      })
      const genderTree = data => {
        const arr1 = [];
        for(let i = 0; i< data.length; i++){
          arr1.push({
            title: data[i].label,
            key: data[i].folder_id || data[i].data_id,
            children:[]
          })
          if(data[i].children){
            arr1[i].children = genderTree(data[i].children)
          }
        }
        return arr1
      }
      const getRenderTree = data =>{
        let arr = [];
         arr.push({
          title: data.label,
          key: data.folder_id,
          children: []
        })
        if(data.children){
          arr[0].children = genderTree(data.children)
        }
        return arr
      }
      const treeDaTA = getRenderTree(value)
      this.setState({
        treeData: treeDaTA
      })
    }

    render() {
      const { treeData } = this.state
        return (
          <div className='chartSettingBoard'>
               <Row gutter={10}>
                  <Search
                      placeholder="input search text"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                      enterButton
                    />
                </Row>
                <Row gutter={10} style={{ marginTop: 50 }}>
                  <Tree
                    showLine
                    defaultExpandParent={true}
                    autoExpandParent={true}
                    defaultExpandAll={true}
                    treeData={treeData}
                  />
                </Row>
            </div>
        );
      }
    }