import React, {Component} from 'react';
import {Input, Button} from 'antd'

let url='http://localhost:8080/services/getuserinfo'
let options = {}
options.method = 'GET'
options.mode = 'cors'
options.credentials = 'include'

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
            newpwd2:''
        }
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
        return (
            <div class="container">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <table class="table">
                    <tbody>
                    <tr><td style={{textAlign:"center"}}>头像</td>
                        <td><img alt="140x140" src="http://himg.bdimg.com/sys/portrait/item/76ab79696e69616e796f757975db05.jpg" /></td>
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