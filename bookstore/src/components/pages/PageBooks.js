import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { List, Avatar, Button, Spin, Form, Table, Divider } from 'antd';
import { outData} from './PageBuyerlist'

export const dataSource = [{
  key: '1',
  ID: 'B00000',
  name: 'book1',
  writer: 'writer1',
  cost: 100,
  date: '2017.05.09',
  publish: '出版社000',
  num:0,
}, {
  key: '2',
  ID: 'B00001',
  name: 'book2',
  writer: 'writer2',
  cost: 65,
  date: '2017.11.09',
  publish: '出版社001',
  num:0,
}, {
  key: '3',
  ID: 'B00012',
  name: 'book3',
  writer: 'writer3',
  cost: 150,
  date: '2017.06.11',
  publish: '出版社002',
  num:0,
},];

var stat={
  this_rowkey:"",
}

function addNum(th,record){
  var idd = stat.this_rowkey;
  if (idd==""){
    return;
  }else{
    th.num += 1;
    if (th.num==1){
      outData.push(th)
    }
    stat.this_rowkey=""
    return
  }
}

function minusNum(th,record){
  var idd = stat.this_rowkey;
  if (idd==""){
    return;
  }else{
    th.num -= 1;
    if (th.num==0){
      for (var i=0;i<outData.length;i++){
        if (outData[i].ID==th.ID){
          outData.splice(i,1)
          break;
        }
      }
    }
    stat.this_rowkey=""
    return
  }
}

function prt(a1,record){
  console.log('a1',a1);
  a1.num += 1;
  console.log('record',record)
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
}, {
  title: '购买',
  dataIndex: 'pay',
  key: 'pay',
  render: (text, record)=>(
    record.num ? (
      <span>
        <Button href="#" type="primary" onClick={minusNum.bind(this,record)}>-</Button>
        <a style={{margin:10}}>{record.num}</a>
        <Button href="#" type="primary" onClick={addNum.bind(this,record)}>+</Button>
      </span>
    ):(
      <span>
        <a href="#" onClick={addNum.bind(this,record)}>加入购物车</a>
        <Divider type="vertical" />
      </span>
    )
  ),
}, ];


class PageBooks extends Component{
  render(){
    return (
      <div style={{margin:'auto',width:1200,}}>
        <Table dataSource={dataSource} columns={columns} 
        onRowClick={this.setRowKey}
        style={{textAlign:'center'}}
        />
      </div>
    )
  }
  exportItem(record,index){
    console.log(record,index)
    var item = {
      BID:outData.length+1,
      ID:record.ID,
      cost:record.cost,
      date:record.date,
      key:record.key,
      name:record.name,
      publish:record.publish,
      writer:record.writer
    }
    console.log('item',item);
    outData.push(item);
    console.log('outdata',outData)
    console.log('datasource',dataSource)
  }
  setRowKey(record,index){
    stat.this_rowkey=record.ID;
    console.log(stat.this_rowkey);
  }
}


export default PageBooks;