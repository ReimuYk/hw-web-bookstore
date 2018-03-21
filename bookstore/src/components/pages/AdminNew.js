import React, {Component} from 'react';

import { Form, Input, Button, Radio } from 'antd';
const FormItem = Form.Item;

class AdminNew extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }
  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    return (
      <div style={{width:800,margin:'auto'}}>
        <Form layout={formLayout}>
          <FormItem
            label="书名"
            {...formItemLayout}
          >
            <Input placeholder="input name" />
          </FormItem>
          <FormItem
            label="作者"
            {...formItemLayout}
          >
            <Input placeholder="input writer" />
          </FormItem>
          <FormItem
            label="价格"
            {...formItemLayout}
          >
            <Input placeholder="input cost" />
          </FormItem>
          <FormItem
            label="出版年份"
            {...formItemLayout}
          >
            <Input placeholder="input year" />
          </FormItem>
          <FormItem
            label="出版社"
            {...formItemLayout}
          >
            <Input placeholder="input publish" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}


export default AdminNew;