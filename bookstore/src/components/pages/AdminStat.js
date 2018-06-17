import React, {Component} from 'react';
import { Table, Input, Popconfirm, Button, Icon, Form, Row, Col} from 'antd';
const FormItem = Form.Item

const data = [{
    id:1,
    orderid:123345,
    bookid: 123333,
    bookname:'bookname',
    singleprice:123,
    num:1222,
    userid:54321,
    username: 'usernameusernameusaernameusername',
}]

class AdminStat extends Component{
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
            width: 25,
          },{
            title: 'OrderID',
            dataIndex: 'orderid',
            key: 'orderid',
            width: 150,
          }, {
            title: '下单时间',
            dataIndex: 'ordertime',
            key: 'ordertime',
            width: 100,
          }, {
            title: '单价',
            dataIndex: 'singleprice',
            key: 'singleprice',
            width: 25,
          }, {
            title: '数量',
            dataIndex: 'num',
            key: 'num',
            width: 25,
          }, {
            title: 'BID',
            dataIndex: 'bookid',
            key: 'bookid',
            width: 30,
          }, {
            title: '书名',
            dataIndex: 'bookname',
            key: 'bookname',
            width:100,
          }, {
            title: '作者名',
            dataIndex: 'bookwriter',
            key: 'bookwriter',
            width:100,
          }, {
            title: '种类',
            dataIndex: 'bookcategory',
            key: 'bookcategory',
            width: 100,
          }, {
            title: 'UID',
            dataIndex: 'userid',
            key: 'userid',
            width:30,
          }, {
            title: '购书人',
            dataIndex: 'username',
            key: 'username',
            width:100,
          }]
        this.state = {
          data: data,
          timedown:'2018',
          timeup:'2018',
          category:'fiction',
          writername:'writer2',
          username:'admin'
        };
        this.getAll();
      }
      render() {
        
        return (
            <div style={{width:1200,margin:'auto'}}>
              <div style={{margin:'auto'}}>
                <Row>
                  <Col span={2}>时间范围:</Col>
                  <Col span={2}><Input value={this.state.timedown} onChange={this.setTimedownInput}/></Col>
                  <Col span={1}>~</Col>
                  <Col span={2}><Input value={this.state.timeup} onChange={this.setTimeupInput}/></Col>
                  <Col span={1}></Col>
                  <Col span={1}>种类:</Col>
                  <Col span={2}><Input value={this.state.category} onChange={this.setCategoryInput}/></Col>
                  <Col span={1}></Col>
                  <Col span={1}>购书人:</Col>
                  <Col span={2}><Input value={this.state.username} onChange={this.setUserInput}/></Col>
                  <Col span={1}></Col>
                  <Col span={1}>作者名:</Col>
                  <Col span={2}><Input value={this.state.writername} onChange={this.setWriterInput}/></Col>
                  <Col span={2}><Button type="primary" onClick={this.getSelect}>筛选</Button></Col>
                  <Col span={3}><Button type="primary" onClick={this.getAll}>显示全部</Button></Col>
                </Row>
              </div>
                <Table bordered dataSource={this.state.data} columns={this.columns} />
            </div>
        );
      }
      getAll = () => {
        var that = this
        data.splice(0,data.length)
        let url='http://localhost:8080/getorderdata'
        let options = {}
        options.method = 'GET'
        options.mode = 'cors'
        fetch(url,options).then(function(response){return response.text()})
        .then(function(res){
          console.log('res',res)
          res = eval('('+res+')')
          for(var i=0;i<res.length;i++){
            let item = {}
            item.key = res[i]["id"].toString()
            item.ID = res[i]["id"].toString()
            item.orderid=res[i]["orderid"]
            item.ordertime=res[i]["ordertime"]
            item.singleprice=res[i]["singleprice"]
            item.num=res[i]["num"]
            item.bookid=res[i]["bookid"]
            item.bookname=res[i]["bookname"]
            item.bookcategory=res[i]["bookcategory"]
            item.bookwriter=res[i]["bookwriter"]
            item.userid=res[i]["userid"]
            item.username=res[i]["username"]
            data.push(item)
          }
          console.log('data',data)
          that.setState({data:data})
        })
        
      }
      getSelect = () => {
        var that = this
        data.splice(0,data.length)
        let url='http://localhost:8080/getselectorder?'
        url = url + 'timedown='+ this.state.timedown + '&'
        url = url + 'timeup='+ this.state.timeup + '&'
        url = url + 'category='+this.state.category + '&'
        url = url + 'writername='+this.state.writername + '&'
        url = url + 'username='+this.state.username
        console.log(url)
        let options = {}
        options.method = 'GET'
        options.mode = 'cors'
        fetch(url,options).then(function(response){return response.text()})
        .then(function(res){
          console.log('res',res)
          res = eval('('+res+')')
          for(var i=0;i<res.length;i++){
            let item = {}
            item.key = res[i]["id"].toString()
            item.ID = res[i]["id"].toString()
            item.orderid=res[i]["orderid"]
            item.ordertime=res[i]["ordertime"]
            item.singleprice=res[i]["singleprice"]
            item.num=res[i]["num"]
            item.bookid=res[i]["bookid"]
            item.bookname=res[i]["bookname"]
            item.bookcategory=res[i]["bookcategory"]
            item.bookwriter=res[i]["bookwriter"]
            item.userid=res[i]["userid"]
            item.username=res[i]["username"]
            data.push(item)
          }
          console.log('data',data)
          that.setState({data:data})
        })
        
      }
      setTimedownInput = (e)=>{
        this.setState({timedown:e.target.value})
      }
      setTimeupInput = (e)=>{
        this.setState({timeup:e.target.value})
      }
      setCategoryInput = (e)=>{
        this.setState({category:e.target.value})
      }
      setWriterInput = (e)=>{
        this.setState({writername:e.target.value})
      }
      setUserInput = (e)=>{
        this.setState({username:e.target.value})
      }
}

export default AdminStat;