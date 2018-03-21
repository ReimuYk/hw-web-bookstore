import React, {Component} from 'react';
import { Tabs } from 'antd';
import AdminNew from './AdminNew'
import AdminSetting from './AdminSetting'
import AdminThese from './AdminThese'
const TabPane = Tabs.TabPane;



class PageAdmin extends Component{
    render(){
        return (
            <div className="card-container">
                <Tabs type="card">
                <TabPane tab="新建图书" key="1">
                    <AdminNew/>
                </TabPane>
                <TabPane tab="管理已有" key="2">
                    <AdminThese/>
                </TabPane>
                <TabPane tab="权限控制" key="3">
                    <AdminSetting/>
                </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default PageAdmin;