import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { List, Avatar, Button, Spin, Form, Table, Divider, Input, Icon } from 'antd';
import { outData} from './PageBuyerlist'
import './CSS-PageBooks.css'
import {calcTotal} from './PageBuyerlist'

export const data = [{
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
    calcTotal();
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
    calcTotal();
    stat.this_rowkey=""
    return
  }
}

function prt(a1,record){
  console.log('a1',a1);
  a1.num += 1;
  console.log('record',record)
}




class PageBooks extends Component{
  state = {
    filterDropdownVisible: false,
    data: data,
    searchText: '',
    filtered: false,
  };
 

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    console.log('onsearch')
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        console.log('data search')
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        console.log('record',record)
        return ( {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        });
      }).filter(record => !!record),
    });
  }
  render(){
    const columns = [{
      title: 'ID',
      dataIndex: 'ID',
      key: 'id',
      sorter: (a,b)=>a<b,
    }, {
      title: '书名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a,b)=>a<b,
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput && this.searchInput.focus());
      },
      onFilter: (value, record) => record.address.indexOf(value) === 0,
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
    }, 
    ];
    return (
      <div style={{margin:'auto',width:1200,}}>
        <h5 style={{fontSize:30}}>书籍列表</h5>
        <Table dataSource={this.state.data} columns={columns} 
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
    console.log('datasource',data)
  }
  setRowKey(record,index){
    stat.this_rowkey=record.ID;
    console.log(stat.this_rowkey);
  }
}


export default PageBooks;