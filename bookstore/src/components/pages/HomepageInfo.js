import React, {Component} from 'react';
import {Input} from 'antd'

class Infomation extends Component{
    state = {
        nameModify: false,
        name: 'namenamename',
        sexModify: false,
        sex: 'male'
    }
    onInputChangeName = (e) => {
        this.setState({ name: e.target.value });
    }
    onInputChangeSex = (e) => {
        this.setState({ sex: e.target.value });
    }
    NameState = ()=>{
        let temp = this.state.nameModify
        this.setState({
            nameModify: !temp
        });
    }
    SexState = ()=>{
        let temp = this.state.sexModify
        this.setState({
            sexModify: !temp
        });
    }

    render(){
        let namediv = !this.state.nameModify ?
            <div onClick={this.NameState}>{this.state.name}</div> :
            <Input
                ref={ele => this.searchInput = ele}
                placeholder="name"
                value={this.state.name}
                onChange={this.onInputChangeName}
                onPressEnter={this.NameState}
            />
        let sexdiv = !this.state.sexModify ?
            <div onClick={this.SexState}>{this.state.sex}</div> :
            <Input
                ref={ele => this.searchInput = ele}
                placeholder="maxCost"
                value={this.state.sex}
                onChange={this.onInputChangeSex}
                onPressEnter={this.SexState}
            />
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
                        <td>
                            昵称
                        </td>
                        <td width="800">
                            {namediv}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            性别
                        </td>
                        <td width="800">
                            {sexdiv}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ??
                        </td>
                        <td>
                            ?
                        </td>
                    </tr>
                    <tr><td></td><td></td></tr>
                </tbody>
                </table>
            </div>
        </div>
        </div>
        )
    }
}

export default Infomation;