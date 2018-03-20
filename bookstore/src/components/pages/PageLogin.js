import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './CSS-PageLogin.css'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div style={{width:300,margin:'auto'}}>
    <h1 style={{fontSize:50}}>Login!</h1>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox style={{float:'left'}}>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="" style={{float:'right'}}>Forgot password</a><br/>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:300}}>
            Log in
          </Button><br/>
          <a href="/register" style={{float:'left'}}>Or register now!</a>
        </FormItem>
      </Form>
    </div>
    );
  }
}

const PageLogin = Form.create()(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);

export default PageLogin;