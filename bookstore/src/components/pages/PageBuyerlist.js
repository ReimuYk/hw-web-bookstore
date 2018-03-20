import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { List, Avatar, Button, Spin, Form, Table, Divider } from 'antd';
import {outData} from './PageBooks'

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
    <span>
      <a href="#">加入购物车</a>
      <Divider type="vertical" />
    </span>
  ),
}, ];

class PageBuyerlist extends Component{
  render(){
    return (
      <div style={{margin:'auto',width:1200,}}>
        <Table dataSource={outData} columns={columns} 
        />
      </div>
    )
  }


}


export default PageBuyerlist;