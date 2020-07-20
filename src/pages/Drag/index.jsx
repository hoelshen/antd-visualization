import React, { Component } from 'react';
import { Rate,Input,DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const GlobalComponent = {
    Rate,
    Input,
    MonthPicker,
    RangePicker,
    WeekPicker,
}


class Drag extends Component {

    render() {
        
        // 测试数据
        const Data = [
            {
                name: 'Input',
                attr: {
                    size:'large',
                    value:'第一个'
                }
            },
            {
                name: 'Input',
                attr: {
                    size:'default',
                    value:'第二个'
                }
            },
            {
                name: 'Input',
                attr: {
                    size:'small',
                    value:'第三个'
                }
            },
            {
                name: 'Containers',
                attr: {
                    style:{
                        border:'1px solid red'
                    }
                },
                children:[
                    {
                        name: 'Input',
                        attr: {
                            size:'small',
                            value:'嵌套的input'
                        }
                    },
                    {
                        name: 'Rate',
                        attr: {
                            size:'small',
                            value:'嵌套的input'
                        }
                    },
                    {
                        name: 'MonthPicker',
                        attr: {}
                    },
                    {
                        name: 'RangePicker',
                        attr: {}
                    },
                    {
                        name: 'WeekPicker',
                        attr: {}
                    },
                ]

            },
        ];
        
        // 递归函数
        const loop = (arr) => (
            arr.map(item => {
                if(item.children){
                    return <div {...item.attr} >{loop(item.children)}</div>
                }
                const ComponentInfo = GlobalComponent[item.name]
                return <ComponentInfo {...item.attr} />
            })
        );

        return (
            <div>
              {loop(Data)}
            </div>
        );
    }
}

export default Drag;

