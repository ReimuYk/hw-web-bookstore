import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { List, Avatar, Button, Spin, Form, Table, Divider } from 'antd';
// import {outData} from './PageBooks'

const columns = [{
  title: 'BID',
  dataIndex: 'BID',
  key: 'bid',
  sorter: (a,b)=>a<b
}, {
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
  title: '删除',
  dataIndex: 'pay',
  key: 'pay',
  render: (text, record)=>(
    <span>
      <a href="#">删除</a>
      <Divider type="vertical" />
    </span>
  ),
}, ];

export var outData = new Array();
class PageBuyerlist extends Component{
  render(){
    return (
      <div style={{margin:'auto',width:1200,}}>
        <h5 style={{fontSize:30}}>我的购物车</h5>
        <Table dataSource={outData} columns={columns} 
        onRowClick={this.deleteRow}
        />
      </div>
    )
  }
  deleteRow(record, index){
      for (var i=0;i<outData.length;i++){
        console.log(i,outData[i].BID,record.BID)
        if (outData[i].BID==record.BID){
          outData.splice(i,1);
          console.log('outdata',outData)
          return;
        }
      }
  }


}


export default PageBuyerlist;