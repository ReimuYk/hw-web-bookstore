import React, {Component} from 'react';
import { Col, Row} from 'antd'

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
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width:200}}/>
                </Col>
                <Col span={12} style={{align:'left',marginTop:80,width:400}}>
                    <h1 style={{fontSize:30,align:'left'}}>ID:{this.props.location.search.substring(5)}</h1>
                    <h1 style={{fontSize:30,align:'left'}}>书名:这是一本书</h1>
                    <h1 style={{fontSize:30,align:'left'}}>简介:这是一段简介</h1>
                </Col>
            </Row>
            </div>
        )
    }
}



export default PageDetails;