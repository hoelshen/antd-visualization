import React from 'react'
import { Input, Select, Form, Button, Checkbox, Radio, DatePicker} from 'antd'
import Utils from '../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;

export default class FilterForm extends React.Component{
    cityFormRef = React.createRef();


    handleFilterSubmit = ()=>{
        let fieldsValue = this.cityFormRef.current.getFieldsValue();

        console.log('this.', fieldsValue)
        this.props.filterSubmit(fieldsValue);
    }

    reset = ()=>{
        this.props.form.resetFields();
    }

    initFormList = ()=>{
        const formList = this.props.formList;
        console.log('this.props.formList: ', this.props.formList);
        const formItemList = [];
        if (formList && formList.length>0){
            formList.forEach((item,i)=>{
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || '';
                let placeholder = item.placeholder;
                let width = item.width;
                if (item.type == '城市') {
                    const city = <FormItem label="城市" key={field} name="city"  initialValue='0'>
                      <Select
                          style={{width:80}}
                          placeholder={placeholder}
                      >
                          {Utils.getOptionList([{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '上海' }, { id: '3', name: '天津' }, { id: '4', name: '杭州' }])}
                      </Select>
                    </FormItem>;
                    formItemList.push(city)
                }else if (item.type == '时间查询'){
                    const begin_time = <FormItem label="订单时间" key={field} name="begin_time">
                      <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
                    </FormItem>;
                    formItemList.push(begin_time)
                    const end_time = <FormItem label="~" colon={false} key={field} name="end_time">
                      <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                    </FormItem>;
                    formItemList.push(end_time)
                }else if(item.type == 'INPUT'){
                    const INPUT = <FormItem label={label} key={field}>
                      <Input type="text" style={{ width: width }} placeholder={placeholder} />
                    </FormItem>;
                    formItemList.push(INPUT)
                } else if (item.type == 'SELECT') {
                    const SELECT = <FormItem label={label} key={field}>
                        <Select
                            style={{ width: width }}
                            placeholder={placeholder}
                        >
                            {Utils.getOptionList(item.list)}
                        </Select>
                    </FormItem>;
                    formItemList.push(SELECT)
                } else if (item.type == 'CHECKBOX') {
                    const CHECKBOX = <FormItem label={label} key={field}  valuePropName= 'checked'>
                      <Checkbox>
                          {label}
                      </Checkbox>
                    </FormItem>;
                    formItemList.push(CHECKBOX)
                } else if (item.type == 'DATE') {
                    const Date = <FormItem label={label} key={field}>
                      <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                    </FormItem>;
                    formItemList.push(Date)
                }
            })
        }
        return formItemList;
    }
    render(){
        return (
            <Form layout="inline" ref={this.cityFormRef}>
                { this.initFormList() }
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
