import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { List, Avatar, Button, Spin, Form, Table, Divider } from 'antd';

var stat={
  this_rowkey:"",
}

function addNum(th,record){
  console.log(th,record)
  var idd = stat.this_rowkey;
  if (idd==""){
    return;
  }else{
    th.num += 1;
    if (th.num==1){
      outData.push(th)
    }
    calcTotal();
    stat.this_rowkey=""
    return
  }
}

function minusNum(th,record){
  var idd = stat.this_rowkey;
  console.log('th',th)
  if (idd==""){
    return;
  }else{
    console.log('th.num',th.num)
    th.num -= 1;
    if (th.num==0){
      for (var i=0;i<outData.length;i++){
        if (outData[i].ID==th.ID){
          outData.splice(i,1)
          break;
        }
      }
    }
    calcTotal();
    stat.this_rowkey=""
    return
  }
}

const columns = [{
  title: 'ID',
  dataIndex: 'ID',
  key: 'id',
  sorter: (a,b)=>a<b
}, {
  title: '书名',
  dataIndex: 'name',
  key: 'name',
  sorter: (a,b)=>a<b
}, {
  title: '作者',
  dataIndex: 'writer',
  key: 'writer',
}, {
  title: '价格',
  dataIndex: 'cost',
  key: 'cost',
  sorter: (a,b)=>a.cost-b.cost
}, {
  title: '出版年份',
  dataIndex: 'date',
  key: 'date',
  sorter: (a,b)=>a<b
}, {
  title: '出版社',
  dataIndex: 'publish',
  key: 'publish',
},{
  title: '数量',
  dataIndex: 'pay',
  key: 'pay',
  render: (text, record)=>(
      <span>
        <Button href="#" type="primary" onClick={minusNum.bind(this,record)}>-</Button>
        <a style={{margin:10}}>{record.num}</a>
        <Button href="#" type="primary" onClick={addNum.bind(this,record)}>+</Button>
      </span>
  ),
}, ];

export var outData = new Array();
var totalCost = 0;
export function calcTotal(){
  totalCost = 0;
  for (var i=0;i<outData.length;i++){
    totalCost += outData[i].cost*outData[i].num;
  }
}

class PageBuyerlist extends Component{
  render(){
    return (
      <div style={{margin:'auto',width:1200,}}>
        <h5 style={{fontSize:30}}>我的购物车</h5>
        <Table dataSource={outData} columns={columns} 
        onRowClick={this.setRowKey}
        footer={()=>(
          <div style={{marginLeft:800}}>
            <a style={{fontSize:35}}>Total:</a>
            <a style={{fontSize:35}}>   {totalCost.toFixed(2)}</a>
          </div>
        )}
        />
        <Button type='primary' onClick={this.createorder}>Submit</Button>
      </div>
    )
  }
  createorder(){
    console.log("outdata",outData);
    let l = []
    for (var i=0;i<outData.length;i++){
      l.push({
        bookid:outData[i].ID,
        num:outData[i].num,
        price:outData[i].cost
      })
    }
    let url='http://localhost:8080/services/createorder'
    let options = {}
    options.method = 'POST'
    options.mode = 'cors'
    options.headers={ 'Accept': 'application/json', 'Content-Type': 'application/json', }
    options.body=JSON.stringify({booklist:l})
    options.credentials = 'include'
    console.log("outer")
    fetch(url,options).then(function(response){return response.text()})
    .then(function(res){
      alert(res);
      window.location.href='#'
    })
  }
  setRowKey(record,index){
    stat.this_rowkey=record.ID;
    console.log(stat.this_rowkey);
  }


}


export default PageBuyerlist;