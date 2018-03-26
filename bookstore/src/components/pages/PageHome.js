import React, {Component} from 'react';
import {Carousel, Row, Col, Card, Collapse} from 'antd'
import './CSS-PageHome.css'

const {Meta} = Card;
const Panel = Collapse.Panel;

const text = 'this is a description'

class PageHome extends Component{
    state={
        index: 0,
        direction: null
    }
    render(){
        return (
            <div sytle={{width:800,margin:'auto'}}>
                <Row type="flex" justify="center" align="top">
                    <Col span={5} style={{marginTop:70,marginLeft:30,marginRight:30,}}>
                        <Carousel autoplay dots={false} sytle={{width:200}}>
                            <div>这是一条推荐</div>
                            <div>这是另一条推荐</div>
                        </Carousel>
                    </Col>
                    <Col span={15} style={{margin:50}}>
                        <Row type="flex" justify="center" align="top">
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ width: 180 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                    title="Book1"
                                    description="des of b1"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ width: 180 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                    title="Book2"
                                    description="des of b2"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ width: 180 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                    title="Book3"
                                    description="des of b3"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ width: 180 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                    title="Book4"
                                    description="des of b4"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="top">
                    <Col span={20}>
                    <Collapse accordion  style={{marginLeft:-50}}>
                        <Panel header="This is header 1" key="1">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is header 2" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is header 3" key="3">
                        <p>{text}</p>
                        </Panel>
                    </Collapse>
                    </Col>
                </Row>
            </div>
  
        )
    }
}

export default PageHome;