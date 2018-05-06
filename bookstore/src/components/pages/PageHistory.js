import React, {Component} from 'react';
import { List, Avatar, Button, Spin } from 'antd';

import reqwest from 'reqwest';

let data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
let url='http://localhost:8080/services/orderlist'
let options = {}
options.method = 'GET'
options.mode = 'cors'
options.credentials = 'include'
fetch(url,options).then(function(response){return response.text()})
.then(function(res){
  data=eval(res);
  console.log('historydata',data)
})

class PageHistory extends React.Component {
  render() {
    return (
    <div style={{width:800,margin:'auto'}}>
    <h5 style={{fontSize:30}}>历史订单</h5>
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">订单号：{item.orderid}</a>}
          description={"订单内容："+JSON.stringify(item.orderdata)}
        />
      </List.Item>
    )}
  />
    </div>
    );
  }
}

export default PageHistory;