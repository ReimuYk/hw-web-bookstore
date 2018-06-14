import React, {Component} from 'react';
import { Col, Row, Button} from 'antd'
// import {data} from './PageBooks';



class PageDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            book : {picture: null}
        }
        let data = []
        data.splice(0,data.length)
        let url='http://localhost:8080/getbookdata'
        let options = {}
        options.method = 'GET'
        options.mode = 'cors'
        console.log("outer")
        var that = this
        fetch(url,options).then(function(response){return response.text()})
        .then(function(res){
            console.log('res',res)
            res = eval('('+res+')')
            for(var i=0;i<res.length;i++){
                let item = {}
                item.key = res[i]["id"].toString()
                item.ID = res[i]["id"].toString()
                item.name = res[i]["name"]
                item.writer = res[i]["writer"]
                item.cost = res[i]["price"]
                item.date = res[i]["date"]
                item.publish = res[i]["publish"]
                item.num = 0
                item.picture = res[i].picture
                data.push(item)
            }
            console.log('data',data)
            console.log('thisthisdata',data)
            for (var i=0;i<data.length;i++){
                console.log(data[i].ID,that.props.location.search.substring(5))
                if (data[i].ID==that.props.location.search.substring(5)){
                    that.setState({
                        book:data[i]
                    })
                }
            }
            console.log('book',that.state.book)
        })
        
        window.location.href='#'
    }
    render(){
        // let imgsrc = this.state.book!=null ? (this.state.book.picture!=undefined ? this.state.book.picture : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"):"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        // let imgsrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        let imgsrc = this.state.book.picture
        console.log('img',this.state.book)
        return (
            <div style={{width:800,margin:'auto'}}>
            <Row type="flex" justify="center" align="top">
                <Col style={{width:200,margin:80}} span={6}>
                    <img alt="NO PIC" src={this.state.book.picture} style={{width:250}}/>
                </Col>
                <Col span={16} style={{align:'left',marginTop:80,width:400}}>
                    <ul>
                        <li style={{fontSize:30,display:Row}}>
                            书的ID：{this.props.location.search.substring(5)}
                        </li>
                        <li style={{fontSize:30,display:Row}}>
                            书名：{this.state.book.name}          ''
                        </li>
                        <li style={{fontSize:30,display:Row}}>
                            出版社：{this.state.book.publish}
                        </li>
                        <li style={{fontSize:30}}>
                            出版年月：{this.state.book.date}
                        </li>
                        {/* <li style={{fontSize:30}}>
                            简介：{thi}
                        </li> */}
                        <li style={{fontSize:30}}>
                            价格：{this.state.book.cost}
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