import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import {instanceOf} from 'prop-types';
import { withCookies,Cookies} from 'react-cookie'
import {Link} from 'react-router-dom'
import './CSS-PageLogin.css'
const FormItem = Form.Item;


export var logintype='NotSet'
let url='http://localhost:8080/services/remember'
let options = {}
options.method = 'GET'
options.mode = 'cors'
options.credentials = 'include'
console.log("outer")
fetch(url,options).then(function(response){return response.text()})
.then(function(res){
  logintype=res;
  window.location.href='#'
})

class NormalLoginForm extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { cookies} = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let url='http://localhost:8080/services/login'
        let options={}
        options.method='POST'
        options.headers={ 'Accept': 'application/json', 'Content-Type': 'application/json', }
        options.body=JSON.stringify(values)
        console.log(options);
        fetch(url,options).then(response=>response.text())
          .then(responseJson=>{
            alert(responseJson);
            logintype=responseJson
            window.location.href='#'
        }).catch(function(e) {
              console.log("Oops, error");
        });
        cookies.set('username',values.userName)
        cookies.set('password',values.password)
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

export default withCookies(PageLogin);