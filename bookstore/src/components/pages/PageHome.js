import React, {Component} from 'react';
import {Carousel, Row, Col, Card, Collapse} from 'antd'
import './CSS-PageHome.css'
import { Switch, Route, Link } from 'react-router-dom'

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
                <div class="idxbook">
                    <div style={{width:1400,margin:'auto'}}>
                    <Row type="flex" justify="center" align="top" sytle={{height:220}}>
                        <Col style={{width:200}}>
                            <h1 class="rowhead">热销书籍</h1>
                        </Col>
                        <Col style={{width:1200}}>
                            <Link to="./details?bid=B123456">
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            </Link>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" align="top" class="idxrow">
                        <Col style={{width:200}}>
                            <h1 class="rowhead">朋友在看</h1>
                        </Col>
                        <Col style={{width:1200}}>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" align="top" class="idxrow">
                        <Col style={{width:200}}>
                            <h1 class="rowhead">猜你喜欢</h1>
                        </Col>
                        <Col style={{width:1200}}>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                            <img src={require("./assets/bk1.jpg")} class="smallbook"/>
                        </Col>
                    </Row>
                    </div>
                </div>
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
                        <Panel header="这是一条资讯（第一条）" key="1">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="这是一条资讯（第二条）" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="这是一条资讯（第三条）" key="3">
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