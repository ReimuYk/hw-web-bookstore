import React, {Component} from 'react';
import { Col, Row, Button} from 'antd'

class PageDetails extends React.Component{
    constructor(props) {
        super(props);
        console.log("log",this.props.location.search.substring(5))
    }
    render(){
        return (
            <div style={{width:800,margin:'auto'}}>
            {/* <p>this is book details {this.props.location.search.substring(5)}</p> */}
            <Row type="flex" justify="center" align="top">
                <Col style={{width:200,margin:80}} span={6}>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width:250}}/>
                </Col>
                <Col span={16} style={{align:'left',marginTop:80,width:400}}>
                    <ul>
                        <li style={{fontSize:30}}>
                            ID:{this.props.location.search.substring(5)}
                        </li>
                        <li style={{fontSize:30}}>
                            书名：这是一个书名
                        </li>
                        <li style={{fontSize:30}}>
                            出版社：这是一个出版社
                        </li>
                        <li style={{fontSize:30}}>
                            出版年月：这是一个出版年月
                        </li>
                        <li style={{fontSize:30}}>
                            简介：这是一段简介
                        </li>
                        <li style={{fontSize:30}}>
                            价格：99.98¥
                        </li>
                        <li style={{fontSize:30}}>
                            <Button type="primary" style={{margin:20}}>加入购物车</Button>
                            <Button type="primary" style={{margin:20}}>立即购买</Button>
                        </li>
                    </ul>
                </Col>
            </Row>
            </div>
        )
    }
}



export default PageDetails;