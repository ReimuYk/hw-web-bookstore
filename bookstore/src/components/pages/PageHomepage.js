import React, {Component} from 'react';
import { Tabs ,Icon} from 'antd';
import Favorite from './HomepageFav'
import Infomation from './HomepageInfo'
const TabPane = Tabs.TabPane

class PageHomepage extends Component{
    render(){
        
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="idcard" />个人信息</span>} key="1">
                    <Infomation/>
                </TabPane>
                {/* <TabPane tab={<span><Icon type="book" />收藏夹</span>} key="2">
                    <Favorite/>
                </TabPane> */}
            </Tabs>
        )
    }
}

export default PageHomepage;