import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './tab.css'
import PageHome from './pages/PageHome'
import PageBuyerlist from './pages/PageBuyerlist'
import PageLogin from './pages/PageLogin'
import RegisterForm from './pages/PageRegister'
import PageHomepage from './pages/PageHomepage'
import PageBooks from './pages/PageBooks'
import PageAdmin from './pages/PageAdmin'
import PageDetails from './pages/PageDetails'

class Index extends Component{
    render(){
        return (
            <div class="tab">
                <div class="header-m">
                <div class="nav-menu">
                    <div class="nav-mask">
                    </div>
                    <div class="bili-wrapper clearfix">
                    <div class="nav-con fl">
                        <ul class="rowDirection">
                        <li class="nav-item">
                            <Link tag="div" class="tab-item" to="/index" >
                            <span class="tab-link t">首页</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link tag="div" class="tab-item" to="/books" >
                            <span class="tab-link t">浏览书籍</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link tag="div" class="tab-item" to="/buyerlist">
                            <span class="tab-link t">我的购物车</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link tag="div" class="tab-item" to="/adminbooks" >
                            <span class="tab-link t">管理书籍</span>
                            </Link>
                        </li>
                    <li>
                        <div class="reg">
                        <li class="nav-item">
                            <Link tag="div" class="tab-item t" to="/register">
                            <span class="tab-link">注册</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link tag="div" class="tab-item t" to="/login">
                            <span class="tab-link">登录</span>
                            </Link>
                        </li>
                        </div>
                    </li>
                    <li>
                        <div class="info">
                        <li class="nav-item">
                            <Link tag="div" class="tab-item" to="/homepage">
                            <span class="tab-link t">个人主页</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link tag="div" class="tab-item" to="/index">
                            <span class="tab-link t">注销</span>
                            </Link>
                        </li>
                        </div>
                    </li>
                    </ul>
                </div>

                    </div>
                </div>

                <div id="banner_link" class="head-banner report-wrap-module report-scroll-module">
                    <div class="head-content bili-wrapper">
                    {/* <div class="search">
                        <form class="searchform">
                        <input id="keyword" type="text" value="" class="search-keyword"/>
                        <button class="search-submit"></button>
                        </form>
                        <a class="link-ranking"><span>搜索</span></a>
                    </div> */}
                    </div>

                </div>
                </div>
                <Switch>
                    <Route exact path='/' component={PageHome}/>
                    <Route path='/index' component={PageHome}/>
                    <Route path='/books' component={PageBooks}/>
                    <Route path='/buyerlist' component={PageBuyerlist}/>
                    <Route path='/register' component={RegisterForm}/>
                    <Route path='/login' component={PageLogin}/>
                    <Route path='/homepage' component={PageHomepage}/>
                    <Route path='/adminbooks' component={PageAdmin}/>
                    <Route path='/details' component={PageDetails}/>
                </Switch>
            </div>
        )
    }
}

export default Index;