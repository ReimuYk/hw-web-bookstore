import React, {Component} from 'react';
import { Tabs } from 'antd';
import AdminNew from './AdminNew'
import AdminSetting from './AdminSetting'
import AdminThese from './AdminThese'
import {logintype} from './PageLogin'
import AdminStat from './AdminStat'
const TabPane = Tabs.TabPane;



class PageAdmin extends Component{
    render(){
        if (logintype!='admin'){
            return (
                <h1 style={{fontSize:40}}>请用管理员账户登录</h1>
            )
        }
        return (
            <div className="card-container">
                <Tabs type="card">
                <TabPane tab="新建图书" key="1">
                    <AdminNew/>
                </TabPane>
                <TabPane tab="管理已有" key="2">
                    <AdminThese/>
                </TabPane>
                <TabPane tab="用户管理" key="3">
                    <AdminSetting/>
                </TabPane>
                <TabPane tab="销售统计" key="4">
                    <AdminStat/>
                </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default PageAdmin;