import React, {Component} from 'react';

import { Form, Input, Button, Radio, Upload, Icon, message } from 'antd';
const FormItem = Form.Item;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class AdminNew extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
      name:"",
      writer:"",
      cost:"",
      date:"",
      publish:"",
      loading: false,
    };
  };

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
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
    //pic upload
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <div style={{width:800,margin:'auto'}}>
        <div style={{width:800,marginLeft:300}}>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="//jsonplaceholder.typicode.com/posts/"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
        </Upload>
        </div>
        <Form layout={formLayout}>
          <FormItem
            label="书名"
            {...formItemLayout}
          >
            <Input placeholder="input name" value={this.state.name} onChange={this.setNameInput}/>
          </FormItem>
          <FormItem
            label="作者"
            {...formItemLayout}
          >
            <Input placeholder="input writer" value={this.state.writer} onChange={this.setWriterInput}/>
          </FormItem>
          <FormItem
            label="价格"
            {...formItemLayout}
          >
            <Input placeholder="input cost" value={this.state.cost} onChange={this.setCostInput}/>
          </FormItem>
          <FormItem
            label="出版年份"
            {...formItemLayout}
          >
            <Input placeholder="input year" value={this.state.date} onChange={this.setDateInput}/>
          </FormItem>
          <FormItem
            label="出版社"
            {...formItemLayout}
          >
            <Input placeholder="input publish" value={this.state.publish} onChange={this.setPublishInput}/>
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary" onClick={this.submit}>Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
  setNameInput = (e)=>{
    this.setState({name:e.target.value})
  }
  setWriterInput = (e)=>{
    this.setState({writer:e.target.value})
  }
  setCostInput = (e)=>{
    this.setState({cost:e.target.value})
  }
  setDateInput = (e)=>{
    this.setState({date:e.target.value})
  }
  setPublishInput = (e)=>{
    this.setState({publish:e.target.value})
  }
  submit = ()=>{
    console.log(this.state)
    // return
    let jsonbody={}
    jsonbody.name=this.state.name
    jsonbody.writer=this.state.writer
    jsonbody.cost=parseFloat(this.state.cost)
    jsonbody.date=this.state.date
    jsonbody.publish=this.state.publish
    jsonbody.picture=this.state.imageUrl
    let url='http://localhost:8080/services/newdata'
    let options={}
    options.method='POST'
    options.headers={ 'Accept': 'application/json', 'Content-Type': 'application/json', }
    options.body=JSON.stringify(jsonbody)
    console.log(options);
    fetch(url,options)
      .then(response=>response.text())
      .then(responseJson=>{
        console.log(responseJson);
    }).catch(function(e) {
          console.log("Oops, error");
    });
  }
}


export default AdminNew;