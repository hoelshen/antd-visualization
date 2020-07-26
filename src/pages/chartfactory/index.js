import React from 'react'
import { Row, Col, Select, Icon, Input, Menu } from 'antd'
const { Search } = Input
const { SubMenu } = Menu;
export default class ChartFactory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        project_id: props.project_id,
        data_id: props.data_id,
        activeId: ''
      }
    }
    render() {
      const { itemList } = this.state

      const leftItems = itemList.map((item, idx) => {
          return (
              <div key={idx}>
              
              </div>
          )
      })

        return (
          <div className='chartSettingBoard'>
               <Row gutter={10}>
                    <Col sm={4}>
                        <div style={{ height: '50px', width: '100%' }}>
                        <Search
                          placeholder="input search text"
                          onSearch={value => console.log(value)}
                          style={{ width: 200 }}
                          enterButton
                        />
                        </div>
                        <div className='leftBox'>
                            {leftItems}
                        </div>
                    </Col>
                    <Col sm={18}>
                
                    </Col>
                </Row>
            </div>
        );
    }
}