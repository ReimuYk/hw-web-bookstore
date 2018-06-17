import React, {Component} from 'react';
import {Input, Button, Upload, Icon, message} from 'antd'

let url='http://localhost:8080/services/getuserinfo'
let options = {}
options.method = 'GET'
options.mode = 'cors'
options.credentials = 'include'

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

let resval = {}
fetch(url,options).then(function(response){return response.text()})
.then(function(res){
    try{
        resval = JSON.parse(res)
    }catch(err){
        resval={}
    }
    window.location.href='#'
})

class Infomation extends Component{
    constructor (props){
        super(props)
        // resval = JSON.parse(resval)
        let imageUrl = "http://himg.bdimg.com/sys/portrait/item/76ab79696e69616e796f757975db05.jpg"
        this.state = {
            editable: false,
            email: resval.email,
            nickname: resval.nickname,
            phone: resval.phone,
            website: resval.website,
            usertype: resval.usertype,
            pwdEdit: false,
            oldpwd:'',
            newpwd1:'',
            newpwd2:'',
            imageUrl
        }
        window.location.href='#'
    }
    onInputChangePhone = (e) => {
        this.setState({ phone: e.target.value });
    }
    onInputChangeWebsite = (e) => {
        this.setState({ website: e.target.value });
    }
    onInputChangeP0 = (e) => {
        this.setState({ oldpwd: e.target.value });
    }
    onInputChangeP1 = (e) => {
        this.setState({ newpwd1: e.target.value });
    }
    onInputChangeP2 = (e) => {
        this.setState({ newpwd2: e.target.value });
    }
    editOrNot = ()=>{
        let temp = this.state.editable
        this.setState({
            editable: !temp
        })
    }
    editPwd = ()=>{
        let temp = this.state.editPwd
        this.setState({
            editPwd: !temp
        })
    }

    onInputChangeSex = (e) => {
        this.setState({ sex: e.target.value });
    }

    save = ()=>{
        // alert("save");
        this.editOrNot();
        let url='http://localhost:8080/services/modifyuserinfo'
        let jsonbody = {}
        jsonbody.phone = this.state.phone
        jsonbody.email = this.state.email
        jsonbody.website = this.state.website
        let options={}
        options.method='POST'
        options.headers={ 'Accept': 'application/json', 'Content-Type': 'application/json', }
        options.mode = 'cors'
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

    render(){
        let phonediv = !this.state.editable ?
            <div>{this.state.phone}</div> :
            <Input
                ref={ele => this.searchInput = ele}
                placeholder="phone"
                value={this.state.phone}
                onChange={this.onInputChangePhone}
                // onPressEnter={this.NameState}
            />
        let webdiv = !this.state.editable ?
            <div>{this.state.website}</div> :
            <Input
                ref={ele => this.searchInput = ele}
                placeholder="website"
                value={this.state.website}
                onChange={this.onInputChangeWebsite}
                // onPressEnter={this.NameState}
            />
        let modifyButton = !this.state.editable ?
            <div><Button type="primary" onClick={this.editOrNot}>修改信息</Button></div> :
            <div><Button type="primary" onClick={this.save}>完成修改</Button></div>
        let passworddiv = !this.state.pwdEdit ?
            <div><Button type="primary" onClick={this.editPwd}>修改密码</Button></div> :
            <div>
                <div><Input
                                ref={ele => this.searchInput = ele}
                                placeholder="oldpwd"
                                value={this.state.oldpwd}
                                onChange={this.onInputChangeP0}
                                // onPressEnter={this.NameState}
                            />
                </div>
            </div>
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        return (
            <div class="container">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <table class="table">
                    <tbody>
                    <tr><td style={{textAlign:"center"}}>头像</td>
                        <td>
                            {/* <img alt="140x140" src={this.state.imgurl} /> */}
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                                >
                                {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : uploadButton}
                                </Upload>
                        </td>
                    </tr>
                    <tr>
                        <td>邮件地址</td>
                        <td width="800">{this.state.email}</td>
                    </tr>
                    <tr>
                        <td>昵称</td>
                        <td width="800">{this.state.nickname}</td>
                    </tr>
                    <tr>
                        <td>手机号</td>
                        <td width="800">{phonediv}</td>
                    </tr>
                    <tr>
                        <td>个人主页</td>
                        <td width="800">{webdiv}</td>
                    </tr>
                    <tr>
                        <td>用户类型</td>
                        <td width="800">{this.state.usertype}</td>
                    </tr>
                    <tr>
                        <td/>
                        <td>{modifyButton}</td>
                    </tr>
                    {/* <tr><td></td><td></td></tr>
                    <tr>
                        <td>password</td>
                        <td width="800">{passworddiv}</td>
                    </tr>
                    <tr><td></td><td></td></tr> */}
                </tbody>
                </table>
            </div>
        </div>
        </div>
        )
    }
}

export default Infomation;